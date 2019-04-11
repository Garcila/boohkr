import React from 'react';
import {Link} from 'react-router-dom';
import helpers from '../../utils/helpers';

export default function BookItem(props) {
  const {title, subtitle, description, authors, thumbnail, id} = props.book;
  // const {id} = props.book;
  // const {thumbnail} = props.book.volumeInfo.imageLinks;

  // render only 240 characters in the initial description
  const shortDescription =
    description && `${description.substring(0, 240)} ...`;

  // helper function to render authors
  const authorsList = authors && helpers.authorList(authors);

  return (
    <li>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{authorsList}</p>
      <div>
        <img src={thumbnail} alt={`book: ${title}`} />
        <p>{shortDescription}</p>
        <Link
          to={{
            pathname: `/search/${id}`,
            state: {
              book: props,
              thumbnail,
            },
          }}
        >
          <button>View</button>
        </Link>
        <Link
          to={{
            pathname: `/api/search/${id}`,
            state: {
              book: props,
              thumbnail,
            },
          }}
        >
          <button>Save</button>
        </Link>
      </div>
    </li>
  );
}
