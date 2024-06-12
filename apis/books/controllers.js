const Book = require("../../models/Book.js");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return req.status(200).json(books);
  } catch (error) {
    return next(error);
  }
};

const getBookById = async (req, res, next) => {
  const id = req.param.id;
  try {
    const book = await Book.findById(id);
    if (book) {
      return res.status(200).json(book);
    } else {
      return res.status(404).json({ message: "No book with this ID" });
    }
  } catch (error) {
    return next(error);
  }
};

const createABook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newBook = await Book.create(req.body);
    return res.status(201).json(newBook);
  } catch (error) {
    return next(error);
  }
};

const updateABook = async (req, res, next) => {
  const id = req.param.id;
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedBook);
  } catch (error) {
    return next(error);
  }
};

const deleteABook = async (req, res, next) => {
  const id = req.param.id;
  try {
    const books = await Book.find();
    await Book.findByIdAndDelete(id);
    return res.status(204).json(books);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createABook,
  updateABook,
  deleteABook,
};
