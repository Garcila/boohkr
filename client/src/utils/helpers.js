import React from 'react';

export default {
  //  account for one or two authors
  authorList: function(authors) {
    // first I check that the found books array has more than one item,
    // meaning that it did found books.  If not, I suppose that the only
    // book in the array is the not foundBook created by default
    if (authors.length > 1) {
      return authors.map((author, i) => {
        return i < authors.length - 1 ? (
          <span key={author}>{author} - </span>
        ) : (
          <span key={author}>{author}</span>
        );
      });
    }
  },
  NotFoundBook: {
    googleId: '-',
    title: 'NOT FOUND',
    subtitle: 'Sorry could not find that book',
    authors: '-',
    description: 'Please try to search again',
    pageCount: '-',
    publisher: '-',
    publishedDate: '-',
    thumbnail:
      'https://res.cloudinary.com/garcila/image/upload/c_scale,h_200,w_150/v1556115282/imagenotavailable.jpg',
    previewLink: '-',
  },
};
