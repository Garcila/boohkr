import React from 'react';
import BookItem from '../BookItem';

export default function BookList({foundBooks}) {
  const bookItems = foundBooks.map(book => {
    return (
      <BookItem
        key={book.id}
        book={book}
        id={book.id}
        image={book.volumeInfo.imageLinks.thumbnail}
      >
        {book.title}
      </BookItem>
    );
  });
  return <ul>{bookItems}</ul>;
}
