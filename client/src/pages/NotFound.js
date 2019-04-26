import React from 'react';
import Parallax from 'parallax-js';
import styled from 'styled-components';

// export default function NotFound() {
export default class NotFound extends React.Component {
  componentDidMount() {
    let scene = document.getElementById('scene');
    let parallxInstance = new Parallax(scene);
  }
  render() {
    return (
      <ContainerSt id='scene'>
        <NotFoundImgSt data-depth='0.5' />
        <NotFoundImgTxt data-depth='0.1'>
          That what you Seek is not here
        </NotFoundImgTxt>
        <FourOhFourSt>404</FourOhFourSt>
      </ContainerSt>
    );
  }
}

// CSS_____________________________________________________

const ContainerSt = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;
const NotFoundImgSt = styled.div`
  flex: 1;
  background: url('https://res.cloudinary.com/garcila/image/upload/o_32/v1555686397/03.png')
    no-repeat center;
  background-size: 60vh;
`;

const NotFoundImgTxt = styled.p`
  margin-left: 25%;
  font-size: 6rem;
  text-align: center;
  max-width: 50%;
  color: rgba(28, 82, 92, 0.74);

  @media only screen and (min-device-width: 320px) and (max-device-width: 420px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 3rem;
  }
`;
const FourOhFourSt = styled.p`
  margin-left: 12%;
  font-size: 45vw;
  justify-content: center;
  align-items: center;
  color: rgba(228, 282, 292, 0.24);

  @media only screen and (min-device-width: 320px) and (max-device-width: 420px) and (-webkit-min-device-pixel-ratio: 2) {
    top: 25vh !important;
  }
`;
