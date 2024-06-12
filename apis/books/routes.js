const {
  getAllBooks,
  getBookById,
  createABook,
  updateABook,
  deleteABook,
} = require("./controllers");

const express = require("express");

const upload = require("../../middlewares/multer");

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);

booksRouter.get("/:id", getBookById);

booksRouter.post("/", upload.single("image"), createABook);

booksRouter.put("/:id", updateABook);

booksRouter.delete("/:id", deleteABook);

module.exports = booksRouter;
