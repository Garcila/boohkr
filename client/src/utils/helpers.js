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
};
