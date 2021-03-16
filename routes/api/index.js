const router = require("express").Router();
const applicationRoutes = require("./applications");

// applicaiton routes
router.use("/logs", applicationRoutes);

module.exports = router;
