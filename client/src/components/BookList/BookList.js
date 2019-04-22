import React from 'react';
import BookItem from '../BookItem/BookItem';
import styled from 'styled-components';

const BookListSt = styled.ul`
  display: grid;
  grid-column-gap: 4rem;
  grid-row-gap: 6rem;
  margin: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(500px, auto);
`;

export default function BookList({foundBooks, booksInDb, deleteBook}) {
  // set books to be either the array coming from the search or the db
  const books = foundBooks ? foundBooks : booksInDb;
  const bookItems = books.map(book => {
    return (
      <BookItem key={book.googleId} book={book} deleteBook={deleteBook}>
        {book.title}
      </BookItem>
    );
  });

  return <BookListSt>{bookItems}</BookListSt>;
}
