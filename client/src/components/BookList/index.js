import React from 'react';
import BookItem from '../BookItem';

export default function BookList({foundBooks}) {
  const bookItems = foundBooks.map(book => {
    return (
      <BookItem
        key={book.id}
        bookTitle={book.volumeInfo.title}
        blurb={book.volumeInfo.subtitle}
        descirption={book.volumeInfo.description}
        image={book.volumeInfo.imageLinks.thumbnail}
      >
        {book.title}
      </BookItem>
    );
  });
  return <ul>{bookItems}</ul>;
}
