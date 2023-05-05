import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import UserForm from "./components/userForm";
import TextDisplay from "./components/textDisplay";
import FooterDisplay from "./components/footer";
import GlobalSelectors from "../selectors/globalSelectors";
import Selectors from "./selectors/selectors";
import Navigation from "../logout/hooks/navigation";
import "./styles/main.css";


function NewUser() {
    let {dispatch, navigate} = GlobalSelectors();
    const {navigationUrl, formik} = Selectors(dispatch);
    Navigation(navigationUrl, navigate);


    return (
      <div id={'main'}>
          <Container className="mt-5 fluid-container" id={'content'}>
            <Row className="justify-content-center">
                <Col id={'data-column'} className={"col-6"}>
                    <TextDisplay />
                    <UserForm formik={formik} />
                    <FooterDisplay />
                </Col>
                <Col className={"col-6 align-items-center"}>
                    <img id="photo" src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ix
                        id=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtYW4lMjBhbmQlMjB3b21hbnxlbnwwfHwwfHw%3D&w
                        =1000&q=80' alt={"Happy Business"}/>
                </Col>
            </Row>
          </Container>
      </div>
      );
    }

export default NewUser;