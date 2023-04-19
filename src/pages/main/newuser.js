import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import "../../styles/signup.css";
import UserForm from "./components/userForm";
import TextDisplay from "./components/textDisplay";
import GlobalSelectors from "../selectors/globalSelectors";
import Selectors from "./selectors/selectors";
import Navigation from "../logout/hooks/navigation";


function NewUser() {
    let {dispatch, navigate} = GlobalSelectors();
    const [navigationUrl, formik] = Selectors(dispatch);
    Navigation(navigationUrl, navigate);


    return (
      <div id={'main'}>
          <Container className="mt-5" id={'content'}>
            <Row className="justify-content-center">
            <Col id={'data-column'}>
                <TextDisplay />
                <UserForm formik={formik} />
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