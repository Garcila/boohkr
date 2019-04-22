import React from 'react';

export default {
  //  account for one or two authors
  authorList: function(authors) {
    return authors.map((author, i) => {
      return i < authors.length - 1 ? (
        <span key={author}>{author} - </span>
      ) : (
        <span key={author}>{author}</span>
      );
    });
  },
  notFoundBook: function() {
    const bookInfo = {
      googleId: 'n/a',
      title: 'BOOK NOT FOUND',
      subtitle: 'Please try new search',
      authors: [''],
      description: '',
      pageCount: '',
      publisher: '',
      publishedDate: '',
      thumbnail:
        'https://res.cloudinary.com/garcila/image/upload/c_scale,w_300/v1555695687/07.png',
      previewLink: '',
    };
    return bookInfo;
  },
};
