const router = require("express").Router();
const contactUsRoutes = require("./contactUs");
const bookingRoutes = require("./booking");

router.use("/contactus", contactUsRoutes);
router.use("/booking", bookingRoutes);

module.exports = router;
