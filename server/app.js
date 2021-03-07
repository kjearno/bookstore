const express = require("express");
const cookieParser = require("cookie-parser");
require("express-async-errors");
require("module-alias/register");

const { authRouter } = require("@features/auth");
const { authorsRouter } = require("@features/authors");
const { booksRouter } = require("@features/books");
const { categoriesRouter } = require("@features/categories");
const { usersRouter } = require("@features/users");

const { errorHandler } = require("@lib/errors");

const app = express();

// 1) Global middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

// 2) API routes
app.use("/api/auth", authRouter);
app.use("/api/authors", authorsRouter);
app.use("/api/books", booksRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/users", usersRouter);

app.use(errorHandler);

module.exports = app;
