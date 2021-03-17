const router = require("express").Router();
const applicationRoutes = require("./applications");
const userRoutes = require("./user");

// applicaiton routes
router.use("/logs", applicationRoutes);
router.use("/user", userRoutes);

module.exports = router;
