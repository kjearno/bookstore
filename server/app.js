const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
require("express-async-errors");
require("module-alias/register");

const { authRouter } = require("@features/auth");
const { authorsRouter } = require("@features/authors");
const { booksRouter } = require("@features/books");
const { categoriesRouter } = require("@features/categories");
const { usersRouter } = require("@features/users");

const { AppError, errorHandler } = require("@lib/errors");
const { rateLimitHandler } = require("@lib/handlers");

const app = express();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: rateLimitHandler,
});

// 1) Global middleware
app.use(helmet());
app.use("/api/", apiLimiter);
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(hpp());

// 2) API routes
app.use("/api/auth", authRouter);
app.use("/api/authors", authorsRouter);
app.use("/api/books", booksRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/users", usersRouter);

app.all("*", (req, res) => {
  throw new AppError(404, `Can't find ${req.originalUrl}`);
});

app.use(errorHandler);

module.exports = app;
