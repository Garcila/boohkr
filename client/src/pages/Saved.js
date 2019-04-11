import React, {Component} from 'react';
import Title from '../components/Title';
// import BookList from '../components/BookList';

import axios from 'axios';

export default class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios
      .get('/api/books')
      .then(res => console.log('sir the books ', res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Title />
        <p>Saved books will be here</p>
        {/* <BookList /> */}
      </div>
    );
  }
}
