const router = require("express").Router();
const db = require("../../models/");
const UserController = require("../../controllers/UserController")

router.route("/login")
    .post(UserController.logIn)

router.route("/signUp")
    .post(UserController.signUp)

router.route("/info")
    .get(UserController.getInfo)

router.route("/logout")
    .get(UserController.logOut)


router.route("/logout")
    .get(UserController.logOut)

router.route("/newapp/:id")
    .put(UserController.pushApplications)





module.exports = router;
