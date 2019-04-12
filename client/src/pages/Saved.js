import React, {Component} from 'react';
import Title from '../components/Title';
import BookList from '../components/BookList';

import axios from 'axios';

export default class Saved extends Component {
  state = {
    foundBooks: [],
  };

  componentDidMount() {
    axios
      .get('/api/books')
      .then(res => this.setState({foundBooks: res.data}))
      .catch(err => console.log(err));
  }

  deleteBook = _id => {
    axios
      .delete(`/api/books/${_id}`)
      .then(() => {
        // find books that have not been deleted and update foundBooks list
        const foundBooks = this.state.foundBooks.filter(
          book => book._id !== _id
        );
        this.setState({foundBooks});
      })
      .catch(err => console.log(err));
  };

  render() {
    const booksInDb =
      this.state.foundBooks.length > 0 ? (
        <BookList
          foundBooks={this.state.foundBooks}
          deleteBook={this.deleteBook}
        />
      ) : (
        <h1>...Loading</h1>
      );
    return (
      <div>
        <Title pageTitle='Saved Books' />
        <p>Saved books will be here</p>
        {booksInDb}
      </div>
    );
  }
}
