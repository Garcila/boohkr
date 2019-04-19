import React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

const NavSt = styled.nav`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  padding: 15px 10px 10px 10px;
  justify-content: space-between;
  align-items: baseline;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.01);
  color: var(--title-colour);

  @media only screen and (max-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
    flex-direction: column;
    align-items: center;
  }

  ${props =>
    props.secondaryNav &&
    css`
      display: flex;
      flex-direction: row;
      font-size: 1.2rem;
      font-weight: lighter;
      padding: 0px 10px 0 10px;
      background: none;
      color: var(--title-colour);

      @media only screen and (max-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
        flex-direction: row;
        align-items: flex-start;
      }
    `};
`;
const LinkSt = styled.div`
  padding: 0 10px 0 10px;

  :first-child:hover {
    color: var(--white-colour);
  }

  :nth-child(2):hover {
    color: var(--white-colour);
  }
`;

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default function Nav() {
  return (
    <NavSt>
      <Link to='/'>BOOHKR</Link>
      <NavSt secondaryNav>
        <LinkSt>
          <Link to='/search'>Search</Link>
        </LinkSt>
        <LinkSt>
          <Link to='/saved'>Saved</Link>
        </LinkSt>
      </NavSt>
    </NavSt>
  );
}
