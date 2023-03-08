import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { set_token } from '../features/token/tokenSlice';
import { logged_in } from '../features/user/userSlice';
import { Navigate } from 'react-router-dom';

function NewUser() {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');


  useEffect(() => {
    document.title = 'Login';
    }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newUserData = {
      "user": {
        "email": email,
        "first_name": firstName,
        "last_name": lastName,
        "role": "trader",
        "password": password,
      },
      "mobile_number": mobile,
    };
    await fetch('http://127.0.0.1:8000/trader', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserData)
    })
    .then(async response => {
      if (response.status === 201) {
        await fetch('http://127.0.0.1:8000/credentials', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
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
              setStatus(200);
            })
      }
      else {
        throw new Error('Invalid credentials');
      }
    })
  }

  if (status === 200) {
    return <Navigate to="/"/>;
  }

      return (
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-5">
                <div className="text-center">
                  <h1>New User</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email}
                           onChange={(event) => setEmail(event.target.value)} required/>
                  </div>
                  <div className="mb-3">
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
                    <button type="submit" className="btn btn-primary">Create</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      );
    }

export default NewUser;