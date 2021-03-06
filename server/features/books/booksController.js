const { CustomError } = require("@lib/errors");
const { Book } = require("@lib/sequelize");

exports.getBooks = async (req, res) => {
  const books = await Book.findAll({
    include: ["author"],
  });

  res.status(200).json(books);
};

exports.createBook = async (req, res) => {
  const { title, description, cover, price, authorId, categoryId } = req.body;

  const book = await Book.create({
    title,
    description,
    cover,
    price,
    authorId,
    categoryId,
  });

  res.status(201).json(book);
};

exports.getBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id, {
    include: ["author"],
  });

  if (!book) {
    throw new CustomError(404, `Book with id ${id} not found`);
  }

  res.status(200).json(book);
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);

  if (!book) {
    throw new CustomError(404, `Book with id ${id} not found`);
  }

  const { title, description, cover, price, authorId, categoryId } = req.body;

  await book.update({
    title,
    description,
    cover,
    price,
    authorId,
    categoryId,
  });

  res.status(200).json(book);
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);

  if (!book) {
    throw new CustomError(404, `Book with id ${id} not found`);
  }

  await book.destroy();

  res.status(204).json();
};
