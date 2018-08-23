const router = require("express").Router();
const contactUsRoutes = require("./contactUs");

// Book routes
router.use("/contactus", contactUsRoutes);

module.exports = router;
