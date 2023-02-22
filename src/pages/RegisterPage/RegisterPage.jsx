import { publicApi } from '../../http/http';
import { useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogin } from '../../redux/auth/auth.operations';
import { Box, Button, Container, TextField } from '@mui/material';
import { StyledForm } from './RegisterPage.styled';

const initState = {
  name: '',
  email: '',
  password: '',
};

const registerFormReducer = (state, { type, payload }) => {
  return (state = { ...state, [type]: payload });
};

const RegisterPage = () => {
  const [state, reducerDispatch] = useReducer(registerFormReducer, initState);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    reducerDispatch({ type: name, payload: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await publicApi.post('/users/signup', state);
      dispatch(authLogin({ email: state.email, password: state.password }));
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container>
        {isLoading && <p>Loading...</p>}
        <StyledForm onSubmit={handleSubmit}>
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
            <h2>Register new user</h2>
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />

            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />

            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />

            <Button variant="contained" type="submit">
              Register now
            </Button>
          </Box>
        </StyledForm>
      </Container>
    </>
  );
};

export default RegisterPage;
