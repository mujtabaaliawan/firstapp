import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { set_token } from '../features/token/tokenSlice';
import { logged_in } from '../features/user/userSlice';
import { toast } from 'react-toastify';
import { set_manager } from "../features/manager/managerSlice";
import { set_tourMode} from "../features/tour/tourSlice";
import { loading_on, loading_off } from "../features/loading/loadingSlice";
import {useNavigate} from "react-router-dom";
import {set_trialSub} from "../features/subscription/trialSlice";
import {set_activeSub} from "../features/subscription/activeSlice";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [navigationURL, setNavigationURL] = useState('');

  useEffect(() => {
    navigate(navigationURL);
  }, [navigationURL, navigate])

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loading_on());
    fetch('http://127.0.0.1:8000/credentials', {
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
      dispatch(set_tourMode(data.tour_mode));
      dispatch(logged_in());
      if (data.role === 'manager'){
        dispatch(set_manager());
        dispatch(loading_off());
        setNavigationURL("/main");
      }
      else {
        let check_subscription_url = "http://127.0.0.1:8000/check-subscription";
        fetch(check_subscription_url, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data.token
          },
        })
            .then(response => {
              if (!response.ok) {
                throw new Error("Network Error: Could not connect to server. Please try again.");
              }
              return response.json();
            })
            .then(data => {
              dispatch(loading_off());
              if (data.subscription_status === "active") {
                dispatch(set_activeSub());
                setNavigationURL("/main");
              }
              else if(data.subscription_status === "trialing") {
                dispatch(set_trialSub());
                setNavigationURL("/subscribe");
              }
            })
            .catch(error => {
              toast.error(error.message, {position: toast.POSITION.TOP_CENTER, autoClose: false});
              dispatch(loading_off());
            })
      }
    })
    .catch(error => {
          toast.error(error.message, {position: toast.POSITION.TOP_CENTER, autoClose: false});
          dispatch(loading_off());
  })
}

  console.log(email);
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
            <button type="submit" className="btn btn-primary" id={'button-submit'}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;