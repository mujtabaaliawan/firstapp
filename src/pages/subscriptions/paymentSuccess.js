import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";

function Success() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/logout');
            }, 2000);

        return () => {
            clearTimeout(timeout);
        };
        },);

    return (
        <Container style={{
            margin: "auto",
            marginTop: "40vh",
        }}>
            <Row className="mt-8">
                <Col>
                    <h1 className="text-center">
                        Congratulations, you have successfully subscribed.
                        Please Login again to enjoy full features</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Success;