import {Col, Row} from "react-bootstrap";
import React from "react";


function ProfileTraderPersonalData(props){
    let data = props.data

    return (
        <div>
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
            </div>
    )

}

export default ProfileTraderPersonalData;