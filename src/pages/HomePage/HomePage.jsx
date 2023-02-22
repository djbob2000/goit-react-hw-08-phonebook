import { useSelector } from 'react-redux';
import { selectLoginToken } from 'redux/auth/auth.selectors';

import { Container, Typography } from '@mui/material';
import phonebook from '../../images/phonebook.jpg';

import { StyledHomeLink, StyledImg } from './HomePage.styled';

const HomePage = () => {
  const isLoggedIn = useSelector(selectLoginToken);

  return (
    <>
      <section>
        <Container>
          <Typography variant="h3" textAlign="center" color="primary.main">
            Welcome to your PhoneBook!
          </Typography>
          <StyledImg src={phonebook} alt="phonebook" />
          {!isLoggedIn ? (
            <Typography variant="h5" textAlign="center">
              Please <StyledHomeLink to="/register">register</StyledHomeLink> or{' '}
              <StyledHomeLink to="/login">log in</StyledHomeLink> to be able to
              use your PhoneBook
            </Typography>
          ) : (
            <Typography variant="h5" textAlign="center">
              Go to the menu{' '}
              <StyledHomeLink to="/contacts" underline="hover">
                Contacts
              </StyledHomeLink>{' '}
              and manage your contacts
            </Typography>
          )}
        </Container>
      </section>
    </>
  );
};

export default HomePage;
