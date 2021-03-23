const router = require("express").Router();
const applicationController = require("../../controllers/ApplicationController");
// const { db } = require("../../models/application");
const db = require("../../models");


// Matches with "/api/logs"
router.route("/")
    .get(applicationController.findAll)
    .get(applicationController.findStatus)
    .post(applicationController.create);

// Matches with "/api/logs/:id"

// router.post("/:id", (req, res) => {
//     console.log("IN API PUT ROUTE")
//     db.Application.(req.body).then()
// })


router.route("/:id")
    .get(applicationController.findById)
    .put(applicationController.updateApp)
    .delete(applicationController.remove);



router.route("/note/:id")
    .put(applicationController.addNote)

module.exports = router;
