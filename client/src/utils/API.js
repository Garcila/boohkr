import axios from 'axios';

export default {
  // search Books in Google Books API
  searchBooks: term => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${term}`;
    return axios.get(URL);
  },
  // Gets all books
  getBooks: function() {
    return axios.get(`/api/books`);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get(`/api/books/${id}`);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post('/api/books', bookData);
  },
};
