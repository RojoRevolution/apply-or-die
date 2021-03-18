const db = require("../../models/");
const router = require("express").Router();
const userController = require("../../controllers/UserController");
var passport = require("../../config/passport");


// router.post("/login", passport.authenticate("local"), function (req, res) {
//     console.log('///// Sign In Success ////');
//     res.json(req.user);
// })


router.route("/login",)
    // This get should be find by email not id
    .get(userController.findById)

router.route("/user_data")
    // Route for getting some data about our user to be used client side
    .get(userController.findById)



// router.post("/signup", function (req, res) {
//     db.User.findOne({ email: req.body.email }), function (err, user) {
//         if (err) throw err;
//         if (user) {
//             console.log("User already exists")
//             return res.json("This user already exists")
//         }
//         if (!user) {
//             let newUser = new db.User({
//                 email: req.body.email,
//                 password: req.body.password
//             })
//             newUser
//         }
//     }
// })



router.route("/signup")
    .post(userController.create);


module.exports = router;
