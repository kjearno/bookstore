class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.name = "CustomError";
    this.statusCode = statusCode;
  }
}

module.exports = CustomError;
