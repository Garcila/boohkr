import React from 'react';
import BookItem from '../BookItem';

export default function BookList({foundBooks, deleteBook}) {
  const bookItems = foundBooks.map(book => {
    return (
      <BookItem key={book.googleId} book={book} deleteBook={deleteBook}>
        {book.title}
      </BookItem>
    );
  });
  return <ul>{bookItems}</ul>;
}
