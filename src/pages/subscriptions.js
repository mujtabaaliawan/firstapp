import React, {useState} from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js/pure";
import CheckoutForm from "../components/Stripeelements/component";
import "../styles/subscriptions.css";
import { Container, Row, Col} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
// import ReactDOM from "react-dom";
import { Modal, ModalHeader, ModalBody, ModalTitle, ModalFooter } from 'react-bootstrap';


function Subscriptions() {
    const [planName, setPlanName] = useState ('');
    const [buttonState, setButtonState] = useState(false)


    const stripePromise = loadStripe(
        'pk_test_51Mo2FQLtjJIe7dr6ADTNPsTD3l6jXbtypH4bjDsjSiLzfEeAAiSyKRhR4KTfndiRZmM5jExK49PcS3Eh6s58zQfa009uaYV3ZI');


    const handlePlanClick = (plan_name) => {
        setPlanName(plan_name);
        setButtonState(true);
      // Render the Stripe components in the popup window
      //   const popupWindow = window.open("", "Stripe Checkout", "width=400,height=400");
      //   ReactDOM.render(
      //       <Elements stripe={stripePromise}>
      //           <CheckoutForm subscriptionPlan={plan_name} />
      //       </Elements>,
      //       popupWindow.document.body
      //   );
    }

    return (
        <div>
        <Container className={'mt-5'}>
            <Row className="mt-8 d-flex justify-content-center">
                <Col id="plan">
                    <Row className='mt-2'>
                    <h1>
                        Yearly Plan
                    </h1>
                    </Row>
                    <Row className='mt-2'>
                    <h4>
                        Enjoy App will all features for a complete year
                    </h4>
                    </Row>
                    <Row className='mt-2'>
                    <h4>
                        Premium Package with <span id='discount'>50% more value</span>
                    </h4>
                    </Row>
                    <Row className='mt-2'>
                    <h4>
                        Price: <span id='price'>USD 24.00</span>
                    </h4>
                    </Row>
                    <Row>
                        <Button className='mt-5 mb-3' style={{
                            width: "50%",
                            margin: "auto",
                        }} onClick={() => handlePlanClick("yearly")}>Purchase Plan</Button>
                    </Row>
                </Col>
                <Col id='plan'>
                    <Row className='mt-2'>
                    <h1 id='plans'>
                        Monthly Plan
                    </h1>
                    </Row>
                    <Row className='mt-2'>
                    <h4>
                        Enjoy App will all features for a complete month
                    </h4>
                    </Row>
                    <Row className='mt-2'>
                    <h4>
                        Ultra Package with <span id='discount'>25% more value</span>
                    </h4>
                    </Row>
                    <Row className='mt-2'>
                    <h4>
                        Price: <span id='price'>USD 3.00</span>
                    </h4>
                    </Row>
                    <Row>
                        <Button className='mt-5 mb-3' style={{
                            width: "50%",
                            margin: "auto",
                        }} onClick={() => handlePlanClick("monthly")}>Purchase Plan</Button>
                    </Row>
                </Col>
                <Col id='plan'>
                    <Row className='mt-2'>
                    <h1 id='plans'>
                        Weekly Plan
                    </h1>
                    </Row>
                    <Row className='mt-2'>
                    <h4>
                        Enjoy App will all features for a complete week
                    </h4>
                    </Row>
                    <Row className='mt-2'>
                    <h4>
                        Very economical with the <span id='discount'>least cost value</span>
                    </h4>
                    </Row>
                    <Row className='mt-2'>
                    <h4>
                        Price: <span id='price'>USD 1.00</span>
                    </h4>
                    </Row>
                    <Row>
                        <Button className='mt-5 mb-3' style={{
                            width: "50%",
                            margin: "auto",
                        }} onClick={() => handlePlanClick("weekly")}>Purchase Plan</Button>
                    </Row>
                </Col>
            </Row>

            <Row className={'mt-5'}>
                <Col id='plan'>
                    <h1>Free Trial for <span color={'red'}>5 days</span></h1>
                    <Row>
                        <Button className='mt-5 mb-3' style={{
                            width: "25%",
                            margin: "auto",
                        }} onClick={() => handlePlanClick("trial")}>Get Free Trial</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
            <Modal show={buttonState} onHide={() => setButtonState(false)}>
                <ModalHeader closeButton>
                    <ModalTitle>Enter Card Details</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm subscriptionPlan={planName} />
                    </Elements>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setButtonState(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Subscriptions;