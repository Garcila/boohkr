import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import helpers from '../../utils/helpers';
import axios from 'axios';

export default class BookItem extends Component {
  state = {
    toSaved: false,
  };

  saveBook = () => {
    axios
      .post('/api/books', this.props.book)
      // change the state of toSaved in order to trigger <Redirect to='/saved' />
      .then(() => this.setState(() => ({toSaved: true})))
      .catch(err => console.log(err));
  };

  render() {
    // if (this.state.toSaved === true) {
    //   return <Redirect to='/saved' />;
    // }
    const {
      _id,
      title,
      subtitle,
      description,
      authors,
      thumbnail,
      googleId,
    } = this.props.book;

    // render only 240 characters in the initial description
    const shortDescription =
      description && `${description.substring(0, 240)} ...`;

    // helper function to render authors
    const authorsList = authors && helpers.authorList(authors);

    // function to conditionally render the delete button depending if user is visiting Saved or Search
    const deleteButton = _id ? (
      <button onClick={() => this.props.deleteBook(_id)}>Delete</button>
    ) : null;

    const saved = this.state.toSaved ? (
      <div
        style={{
          position: 'absolute',
          color: 'white',
          top: '5px',
          backgroundColor: 'red',
          whiteSpace: 'nowrap',
          padding: '5px',
        }}
      >
        saved
      </div>
    ) : null;
    return (
      <li>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{authorsList}</p>
        <div>
          <div style={{position: 'relative'}}>
            <img src={thumbnail} alt={`book: ${title}`} />
            {saved}
          </div>
          <p>{shortDescription}</p>
          <Link
            to={{
              pathname: `/search/${googleId}`,
              state: {
                book: this.props,
                thumbnail,
              },
            }}
          >
            <button>View</button>
          </Link>
          <button onClick={this.saveBook}>Save</button>
          {deleteButton}
        </div>
      </li>
    );
  }
}
