import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import useDocumentName from "../hooks/documentname";
import { Container, Row, Col, Image } from 'react-bootstrap';


const Profile = () => {
    const token = useSelector((state) => state.token.value);
    const [data, setData] = useState([]);

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
            .then(data => setData(data))
    }, [token]);

    console.log(data);

 return (
     <div>
      <Container className="mt-5">
          <Row>
          <Col className='col-xs-3 col-lg-3 d-flex justify-content-center'>
            <Image src="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/88984111_10163258651025207_4808062153812606976_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFvZ1UcQs6oQhhJiAieAIGDEGaBrm0hYOMQZoGubSFg4ywW5bLdjnUE2pnHoEQqZFI&_nc_ohc=ydsW_H52VUAAX-v2x-O&_nc_ht=scontent.flhe5-1.fna&oh=00_AfBDUkEGLGOK_CzjWPtg_BlTGVQHeoZOIf1dQkJTGawjOA&oe=643A4BC1"
                   roundedCircle style={{ width: '10rem', height: '10rem'}}/>
          </Col>
          <Col className='col-xs-9 col-lg-9'>
            <h1 style={{color: "red"}}>{data["name"]}</h1>
            <p>Trader</p>
          </Col>
        </Row>
          <Row>
              <Col>&nbsp;</Col>
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
            <h4 className="d-flex justify-content-center" style={{color: "blue"}}>{data["transactions"]}</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" style={{color: "blue"}}>{data["followers"]}</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" style={{color: "blue"}}>{data["following"]}</h4>
          </Col>
        </Row>
          <hr />
          <Row className="mt-10 bt-10">
              <Row>
                  <Col>&nbsp;</Col>
              </Row>
              <Row>
                  <Col>&nbsp;</Col>
              </Row>

              <Row>
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
  );
};
export default Profile;