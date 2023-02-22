import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogin } from 'redux/auth/auth.operations';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async evt => {
    evt.preventDefault();
    console.log('handleFormSubmit:>>');

    try {
      await dispatch(authLogin({ email, password })).unwrap();

      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '15px',
            width: '300px',
            textAlign: 'center',
            ml: 'auto',
            mr: 'auto',
          }}
        >
          <h2>Log In to phonebook</h2>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </>
  );
};

export default LoginPage;
