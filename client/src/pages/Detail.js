import React from 'react';
import helpers from '../utils/helpers';
import Title from '../components/Title/Title';
import styled from 'styled-components';

const DetailSt = styled.main`
  display: flex;
  flex: 1 auto;
  background: url('https://res.cloudinary.com/garcila/image/upload/c_scale,o_42,w_800/v1555686397/03.png')
    left no-repeat;

  @media only screen and (max-device-width: 770px) and (-webkit-min-device-pixel-ratio: 2) {
    background: url('https://res.cloudinary.com/garcila/image/upload/c_scale,o_42,w_400/v1555686397/03.png')
      bottom no-repeat;
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerSt = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: var(--white-transparent);
  margin: 2rem;
  text-align: justify;
`;

const ImgSt = styled.img`
  margin: 1rem;
  box-shadow: -1px 15px 23px -5px rgba(40, 58, 64, 0.57);
`;

const BlurbSt = styled.div`
  margin: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthorSt = styled.div`
  font-size: 1.5rem;
  margin: 0.5rem;
  font-variant: all-small-caps;
  font-weight: bold;
`;

const DescriptionSt = styled.p`
  max-width: 70%;
  margin: 2rem;
`;

export default function Detail(props) {
  const {
    title,
    subtitle,
    authors,
    description,
    pageCount,
    publisher,
    publishedDate,
    thumbnail,
  } = props.location.state.book;

  // helper function to render authors
  const authorList = helpers.authorList(authors);

  return (
    <DetailSt>
      <Title pageTitle={title} subtitle={subtitle} />
      <ContainerSt>
        <BlurbSt>
          <AuthorSt>Author: {authorList}</AuthorSt>
          <p>Page count: {pageCount}</p>
          <p>
            Publisher {publisher} on {publishedDate}
          </p>
        </BlurbSt>
        <ImgSt src={thumbnail} alt={`book: ${title}`} />
        <DescriptionSt>{description}</DescriptionSt>
      </ContainerSt>
    </DetailSt>
  );
}
