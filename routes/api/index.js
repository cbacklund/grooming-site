const router = require("express").Router();
const bookingRoutes = require("./booking");
const contactUsRoutes = require("./contactUs");

// Book routes
router.use("/booking", bookingRoutes);
router.use("/contactus", contactUsRoutes);

module.exports = router;
