import axios from 'axios';

export default {
  fetchBooks: term => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${term}`;
    return axios.get(URL);
  },
};
