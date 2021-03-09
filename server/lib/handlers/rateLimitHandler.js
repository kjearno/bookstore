const { CustomError } = require("@lib/errors");

const rateLimitHandler = () => {
  throw new CustomError(429, "Too many requests, please try again later.");
};

module.exports = rateLimitHandler;
