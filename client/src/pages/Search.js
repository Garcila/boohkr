import React, {Component} from 'react';
import BookList from '../components/BookList/BookList';
import Title from '../components/Title/Title';
import SearchBar from '../components/SearchBar/SearchBar';

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
    const foundBooks = [];
    API.searchBooks(term)
      .then(res => {
        res.data.items.map(function(book) {
          const bookInfo = {
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            pageCount: book.volumeInfo.pageCount,
            publisher: book.volumeInfo.publisher,
            publishedDate: book.volumeInfo.publishedDate,
            thumbnail: book.volumeInfo.imageLinks.thumbnail,
            previewLink: book.volumeInfo.previewLink,
          };
          foundBooks.push(bookInfo);
          return null;
        });
      })
      .then(() => this.setState({foundBooks}))
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
