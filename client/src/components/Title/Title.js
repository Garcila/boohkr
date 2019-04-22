import React from 'react';
import styled from 'styled-components';

const HeaderContainerSt = styled.div`
  margin-top: 5rem;
  padding-left: 7%;
`;

const HeaderSt = styled.h1`
  color: var(--title-colour);
  font-size: ${props => (props.sub ? '1.5rem' : '4rem')};
`;

export default function Title(props) {
  return (
    <HeaderContainerSt>
      <HeaderSt>{props.pageTitle}</HeaderSt>
      <HeaderSt sub>{props.subtitle}</HeaderSt>
    </HeaderContainerSt>
  );
}
