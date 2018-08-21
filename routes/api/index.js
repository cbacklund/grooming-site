const router = require("express").Router();
const contactUsRoutes = require("./contactus");

// Book routes
router.use("/contactus", contactUsRoutes);

module.exports = router;
