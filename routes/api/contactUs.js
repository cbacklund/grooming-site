const router = require("express").Router();
const contactusController = require("../../controllers/contactusController");

router.route("/")
  .get(contactusController.findAll)
  .post(contactusController.create);

router
  .route("/:id")
  .get(contactusController.findById)
  .put(contactusController.update)
  .delete(contactusController.remove);

module.exports = router;
