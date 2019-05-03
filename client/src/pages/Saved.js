import React, {Component} from 'react';
import Title from '../components/Title/Title';
import BookList from '../components/BookList/BookList';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

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
        <LoadingSt>
          <Loader type='Puff' color='white' height='100' width='100' />
        </LoadingSt>
      );
    return (
      <SavedContainerSt>
        <Title pageTitle='Boohkr Saved' subtitle='Your collection' />
        {showBooksInDb}
      </SavedContainerSt>
    );
  }
}

// CSS_____________________________________________________

const SavedContainerSt = styled.div`
  flex: 1 auto;
  background: url('https://res.cloudinary.com/garcila/image/upload/c_scale,o_22,w_1000/v1555690658/Boohkr/02.png')
    repeat-y 50vw;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    background: url('https://res.cloudinary.com/garcila/image/upload/c_scale,o_22,w_400/v1555690658/Boohkr/02.png')
      repeat-y 40vw;
  }
`;

const LoadingSt = styled.h1`
  display: flex;
  flex: 1 auto;
  justify-content: center;
  align-items: center;
`;
