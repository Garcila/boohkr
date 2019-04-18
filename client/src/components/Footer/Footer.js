import React from 'react';
import styled from 'styled-components';

const FootSt = styled.nav`
  display: flex;
  padding: 10px 5rem 5px 5px;
  justify-content: flex-end;
  align-items: baseline;
  text-decoration: none;
  font-variant: small-caps;
  background-color: rgba(0, 0, 0, 0.09);
  color: var(--white-colour);
`;

export default function Footer() {
  return (
    <FootSt>
      <p>
        made in a{' '}
        <span role='img' aria-label='laptop'>
          💻
        </span>{' '}
        by a non{' '}
        <span role='img' aria-label='robot'>
          🤖
        </span>
      </p>
    </FootSt>
  );
}
