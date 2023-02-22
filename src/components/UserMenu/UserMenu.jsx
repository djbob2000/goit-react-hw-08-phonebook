import { Avatar, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogout } from '../../redux/auth/auth.operations';
import { selectLoginToken } from 'redux/auth/auth.selectors';
import { StyledLogoutOutlined } from './UserMenu.styled';

export const UserMenu = () => {
  const token = useSelector(selectLoginToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log('handleLogout');
    dispatch(authLogout());
    navigate('/', { replace: true });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <Avatar
        sx={{
          bgcolor: 'primary.main',
        }}
      >
        {token.user.email.slice(0, 1).toUpperCase()}
      </Avatar>
      <p>{token.user.email}</p>
      <Button type="primary" onClick={handleLogout}>
        <StyledLogoutOutlined /> Log out
      </Button>
    </Box>
  );
};
