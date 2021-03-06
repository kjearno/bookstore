const errorHandler = (err, req, res, next) => {
  if (err.name === "CustomError") {
    res.status(err.statusCode).json(err.message);
    return;
  }

  res.status(400).json(err.message);
};

module.exports = errorHandler;
