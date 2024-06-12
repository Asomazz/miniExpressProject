const booksRouter = require("./apis/books/routes");
const express = require("express");
const connectDB = require("./database");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");

dotenv.config();

app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/books", booksRouter);

app.use(notFound);
app.use(errorHandler);

connectDB();

app.listen(process.env.PORT, () => {
  console.log("I am running on port ", process.env.PORT);
});
