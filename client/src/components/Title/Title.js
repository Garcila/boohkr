import React from 'react';
import styled from 'styled-components';

const HeaderContainerSt = styled.div`
  margin-top: 5rem;
  padding-left: 7%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 2.5rem;
  }
`;

const HeaderSt = styled.h1`
  color: var(--title-colour);
  font-size: ${props => (props.sub ? '1.5rem' : '4rem')};

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: ${props => (props.sub ? '1rem' : '2rem')};
  }
`;

export default function Title(props) {
  return (
    <HeaderContainerSt>
      <HeaderSt>{props.pageTitle}</HeaderSt>
      <HeaderSt sub>{props.subtitle}</HeaderSt>
    </HeaderContainerSt>
  );
}
