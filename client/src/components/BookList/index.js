import React from 'react';
import BookItem from '../BookItem';

export default function BookList({foundBooks}) {
  const bookItems = foundBooks.map(book => {
    return (
      <BookItem key={book.googleId} book={book}>
        {book.title}
      </BookItem>
    );
  });
  return <ul>{bookItems}</ul>;
}
