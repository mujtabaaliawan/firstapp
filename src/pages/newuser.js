import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { set_token } from '../features/token/tokenSlice';
import { logged_in } from '../features/user/userSlice';
import {useNavigate} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {loading_on, loading_off} from "../features/loading/loadingSlice";
import "../styles/signup.css";
import {toast} from "react-toastify";
import {set_trialSub} from "../features/subscription/trialSlice";

function NewUser() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [navigationURL, setNavigationURL] = useState('/');

  useEffect(() => {
    navigate(navigationURL);
  }, [navigationURL, navigate])

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loading_on());

    const formData = new FormData();
      formData.append('user_email', email);
      formData.append('user_password', password);


    fetch('http://127.0.0.1:8000/trader-new', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network Error: Could not connect to server. Please try again.");
        }
        return response.json();
    })
    .then(data => {
              dispatch(loading_off());
              dispatch(set_token(data.token));
              dispatch(logged_in());
              dispatch(set_trialSub());
              setNavigationURL('/main');
            })
        .catch(error => {
              toast.error(error.message, {position: toast.POSITION.TOP_CENTER, autoClose: false});
              dispatch(loading_off());
            })
    }


  return (
      <div id={'main'}>
          <Container className="mt-5" id={'content'}>
            <Row className="justify-content-center">
            <Col>
                <Row className={'mb-4'}>
                <Row>
                <div>
                  <h1 id={'greeting'}>Because Who</h1>
                </div>
                </Row>
                    <Row>
                <div>
                  <h1 id={'greeting'}>Doesn't Love to</h1>
                </div>
                </Row>
                <Row>
                <div>
                  <h1 id={'greeting'}>Maximize Stock Profits</h1>
                </div>
                </Row>
                </Row>
                <Row id={'box'}>
            <form onSubmit={handleSubmit}>
                <Row>
                  <div className="mb-3 mt-5">
                    <input type="email" className="form-control" id="email" value={email}
                           onChange={(event) => setEmail(event.target.value)}
                           placeholder={"Email"} required/>
                  </div>
                </Row>
              <Row>
                  <div className="mb-4">
                    <input type="password" className="form-control" id="password" value={password}
                           onChange={(event) => setPassword(event.target.value)}
                           placeholder={"Password"} required/>
                  </div>
                  <div>
                    <button type="submit" id='submit-button' className="btn btn-primary">Register</button>
                  </div>
                  </Row>
                <Row id={'footer'}>
                <p>Free All Features for 14 days on</p>
                <p> registration or <a href={'/login'}>press here for login</a></p>
                </Row>
            </form>
                </Row>
            </Col>
                <Col id={'picture'}>
                    <div>
                        <img src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ix
                        id=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtYW4lMjBhbmQlMjB3b21hbnxlbnwwfHwwfHw%3D&w
                        =1000&q=80' alt={"Happy Business"}/>
                    </div>
              </Col>
            </Row>
          </Container>
      </div>
      );
    }

export default NewUser;