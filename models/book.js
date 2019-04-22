const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: {type: String, require: true},
  title: {type: String, required: true},
  subtitle: {type: String},
  authors: {type: [String], required: true},
  description: String,
  pageCount: {type: Number},
  publisher: {type: String},
  publishedDate: {type: Date},
  thumbnail: String,
  link: String,
  date: {type: Date, default: Date.now},
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
