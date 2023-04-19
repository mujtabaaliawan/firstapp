import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";


function SubscriptionMainData(props){

    let subscriptionData = props.subscriptionData;
    let setTableData = props.setTableData;

    function handleClick(displayData) {
        setTableData(displayData);
    }

    return (
        <div>
            <Row className="mb-5">
                    <Col>
                        <h1 className="d-flex justify-content-center">Subscriptions</h1>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <h2 className="d-flex justify-content-center">
                            Active Subscriptions = <span style={{
                                color: "blue",
                        }}>{subscriptionData["total_active"]}</span></h2>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <h3 className="d-flex justify-content-center">Yearly</h3>
                    </Col>
                    <Col>
                        <h3 className="d-flex justify-content-center">Monthly</h3>
                    </Col>
                    <Col>
                        <h3 className="d-flex justify-content-center">Weekly</h3>
                    </Col>
                    <Col>
                        <h3 className="d-flex justify-content-center">Trial</h3>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <h4 className="d-flex justify-content-center" style={{color: "blue"}}>
                            {subscriptionData["total_yearly"]}</h4>
                    </Col>
                    <Col>
                        <h4 className="d-flex justify-content-center" style={{color: "blue"}}>
                            {subscriptionData["total_monthly"]}</h4>
                    </Col>
                    <Col>
                        <h4 className="d-flex justify-content-center" style={{color: "blue"}}>
                            {subscriptionData["total_weekly"]}</h4>
                    </Col>
                    <Col>
                        <h4 className="d-flex justify-content-center" style={{color: "blue"}}>
                            {subscriptionData["total_trial"]}</h4>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col className={"text-center"}>
                        <Button onClick={() => handleClick(subscriptionData["yearly"])}>
                            Show Yearly</Button>
                    </Col>
                    <Col className={"text-center"}>
                        <Button onClick={() => handleClick(subscriptionData["monthly"])}>
                            Show Monthly</Button>
                    </Col>
                    <Col className={"text-center"}>
                        <Button onClick={() => handleClick(subscriptionData["weekly"])}>
                            Show Weekly</Button>
                    </Col>
                    <Col className={"text-center"}>
                        <Button onClick={() => handleClick(subscriptionData["trial"])}>
                            Show Trial</Button>
                    </Col>
                </Row>
                <Row className="mb-3 mt-5">
                    <Col className={"text-center"}>
                        <Button onClick={() => handleClick(subscriptionData["active"])}>
                            Show All Subscriptions</Button>
                    </Col>
                </Row>
            </div>
    )
}

export default SubscriptionMainData;
