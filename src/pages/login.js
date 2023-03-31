import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { set_token } from '../features/token/tokenSlice';
import { logged_in } from '../features/user/userSlice';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { set_manager } from "../features/manager/managerSlice";
import useDocumentName from "../hooks/documentname";
import { set_subscription } from "../features/subscription/subscriptionSlice";
import { set_trial } from "../features/user-trial/trialSlice";

function Login() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [page_changer, setPageChanger] = useState(false);
  const token = useSelector((state) => state.token.value);
  const isManager = useSelector((state) => state.manager.value);

    useDocumentName('Login');

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
      if (data.role === 'manager'){
        dispatch(set_manager())
        setPageChanger(true);
      }
      setStatus(200);
    })
    .catch(error => {
          toast.error(error.message, {position: toast.POSITION.TOP_CENTER, autoClose: false});
  })
}

  if (status===200 && !isManager) {
    let check_subscription_url = "http://127.0.0.1:8000/check-subscription"
    fetch(check_subscription_url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    })
        .then(response => response.json())
        .then(data => {
          if (data.trial === true){
              dispatch(set_trial());
            }
          if (data.status === "active") {
            dispatch(set_subscription());
            setPageChanger(true);
            setStatus(0);
          }
          else {
            setStatus(401)
            setPageChanger(true);
          }
        })
   }

  if(page_changer===true) {
    return <Navigate to="/"/>;
  }

  if(status===401) {
    return <Navigate to="/subscribe"/>;
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