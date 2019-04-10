import React, {Component} from 'react';

export default class SearchBar extends Component {
  state = {
    term: '',
  };

  searchTerm = e => this.setState({term: e.target.value});

  handleSubmit = e => {
    e.preventDefault();
    const {searchBook} = this.props;
    searchBook(this.state.term);
    this.setState({term: ''});
  };
  render() {
    return (
      <form>
        <input
          type='text'
          value={this.state.term}
          name='searchTerm'
          placeholder='Book to search 📕'
          onChange={this.searchTerm}
        />
        <button onClick={this.handleSubmit}>Search Book 📕</button>
      </form>
    );
  }
}
