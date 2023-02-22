import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Home } from '@mui/icons-material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LoginIcon from '@mui/icons-material/Login';

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: #1976d2;
    border-top: 4px solid #1976d2;
  }
  text-decoration: none;
  color: #1976d2;
  font-size: 18px;
  font-weight: 600;
  padding: 11px 4px;
  display: flex;
  align-items: center;
  gap: '5px';
`;

export const StyledHowToRegIcon = styled(HowToRegIcon)`
  margin-right: 8px;
`;

export const StyledHome = styled(Home)`
  margin-right: 8px;
`;

export const StyledContactPhoneIcon = styled(ContactPhoneIcon)`
  margin-right: 8px;
`;

export const StyledLoginIcon = styled(LoginIcon)`
  margin-right: 8px;
`;
