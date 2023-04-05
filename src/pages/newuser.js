import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { set_token } from '../features/token/tokenSlice';
import { logged_in } from '../features/user/userSlice';
import { Navigate } from 'react-router-dom';
import {set_trial} from "../features/user-trial/trialSlice";
import Container from "react-bootstrap/Container";
import {Col, Row, Button} from "react-bootstrap";
import Shepherd from "shepherd.js";
import useDocumentName from "../hooks/documentname";
import SignUpSteps from "../tour/signup";


function NewUser() {
  const dispatch = useDispatch()
  const tourPermission = useSelector((state) => state.tourMode.value);
  const [status, setStatus] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [traderImage, setTraderImage] = useState('');
  const [tourReady, setTourReady]  = useState(false)
  const [tourStarted, setTourStarted] = useState(false);
  const tour = new Shepherd.Tour({
    defaultStepOptions: {
      classes: 'shadow-md bg-purple-dark shepherd-theme-arrows',
      scrollTo: true
    }
  });

    useDocumentName('Home', setTourReady);

    if (tourPermission && tourReady) {
        SignUpSteps(tour)
        handleTourStart(tour)
    }

  function handleTourStart(tour){
      if (!tourStarted){
        setTourStarted(true);
        tour.start();
      }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
      formData.append('user_email', email);
      formData.append('user_first_name', firstName);
      formData.append('user_last_name', lastName);
      formData.append('user_role', 'trader');
      formData.append('user_password', password);
      formData.append('mobile_number', mobile);
      formData.append('picture', traderImage);

    await fetch('http://127.0.0.1:8000/trader-new', {
      method: 'POST',
      body: formData,
    })
    .then(async response => {
      if (response.status === 201) {
        await fetch('http://127.0.0.1:8000/credentials', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password})
        })
            .then(response => {
              if (response.status === 200) {
                return response.json();
              } else {
                throw new Error('Invalid credentials');
              }
            })
            .then(data => {
              dispatch(set_token(data.token));
              dispatch(logged_in());
              dispatch(set_trial());
              setStatus(200);
            })
      }
      else {
        throw new Error('Invalid credentials');
      }
    })
  }

  if (status === 200) {
    return <Navigate to="/subscribe"/>;
  }

  function handleImageChange(imageFile){
    setTraderImage(imageFile);
    }

  return (
      <div>
          <Container className="mt-5">
            <Row className="justify-content-center">
              <Col>
                <div className="text-center">
                  <h1>Welcome, Please Sign up</h1>
                </div>
              </Col>
            </Row>
            <form onSubmit={handleSubmit}>
              <Row className="justify-content-center mt-5" >
                <Col className="col-sm-12 col-md-6 col-lg-3">
                <Col>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email}
                           onChange={(event) => setEmail(event.target.value)} required/>
                  </div>
                  </Col>
                  <Col>
                    <label className="form-label">Image</label>
                    <input type="file" className="form-control" id="image"
                           onChange={(event) => handleImageChange(event.target.files[0])}/>
                  </Col>
                  </Col>
                </Row>
              <Row className="justify-content-center">
                <Col className="col-sm-12 col-md-6 col-lg-3">
                  <div className="mb-3 mt-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" id="first" value={firstName}
                           onChange={(event) => setFirstName(event.target.value)} required/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="last" value={lastName}
                           onChange={(event) => setLastName(event.target.value)} required/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password}
                           onChange={(event) => setPassword(event.target.value)} required/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input type="numeric" className="form-control" id="mobile" value={mobile}
                           onChange={(event) => setMobile(event.target.value)} required/>
                  </div>
                  <div className="text-center">
                    <Button type="submit" id='submit-button' className="btn btn-primary">Submit</Button>
                  </div>
              </Col>
            </Row>
            </form>
          </Container>
      </div>
      );
    }

export default NewUser;