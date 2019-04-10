import React from 'react';

export default function BookItem(props) {
  const {bookTitle, subtitle, description, image, authors} = props;

  // render only 240 characters in the initial description
  const shortDescription = `${description.substring(0, 240)} ...`;

  //  account for one or two authors
  const authorsList = authors.map((author, i) => {
    return i < authors.length - 1 ? (
      <span key={author}>{author} - </span>
    ) : (
      <span key={author}>{author}</span>
    );
  });

  return (
    <div>
      <h3>{bookTitle}</h3>
      <h4>{subtitle}</h4>
      <p>{authorsList}</p>
      <div>
        <img src={image} alt='book image' />
        <p>{shortDescription}</p>
        <button>View</button>
        <button>Save</button>
      </div>
    </div>
  );
}
