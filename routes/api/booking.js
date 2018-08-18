const router = require("express").Router();
const bookingController = require("../../controllers/bookingController");

router.route("/")
  .get(bookingController.findAll)
  .post(bookingController.create);

router
  .route("/:id")
  .get(bookingController.findById)
  .put(bookingController.update)
  .delete(bookingController.remove);

module.exports = router;
