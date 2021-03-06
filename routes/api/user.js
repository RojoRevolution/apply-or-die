const router = require("express").Router();
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

router.route("/info/:id")
    .get(UserController.populateEntries)




module.exports = router;
