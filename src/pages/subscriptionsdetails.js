import React, {useEffect, useState} from 'react';
import "../styles/subscriptions.css";
import { Container, Row, Col} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";
import useDocumentName from "../hooks/documentname";
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";


function SubscriptionDetails() {
    const [subscriptionData, setSubscriptionData] = useState('');
    const isManager = useSelector((state) => state.manager.value);
    const token = useSelector((state) => state.token.value);
    const [tableData, setTableData] = useState('');

    useDocumentName('Subscription Details');

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/subscriptions';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(response => response.json())
            .then(data => setSubscriptionData(data))
    }, [token]);

    console.log(subscriptionData);

    function handleClick(displayData) {
        setTableData(displayData);
    }

    function displayDate(stamp) {
        const date = new Date(stamp * 1000);
        const formattedDate = date.toLocaleString('en-US', {
            timeZone: 'UTC',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit' });
        return formattedDate;
    }
    return (
        <div>
            { isManager && (
                <div>
            <Container className="mt-5">
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
                <div>
                    { tableData && (
                        <Table style={{
                            marginTop: "30px"
                        }}>
                            <Thead>
                                <Tr className="fs-5 fs-lg-4 text-center">
                                    <Th>Subscription ID</Th>
                                    <Th>Subscription Type</Th>
                                    <Th>Start Date</Th>
                                    <Th>End Date</Th>
                                    <Th>Trader Name</Th>
                                    <Th>Trader Email</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {tableData.map(item => (
                                    <Tr key={item.id} className={'text-center'}>
                                        <Td>{item.id}</Td>
                                        <Td>{item.metadata.subscription_name}</Td>
                                        <Td>{item.current_period_start ? displayDate(item.current_period_start) :
                                            ''}</Td>
                                        <Td>{item.current_period_end ? displayDate(item.current_period_end) :
                                            ''}</Td>
                                        <Td>{item.metadata.customer_name}</Td>
                                        <Td>{item.metadata.customer_email}</Td>
                                    </Tr>
                                    ))}
                            </Tbody>
                        </Table>
                    )}
                </div>
                </Container>
            </div>
                )}
        </div>
    );
}
export default SubscriptionDetails;