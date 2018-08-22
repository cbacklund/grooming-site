const router = require("express").Router();
const contactusController = require("../../controllers/contactusController");

router.route("/")
  .get(contactusController.findAll)
  .post(contactusController.create);

module.exports = router;
