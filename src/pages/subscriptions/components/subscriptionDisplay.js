import {Col, Container, Row} from "react-bootstrap";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "../Stripeelements/component";
import React from "react";
import styles from "../styles/components";


function SubscriptionDisplay(props){

    let stripePromise = props.stripePromise;
    let setPlanName = props.setPlanName;
    let setButtonState = props.setButtonState;
    let planName = props.planName;
    let buttonState = props.buttonState;
    const {SubButton} = styles();

    function handlePlanClick(plan_name){
        setPlanName(plan_name);
        setButtonState(true);
    }

    return(
        <Container className={'mt-5'}>
            <Row className="mt-8 d-flex justify-content-center">
                <Col id="plan">
                    <Row className='mt-2'>
                    <h1>Yearly Plan</h1>
                    </Row>
                    <Row className='mt-2'>
                    <h4>Enjoy App will all features for a complete year</h4>
                    </Row>
                    <Row className='mt-2'>
                    <h4>Premium Package with <span id='discount'>50% more value</span></h4>
                    </Row>
                    <Row className='mt-2'>
                        <h4>Price: <span id='price'>USD 24.00</span></h4>
                    </Row>
                    <Row>
                        <SubButton className='mt-5 mb-3' id='yearly-button'
                                onClick={() => handlePlanClick("yearly")}>Purchase Plan</SubButton>
                    </Row>
                </Col>
                <Col id='plan'>
                    <Row className='mt-2'>
                    <h1 id='plans'>
                        Monthly Plan
                    </h1>
                    </Row>
                    <Row className='mt-2'>
                    <h4>Enjoy App will all features for a complete month</h4>
                    </Row>
                    <Row className='mt-2'>
                    <h4>Ultra Package with <span id='discount'>25% more value</span></h4>
                    </Row>
                    <Row className='mt-2'>
                        <h4>Price: <span id='price'>USD 3.00</span></h4>
                    </Row>
                    <Row>
                        <SubButton className='mt-5 mb-3' id='monthly-button'
                                onClick={() => handlePlanClick("monthly")}>Purchase Plan</SubButton>
                    </Row>
                </Col>
                <Col id='plan'>
                    <Row className='mt-2'>
                    <h1 id='plans'>Weekly Plan</h1>
                    </Row>
                    <Row className='mt-2'>
                    <h4>Enjoy App will all features for a complete week</h4>
                    </Row>
                    <Row className='mt-2'>
                    <h4>Very economical with the <span id='discount'>least cost value</span></h4>
                    </Row>
                    <Row className='mt-2'>
                        <h4>Price: <span id='price'>USD 1.00</span></h4>
                    </Row>
                    <Row>
                        <SubButton className='mt-5 mb-3' id='weekly-button'
                                onClick={() => handlePlanClick("weekly")}>Purchase Plan</SubButton>
                    </Row>
                </Col>
            </Row>
            <div>
                { buttonState && (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm subscriptionPlan={planName} />
                    </Elements>
                )}
            </div>
        </Container>
    )
}
export default SubscriptionDisplay;