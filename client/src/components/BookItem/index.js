import React from 'react';
import {Link} from 'react-router-dom';
import helpers from '../../utils/helpers';

export default function BookItem(props) {
  const {bookTitle, subtitle, description, authors} = props.book.volumeInfo;
  const {id} = props.book;
  const {image} = props;

  console.log(authors);

  // render only 240 characters in the initial description
  const shortDescription =
    description && `${description.substring(0, 240)} ...`;

  // helper function to render authors
  const authorsList = authors && helpers.authorList(authors);

  return (
    <li>
      <h3>{bookTitle}</h3>
      <h4>{subtitle}</h4>
      <p>{authorsList}</p>
      <div>
        <img src={image} alt={`book: ${bookTitle}`} />
        <p>{shortDescription}</p>
        <Link
          to={{
            pathname: `/search/${id}`,
            state: {
              book: props,
              image,
            },
          }}
        >
          <button>View</button>
        </Link>
        <button>Save</button>
      </div>
    </li>
  );
}
