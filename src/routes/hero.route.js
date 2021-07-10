const express = require("express");
const router = express.Router({ mergeParams: true });

const controller = require("../controllers/hero");

router.route("/").get(controller.getAll);
router.use("/").post(controller.create);

module.exports = router;
