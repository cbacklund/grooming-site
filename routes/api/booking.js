const router = require("express").Router();
const bookingController = require("../../controllers/bookingController");

router.route("/")
    .get(bookingController.findAll)
    .post(bookingController.create);

router.route("/:id")
    .delete(bookingController.remove);

module.exports = router;