import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import helpers from '../../utils/helpers';
import API from '../../utils/API';
import styled from 'styled-components';

const BookItemLiSt = styled.li`
  background-color: var(--white-transparent);
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

const TitleSt = styled.h3`
  color: var(--white-colour);
  background-color: var(--dark-blue);
  padding: 10px;
  height: 80px;
  text-align: center;
  font-variant: all-small-caps;
`;
const SubtitleSt = styled.h5`
  padding: 10px 0 0 5px;
  height: 2rem;
  text-align: center;
`;
const AuthorSt = styled.h3`
  color: var(--white-colour);
  padding: 10px 0 0 5px;
  height: 2rem;
  color: var(--dark-blue);
  text-align: center;
  font-variant: all-small-caps;
  font-weight: bold;
`;

const ImgContainerSt = styled.div`
  flex: 1;
`;

const ImgSt = styled.img`
  margin-top: 0.5rem;
  box-shadow: -1px 15px 23px -5px rgba(40, 58, 64, 0.57);
`;

const ImageSt = styled.div`
  min-height: 230px;
  text-align: center;
  flex: 1;
`;

const SavedSt = styled.div`
  position: absolute;
  color: white;
  top: 5px;
  background-color: red;
  white-space: nowrap;
  padding: 5px;
`;

const DescriptionSt = styled.div`
  padding: 0 1rem;
  min-height: 150px;
  text-align: justify;
`;

const ButtonSt = styled.button`
  border-radius: 3px;
  padding: 0.5rem 0;
  display: inline-block;
  margin: 0.5rem 1rem 0 0;
  width: 5rem;
  border: 2px solid white;
  background: var(--title-colour);
  color: var(--white-colour);
  text-align: center;
  margin: 1rem;

  :hover {
    background: var(--happy-blue);
  }
`;

const ButtonContainerSt = styled.div`
  display: flex;
  justify-content: center;
`;

export default class BookItem extends Component {
  state = {
    toSaved: false,
  };

  componentDidMount() {
    this.isItInDB() && this.setState({toSaved: true});
  }

  saveBook = () => {
    const book = this.props.book;
    const googleId = book.googleId;
    // Make sure that the book to save is not already in the database
    API.findOne(googleId).then(res => {
      if (!res.data) {
        API.saveBook(this.props.book)
          // change the state of toSaved in order to trigger <Redirect to='/saved' />
          .then(() => this.setState(() => ({toSaved: true})))
          .catch(err => console.log(err));
      }
    });
  };

  isItInDB = () => {
    const {googleId} = this.props.book;
    API.findOne(googleId).then(res =>
      res.data ? this.setState({toSaved: true}) : null
    );
  };

  render() {
    const {
      _id,
      title,
      subtitle,
      description,
      authors,
      thumbnail,
      googleId,
    } = this.props.book;

    const shortAuthors =
      authors.length > 1
        ? `${authors[0].substring(0, 20)} ...`
        : authors[0].substring(0, 22);

    // render only 240 characters in the initial description
    const shortDescription =
      description && `${description.substring(0, 140)} ...`;

    // helper function to render authors
    const authorsList = authors && helpers.authorList(authors);

    // function to conditionally render the delete button depending if user is visiting Saved or Search
    const saveOrDeleteButton = _id ? (
      <ButtonSt onClick={() => this.props.deleteBook(_id)}>Delete</ButtonSt>
    ) : (
      <ButtonSt onClick={this.saveBook}>Save</ButtonSt>
    );

    const saved = this.state.toSaved ? <SavedSt>saved</SavedSt> : null;
    return (
      <BookItemLiSt>
        <TitleSt>{title}</TitleSt>
        <SubtitleSt>{subtitle || '-'}</SubtitleSt>
        <AuthorSt>{shortAuthors}</AuthorSt>
        <ImgContainerSt>
          <ImageSt style={{position: 'relative'}}>
            <ImgSt src={thumbnail} alt={`book: ${title}`} />
            {saved}
          </ImageSt>
          <DescriptionSt>{shortDescription}</DescriptionSt>
          <ButtonContainerSt>
            <Link
              to={{
                pathname: `/search/${googleId}`,
                state: {
                  book: this.props.book,
                  thumbnail,
                },
              }}
            >
              <ButtonSt>View</ButtonSt>
            </Link>
            {saveOrDeleteButton}
          </ButtonContainerSt>
        </ImgContainerSt>
      </BookItemLiSt>
    );
  }
}
