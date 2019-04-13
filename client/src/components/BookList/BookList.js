import React from 'react';
import BookItem from '../BookItem/BookItem';

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
  return <ul>{bookItems}</ul>;
}
