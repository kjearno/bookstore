const { Router } = require("express");
const authController = require("./authController");

const router = Router();

router.post("/login", authController.login);
router.get("/logout", authController.protect, authController.logout);

module.exports = router;
