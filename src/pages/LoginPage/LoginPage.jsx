import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogin } from 'redux/auth/auth.operations';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      await dispatch(authLogin({ email, password })).unwrap();
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span></span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </label>
      <label>
        <span></span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
      </label>
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
