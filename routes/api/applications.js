const router = require("express").Router();
const applicationController = require("../../controllers/ApplicationController");

// Matches with "/api/logs"
router.route("/")
    .get(applicationController.findAll)
    .post(applicationController.create);

// Matches with "/api/logs/:id"
router.route("/:id")
    .get(applicationController.findById)
    .put(applicationController.update)
    .delete(applicationController.remove);

module.exports = router;
