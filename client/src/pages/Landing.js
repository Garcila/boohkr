import React from 'react';
import Title from '../components/Title/Title';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LandingSt = styled.div`
  flex: 1;
  background: url('https://res.cloudinary.com/garcila/image/upload/c_scale,w_1038/v1555251885/10.png')
    no-repeat right;
  background-attachment: fixed;
  background-size: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    background: url('https://res.cloudinary.com/garcila/image/upload/c_scale,w_200/v1555251885/10.png')
      no-repeat;
    background-position: center 20px;
  }
`;

const TitleSubButtonsSt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    align-items: center;
  }
`;

const ButtonSt = styled.div`
  padding-left: 7%;
  font-weight: bold;

  button {
    margin: 1rem 1rem 0 0;
  }
`;

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem 0 0;
  width: 10rem;
  background: var(--title-colour);
  color: var(--white-colour);
  border: 2px solid white;
  text-align: center;

  :hover {
    background: var(--happy-blue);
  }
`;

export default function Landing() {
  return (
    <LandingSt>
      <TitleSubButtonsSt>
        <Title pageTitle='BOOHKR' subtitle='Find and and save precious reads' />
        <ButtonSt>
          <Link to='/search'>
            <Button>Search</Button>
          </Link>

          <Link to='/saved'>
            <Button>Saved</Button>
          </Link>
        </ButtonSt>
      </TitleSubButtonsSt>
    </LandingSt>
  );
}
