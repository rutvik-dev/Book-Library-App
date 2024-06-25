const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  publishedDate: { type: Date, required: true }
});

let Book = mongoose.model('Book', BookSchema);
module.exports = Book