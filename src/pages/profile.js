import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import useDocumentName from "../hooks/documentname";
import { Container, Row, Col, Image } from 'react-bootstrap';
import Button from "react-bootstrap/Button";


const Profile = () => {
    const token = useSelector((state) => state.token.value);
    const [data, setData] = useState([]);
    const [traderPictureURL, setTraderPictureURL] = useState('');
    const isActiveSub = useSelector((state) => state.activeSub.value);
    const isTrialSub = useSelector((state) => state.trialSub.value);
    const isManager = useSelector((state) => state.manager.value);

    useDocumentName('Profile');

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/trader-profile';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
                if (data.hasOwnProperty("picture")) {
                    setTraderPictureURL(`http://127.0.0.1:8000/${data["picture"]}`);
                }
                else {
                    setTraderPictureURL("https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png")
                }
            })
    }, [token]);

    function handleImageChange(imageFile) {
        const formData = new FormData();
        formData.append('picture', imageFile);
        const url = `http://127.0.0.1:8000/trader-update`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: formData,
        });
    }

    function handleButtonClick() {
        document.getElementById('image-field').click();
    }

 return (
     <div>
         { (isActiveSub || isTrialSub || isManager) && data && (
     <div>
      <Container className="mt-5">
          <Row>
          <Col className='col-xs-3 col-lg-3 d-flex justify-content-center'>
            <Image src= {traderPictureURL} id='profile-picture'
                   roundedCircle style={{ width: '10rem', height: '10rem'}}/>
          </Col>
          <Col className='col-xs-9 col-lg-9'>
            <h1 style={{color: "blue"}}>{data["name"]}</h1>
            <p>Trader</p>
          </Col>
        </Row>
          <Row>
              <Col className='col-xs-3 col-lg-3 d-flex justify-content-center'>
                  <Button className={"mt-3"} id='new-picture-button'
                          onClick={handleButtonClick}>Upload New Picture</Button>
                  <input id="image-field" type="file"
                         onChange={(event) => handleImageChange(event.target.value)} hidden />
              </Col>
          </Row>
        <Row className="mb-3">
          <Col md={2}>
          </Col>
            <Col>
            <h3 className="d-flex justify-content-center">Transactions</h3>
          </Col>
          <Col>
            <h3 className="d-flex justify-content-center">Followers</h3>
          </Col>
          <Col>
            <h3 className="d-flex justify-content-center">Following</h3>
          </Col>
        </Row>
        <Row className="mb-3">
            <Col md={2}>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center"
                id='transaction-data' style={{color: "blue"}}>{data["transactions"]}</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center"
                id='followers-data' style={{color: "blue"}}>{data["followers"]}</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center"
                id='following-data' style={{color: "blue"}}>{data["following"]}</h4>
          </Col>
        </Row>
          <hr />
          <Row className="mt-10 bt-10" >
              <Row>
                  <Col>&nbsp;</Col>
              </Row>
              <Row>
                  <Col>&nbsp;</Col>
              </Row>

              <Row id='personal-data'>
                  <Col md={3}>
                  </Col>
                  <Col md={4}>
                      <h4>Mobile Number</h4>
                  </Col>
                  <Col md={4}>
                      <h4 style={{color: "brown"}}>{data["mobile_number"]}</h4>
                  </Col>
              </Row>
              <Row>
                  <Col>&nbsp;</Col>
              </Row>
              <Row>
                  <Col md={3}>
                  </Col>
                  <Col md={4}>
                      <h4>Email</h4>
                  </Col>
                  <Col md={4}>
                      <h4 style={{color: "brown"}}>{data["email"]}</h4>
                  </Col>
              </Row>
              <Row>
                  <Col>&nbsp;</Col>
              </Row>
              <Row>
                  <Col md={3}>
                  </Col>
                  <Col md={4}>
                      <h4>City</h4>
                  </Col>
                  <Col md={4}>
                      <h4 style={{color: "brown"}}>Lahore</h4>
                  </Col>
              </Row>
              <Row>
                  <Col>&nbsp;</Col>
              </Row>
              <Row>
                  <Col>&nbsp;</Col>
              </Row>
          </Row>
          <hr />
      </Container>
    </div>
         )}
     </div>
  );
}
export default Profile;