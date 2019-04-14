import React from 'react';
import Title from '../components/Title/Title';
import {Link} from 'react-router-dom';

export default function Landing() {
  return (
    <div>
      <Title
        pageTitle='BOOHKR'
        subtitle='Discover and save your previous and next reads'
      />
      <Link to='/search'>Search</Link>

      <Link to='/saved'>Saved</Link>
    </div>
  );
}
