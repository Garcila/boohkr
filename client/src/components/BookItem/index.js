import React from 'react';

export default function BookItem(props) {
  const {bookTitle, subtitle, description, image} = props;
  return (
    <div>
      <h3>{bookTitle}</h3>
      <h4>{subtitle}</h4>
      {/* <p>{authors}</p> */}
      <div>
        <img src={image} alt='book image' />
        <p>{description}</p>
        <button>View</button>
        <button>Save</button>
      </div>
    </div>
  );
}
