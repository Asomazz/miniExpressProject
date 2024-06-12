const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: { type: String, default: "sub-buzz-27949-1490298158-6.jpg" },
});

module.exports = mongoose.model("Book", bookSchema);
