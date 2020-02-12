const router = require("express").Router();
const bookRoutes = require("./employees");

// Book routes
router.use("/employees", bookRoutes);

module.exports = router;