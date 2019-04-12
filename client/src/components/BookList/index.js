import React from 'react';
import BookItem from '../BookItem';

export default function BookList({foundBooks, deleteBook}) {
  const bookItems = foundBooks.map((book, i, foundBooks) => {
    return (
      <BookItem
        key={book.googleId}
        book={book}
        foundBooks={foundBooks}
        deleteBook={deleteBook}
      >
        {book.title}
      </BookItem>
    );
  });
  return <ul>{bookItems}</ul>;
}
