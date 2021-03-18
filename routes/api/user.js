const db = require("../../models/");
const router = require("express").Router();
const userController = require("../../controllers/UserController");
var passport = require("../../config/passport");


// router.route("/login",)
//     // This get should be find by email not id
//     .get(userController.findById)
router.post("/login", passport.authenticate("local"), function (req, res) {
    console.log("/login request.body: ", req.body)
    console.log('///// Sign In Success ////');
    res.json(req.user);
})


// router.route("/signup").post(userController.create);
router.post("/signup", function (req, res) {
    console.log('//// API ROUTE ////')
    console.log("/signup req.body: ", req.body)
    db.User.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(function () {
            console.log('====================')
            console.log('REDIRECTING TO LOGIN')
            console.log('====================')
            res.redirect(307, "/api/user/login");
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
});


// Route for logging user out
// app.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/");
// });


router.route("/user_data")
    // Route for getting some data about our user to be used client side
    .get(userController.findById)


module.exports = router;
