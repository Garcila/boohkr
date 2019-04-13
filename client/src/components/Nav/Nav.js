import React from 'react';
import {Link} from 'react-router-dom';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default function Nav() {
  return (
    <nav>
      <Link to='/'>BOOHKR</Link>
      <nav>
        <ul>
          <li>
            <Link
              to='/'
              className={
                window.location.pathname === '/' ||
                window.location.pathname === '/search'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to='/saved'
              className={
                window.location.pathname === '/search'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Saved
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
