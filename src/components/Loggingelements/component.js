import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';


function Logger() {
  const isLoggedIn = useSelector((state) => state.logged.value)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto"> {
                    isLoggedIn ? (
                    <a href='http://localhost:3000/logout'>
                    <Button className="me-2">Logout</Button></a>
                    ) : (
                        <div>
                            <a href='http://localhost:3000/login'><Button className="me-2" style={{
                                marginRight: '10px'
                            }}>Login</Button></a>
                            <a href='http://localhost:3000/newuser'><Button className="me-2">Signup</Button></a>
                        </div>
                    )}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Logger;
