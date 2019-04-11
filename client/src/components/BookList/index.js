import React from 'react';
import BookItem from '../BookItem';

export default function BookList({foundBooks}) {
  const bookItems = foundBooks.map(book => {
    return (
      <BookItem
        key={book.title + book.pageCount}
        book={book}
        id={book.title + book.pageCount}
      >
        {book.title}
      </BookItem>
    );
  });
  return <ul>{bookItems}</ul>;
}
