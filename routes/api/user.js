const db = require("../../models/");
const router = require("express").Router();
const userController = require("../../controllers/UserController");
var passport = require("../../config/passport");


router.post("/login", passport.authenticate("local"), function (req, res) {
    console.log('///// Sign In Success ////');
    res.json(req.user);
})


// router.route("/login",)
//     // This get should be find by email not id
//     .get(userController.findById)

router.route("/user_data")
    // Route for getting some data about our user to be used client side
    .get(userController.findById)



router.post("/signup", function (req, res) {

})



// router.route("/signup")
//     .post(userController.create);


module.exports = router;
