import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";

function Success() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
            }, 5000);

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
                        Congratulations, you have successfully subscribed. Welcome. </h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Success;