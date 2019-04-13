import React, {Component} from 'react';
import Title from '../components/Title/Title';
import BookList from '../components/BookList/BookList';

import API from '../utils/API';

export default class Saved extends Component {
  state = {
    booksInDb: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({booksInDb: res.data}))
      .catch(err => console.log(err));
  };

  deleteBook = _id => {
    API.deleteBook(_id)
      .then(() => {
        // find books that have not been deleted and update foundBooks list
        const remainingBooks = this.state.booksInDb.filter(
          book => book._id !== _id
        );
        this.setState({booksInDb: remainingBooks});
      })
      .catch(err => console.log(err));
  };

  render() {
    const showBooksInDb =
      this.state.booksInDb.length > 0 ? (
        <BookList
          booksInDb={this.state.booksInDb}
          deleteBook={this.deleteBook}
        />
      ) : (
        <h1>...Loading</h1>
      );
    return (
      <div>
        <Title pageTitle='Saved Books' />
        {showBooksInDb}
      </div>
    );
  }
}
