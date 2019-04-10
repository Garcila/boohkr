import React from 'react';
import helpers from '../utils/helpers';

export default function Detail(props) {
  const {
    title,
    subtitle,
    authors,
    description,
    pageCount,
    publisher,
    publishedDate,
  } = props.location.state.book.book.volumeInfo;
  const {image} = props.location.state.book;
  console.log(props.location.state.book.book.volumeInfo.authors);
  console.log(props.location.state.book.image);
  console.log('from detail ', authors);

  // helper function to render authors
  const authorList = helpers.authorList(authors);

  return (
    <div>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <ul>{authorList}</ul>
      <p>Page count: {pageCount}</p>
      <p>
        Publisher {publisher} on {publishedDate}
      </p>
      <div>
        <img src={image} alt={`book: ${title}`} />
        <p>{description}</p>
      </div>
    </div>
  );
}
