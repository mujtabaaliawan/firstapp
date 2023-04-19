import {Col, Image, Row} from "react-bootstrap";
import React from "react";

function ProfilePictureName(props){
    let profileData = props.profileData;
    let traderPictureURL = props.traderPictureURL;

    return (
        <div>
                  <Row>
          <Col className='col-xs-3 col-lg-3 d-flex justify-content-center'>
            <Image src= {traderPictureURL} id='profile-picture'
                   roundedCircle style={{ width: '10rem', height: '10rem'}}/>
          </Col>
          <Col className='col-xs-9 col-lg-9'>
            <h1 style={{color: "blue"}}>{profileData["name"]}</h1>
            <p>Trader</p>
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
                id='transaction-data' style={{color: "blue"}}>{profileData["transactions"]}</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center"
                id='followers-data' style={{color: "blue"}}>{profileData["followers"]}</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center"
                id='following-data' style={{color: "blue"}}>{profileData["following"]}</h4>
          </Col>
        </Row>
            </div>

    )
}

export default ProfilePictureName;