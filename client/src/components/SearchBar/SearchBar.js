import React, {Component} from 'react';
import styled from 'styled-components';

const FormSt = styled.form`
  padding-left: 7%;
  font-weight: bold;
`;

const InputSt = styled.input`
  padding: 0.5rem 0 0.5rem 1rem;
  border-radius: 3px;
  border: 2px solid white;
`;

const ButtonSt = styled.button`
  border-radius: 3px;
  padding: 0.5rem 0;
  display: inline-block;
  margin: 0.5rem 1rem 0 0;
  width: 10rem;
  border: 2px solid white;
  background: var(--title-colour);
  color: var(--white-colour);
  text-align: center;
  margin: 1rem;

  :hover {
    background: var(--happy-blue);
  }
`;

export default class SearchBar extends Component {
  state = {
    term: '',
  };

  searchTerm = e => this.setState({term: e.target.value});

  handleSubmit = e => {
    e.preventDefault();
    const {searchBooks} = this.props;
    searchBooks(this.state.term);
    this.setState({term: ''});
  };
  render() {
    return (
      <FormSt>
        <InputSt
          type='text'
          value={this.state.term}
          name='searchTerm'
          placeholder='Book to search'
          onChange={this.searchTerm}
        />
        <ButtonSt onClick={this.handleSubmit}>Search Book</ButtonSt>
      </FormSt>
    );
  }
}
