import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import {
  StyledContactPhoneIcon,
  StyledHome,
  StyledHowToRegIcon,
  StyledLoginIcon,
  StyledNavLink,
} from './Layout.styled';

import { selectLoginToken } from 'redux/auth/auth.selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectLoginToken);

  return (
    <>
      {/* <header> */}
      <Container>
        <nav>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'top',
              gap: '20px',
              borderBottom: 2,
              borderColor: 'primary.main',
              marginBottom: '20px',
            }}
          >
            <StyledNavLink to="/">
              {' '}
              <StyledHome />
              Home
            </StyledNavLink>

            {isLoggedIn && (
              <StyledNavLink
                to="contacts"
                sx={{
                  gap: '5px',
                }}
              >
                <StyledContactPhoneIcon />
                Contacts
              </StyledNavLink>
            )}

            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <>
                <StyledNavLink to="register">
                  <StyledHowToRegIcon />
                  Register
                </StyledNavLink>
                <StyledNavLink to="login">
                  <StyledLoginIcon />
                  Log in
                </StyledNavLink>
              </>
            )}
          </Box>
        </nav>
      </Container>
      {/* </header> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};
