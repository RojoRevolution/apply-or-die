const router = require("express").Router();
const applicationController = require("../../controllers/ApplicationController");


// Matches with "/api/logs"
router.route("/")
    .get(applicationController.findAll)
    .get(applicationController.findStatus)
    .post(applicationController.create);

router.route("/:id")
    .get(applicationController.findById)
    .put(applicationController.updateApp)
    .delete(applicationController.remove);



router.route("/note/:id")
    .put(applicationController.addNote)

module.exports = router;
