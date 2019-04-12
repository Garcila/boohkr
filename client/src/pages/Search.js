import React, {Component} from 'react';
import BookList from '../components/BookList';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';

import API from '../utils/API';
export default class Search extends Component {
  state = {
    foundBooks: [],
  };

  componentDidMount() {
    this.searchBooks('carl sagan');
  }

  searchBooks = term => {
    this.setState({foundBooks: []});
    API.searchBooks(term)
      .then(res =>
        res.data.items.map(book => {
          const {
            title,
            subtitle,
            authors,
            description,
            pageCount,
            publisher,
            publishedDate,
            previewLink,
          } = book.volumeInfo;
          const bookInfo = {
            googleId: book.id,
            title,
            subtitle,
            authors,
            description,
            pageCount,
            publisher,
            publishedDate,
            thumbnail: book.volumeInfo.imageLinks.thumbnail,
            previewLink,
          };
          return this.setState({
            foundBooks: [...this.state.foundBooks, bookInfo],
          });
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Title pageTitle='Boohkr Search' />
        <p>Search page will be here</p>
        <SearchBar searchBooks={this.searchBooks} />
        <BookList foundBooks={this.state.foundBooks} />
      </div>
    );
  }
}
