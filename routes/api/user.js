const router = require("express").Router();
const userController = require("../../controllers/UserController");

router.route("/login")
    // This get should be find by email not id
    .get(userController.findById)

router.route("/user_data")
    // Route for getting some data about our user to be used client side
    .get(userController.findById)

router.route("/signup")
    .post(userController.create);


module.exports = router;
