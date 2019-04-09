import React, {Component} from 'react';
import BookList from '../components/BookList';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';

import axios from 'axios';

export default class Search extends Component {
  state = {
    foundBooks: [],
  };

  componentDidMount() {
    this.searchBook('javaScript');
  }

  searchBook = term => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${term}`;
    axios
      .get(URL)
      .then(res => this.setState({foundBooks: res.data.items}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Title />
        <p>Search page will be here</p>
        <SearchBar searchBook={this.searchBook} />
        <BookList foundBooks={this.state.foundBooks} />
      </div>
    );
  }
}
