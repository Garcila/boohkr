import React, {Component} from 'react';
import BookList from '../components/BookList/BookList';
import Title from '../components/Title/Title';
import SearchBar from '../components/SearchBar/SearchBar';
import styled from 'styled-components';

import Loader from 'react-loader-spinner';

import API from '../utils/API';

const SearchContainerSt = styled.div`
  flex: 1;
  background: url('https://res.cloudinary.com/garcila/image/upload/c_scale,o_22,w_1000/v1555623687/06.png')
    no-repeat right;

  @media only screen and (min-device-width: 480px) and (max-device-width: 770px) and (-webkit-min-device-pixel-ratio: 2) {
    background: url('https://res.cloudinary.com/garcila/image/upload/c_scale,o_12,w_1000/v1555623687/06.png')
      repeat-y right;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    background: url('https://res.cloudinary.com/garcila/image/upload/c_scale,o_12,w_1000/v1555623687/06.png')
      right;
  }
`;

const LoadingSt = styled.h1`
  display: flex;
  flex: 1 auto;
  justify-content: center;
  align-items: center;
`;

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
            thumbnail:
              (book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail) ||
              'https://res.cloudinary.com/garcila/image/upload/c_scale,h_200,w_150/v1556115282/imagenotavailable.jpg',
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
      <SearchContainerSt>
        <Title
          pageTitle='Boohkr Search'
          subtitle='Look for books to save in your collection'
        />
        <SearchBar searchBooks={this.searchBooks} />
        {this.state.foundBooks.length > 0 ? (
          <BookList foundBooks={this.state.foundBooks} />
        ) : (
          <LoadingSt>
            <Loader type='Puff' color='white' height='100' width='100' />
          </LoadingSt>
        )}
      </SearchContainerSt>
    );
  }
}
