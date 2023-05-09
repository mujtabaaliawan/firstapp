import {Col, Image, Row} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";

function ProfilePictureName(props){
    let profileData = props.profileData;
    let traderPictureURL = props.traderPictureURL;
    let setNavigationUrl = props.setNavigationUrl;

    return (
        <div>
            <Row>
          <Col className='col-xs-3 col-lg-3 d-flex justify-content-center'>
            <Image src= {traderPictureURL} id='profile-picture'
                   roundedCircle />
          </Col>
          <Col className='col-xs-7 col-lg-7'>
            <h1 id='profile-name' >{profileData["name"]}</h1>
            <p>Trader</p>
          </Col>
                <Col className='col-xs-2 col-lg-2'>
                    <Button onClick={()=> setNavigationUrl('/profile-edit')}>Edit Profile</Button>
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
                id='transaction-data'>{profileData["transactions"]}</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center"
                id='followers-data'>{profileData["followers"]}</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center"
                id='following-data'>{profileData["following"]}</h4>
          </Col>
        </Row>
            </div>

    )
}

export default ProfilePictureName;