import React from 'react';
import BookList from '../components/BookList';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';

export default function Search() {
  return (
    <div>
      <Title />
      <p>Search page will be here</p>
      <SearchBar />
      <BookList />
    </div>
  );
}
