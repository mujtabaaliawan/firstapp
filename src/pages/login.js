import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { set_token } from '../features/token/tokenSlice';
import { logged_in } from '../features/user/userSlice';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function Login() {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = 'Login';
    }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch('http://127.0.0.1:8000/credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        setEmail('');
        setPassword('');
        throw new Error('Invalid credentials');
      }
    })
    .then(data => {
      dispatch(set_token(data.token));
      dispatch(logged_in());
      setStatus(200);
    })
    .catch(error => {
          toast.error(error.message, {position: toast.POSITION.TOP_CENTER, autoClose: false});
  })
}

  if (status===200) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="text-center">
          <h1>Login</h1>
            </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;