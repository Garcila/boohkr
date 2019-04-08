import React, {Component} from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <input
          type='text'
          value=''
          name='searchTerm'
          placeholder='Book to search 📕'
        />
        <button>Search Book 📕</button>
      </form>
    );
  }
}
