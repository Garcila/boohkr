import React from 'react';
import BookItem from '../BookItem';

export default function BookList({foundBooks}) {
  const bookItems = foundBooks.map(book => {
    return (
      <BookItem
        key={book.id}
        bookTitle={book.volumeInfo.title}
        subtitle={book.volumeInfo.subtitle}
        description={book.volumeInfo.description}
        image={book.volumeInfo.imageLinks.thumbnail}
        authors={book.volumeInfo.authors}
      >
        {book.title}
      </BookItem>
    );
  });
  return <ul>{bookItems}</ul>;
}
