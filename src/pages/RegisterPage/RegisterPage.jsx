import { publicApi } from '../../http/http';
import { useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogin } from '../../redux/auth/auth.operations';

const initState = {
  name: '',
  email: '',
  password: '',
};

const formReducer = (state, { type, payload }) => {
  return (state = { ...state, [type]: payload });
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, reducerDispatch] = useReducer(formReducer, initState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    reducerDispatch({ type: name, payload: value });
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      setIsLoading(true);
      await publicApi.post('/users/signup', state);
      setIsLoading(false);

      dispatch(authLogin({ email: state.email, password: state.password }));
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <button>Sign In</button>
      </form>
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default RegisterPage;
