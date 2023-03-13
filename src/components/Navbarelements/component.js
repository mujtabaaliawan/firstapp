import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";


function Navigator() {
  const isLoggedIn = useSelector((state) => state.logged.value)
  const isManager = useSelector((state) => state.manager.value)

  return (<div> {
        isLoggedIn ? (<div> {
                  isManager ? (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                      <Navbar.Brand href="#home">Stock Market</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                          <Nav.Link href="/favourite">Favourites</Nav.Link>
                          <Nav.Link href="/report">Daily Report</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto"> {
                          isLoggedIn ? (
                              <a href='http://localhost:3000/logout'>
                                <Button>Logout</Button></a>
                          ) : (
                              <div>
                                <a href='http://localhost:3000/login'><Button style={{
                                  marginRight: '10px'
                                }}>Login</Button></a>
                                <a href='http://localhost:3000/newuser'><Button>Signup</Button></a>
                              </div>
                          )}
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>) : (
                      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                          <Navbar.Brand href="#home">Stock Market</Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                          <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                              <Nav.Link href="/">Home</Nav.Link>
                              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                              <Nav.Link href="/market">Market</Nav.Link>
                              <NavDropdown title="Transaction" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/newtransaction">Create New</NavDropdown.Item>
                                <NavDropdown.Item href="/transactionlist">List</NavDropdown.Item>
                              </NavDropdown>
                              <NavDropdown title="Favourite" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/newfavourite">Create New</NavDropdown.Item>
                                <NavDropdown.Item href="/favouritelist">List</NavDropdown.Item>
                              </NavDropdown>
                              <Nav.Link href="/graph">Graph</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                              <a href='http://localhost:3000/logout'>
                                <Button>Logout</Button></a>
                            </Nav>
                          </Navbar.Collapse>
                        </Container>
                      </Navbar>
                  )
                }
                </div>
            )
            : (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                      <Navbar.Brand href="#home">Stock Market</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                      <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="ms-auto">
                              <div>
                              <a href='http://localhost:3000/login'><Button style={{
                                  marginRight: '10px',
                              }}>Login</Button></a>
                              <a href='http://localhost:3000/newuser'><Button>Signup</Button></a>
                              </div>
            </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)
      }
      </div>
  );
}
export default React.memo(Navigator);