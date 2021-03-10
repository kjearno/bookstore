const { Router } = require("express");
const rateLimit = require("express-rate-limit");
const { rateLimitHandler } = require("@lib/handlers");
const authController = require("./authController");

const router = Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true,
  handler: rateLimitHandler,
});

router.post("/login", limiter, authController.login);
router.get("/logout", authController.protect, authController.logout);

module.exports = router;
