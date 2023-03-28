import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import Button from "react-bootstrap/Button";
import {useSelector, useDispatch} from "react-redux";
import {help_on, help_off} from "../../features/help/helpSlice";

function Navigator() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.logged.value);
  const isManager = useSelector((state) => state.manager.value);
  const help_mode = useSelector((state) => state.help.value);
  const isSubscribed = useSelector((state) => state.subscription.value);

  const toggleHelpMode = () => {
    if (help_mode === true) {
      dispatch(help_off());
    }
    else {
      dispatch(help_on());
    }
  }
  return (<div> {
        isLoggedIn ? ( <div> {
                  isManager ? (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                      <Navbar.Brand href="#home">Stock Market</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                          <Nav.Link href="/report">Daily Report</Nav.Link>
                          <Nav.Link href="/explore">Explore Following</Nav.Link>
                          <Nav.Link href="/subscriptions">Subscriptions</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto"> {
                          isLoggedIn ? (
                              <div>
                              <a href='http://localhost:3000/logout'>
                                <Button>Logout</Button></a>
                              </div>
                          ) : <></> }
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>) : (
                      <div> {
                        isSubscribed ?  (
                            <div>
                              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                          <Navbar.Brand href="#home">Stock Market</Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                          <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                              <Nav.Link href="/">Home</Nav.Link>
                              <Nav.Link href="/profile">Profile</Nav.Link>
                              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                              <Nav.Link href="/explore">Explore Following</Nav.Link>
                              <Nav.Link href="/followers">Followers</Nav.Link>
                              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                              <Nav.Link href="/market">Market</Nav.Link>
                              <NavDropdown title="Transaction" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/saletransaction">Sell Stocks</NavDropdown.Item>
                                <NavDropdown.Item href="/newtransaction">Create New</NavDropdown.Item>
                                <NavDropdown.Item href="/transactionlist">List</NavDropdown.Item>
                              </NavDropdown>
                              <NavDropdown title="Favourite" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/newfavourite">Create New</NavDropdown.Item>
                                <NavDropdown.Item href="/favouritelist">List</NavDropdown.Item>
                              </NavDropdown>
                              <Nav.Link href="/graph">Graph</Nav.Link>
                              <Nav.Link href="/subscribe">Subscription Plans</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                              <Button onClick={toggleHelpMode}>Help</Button>
                              <a href='http://localhost:3000/logout'>
                                <Button>Logout</Button></a>
                            </Nav>
                          </Navbar.Collapse>
                        </Container>
                      </Navbar>
                            </div>
                  ) : (
                      <div>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                          <Navbar.Brand href="#home">Stock Market</Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                          <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                              <Nav.Link href="/">Home</Nav.Link>
                              <Nav.Link href="/subscribe">Subscription Plans</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                              <Button onClick={toggleHelpMode}>Help</Button>
                              <a href='http://localhost:3000/logout'>
                                <Button>Logout</Button></a>
                            </Nav>
                          </Navbar.Collapse>
                        </Container>
                      </Navbar>
                      </div>
                        ) }
                      </div> ) }
        </div> )
                   : (
                        <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                      <Navbar.Brand href="#home">Stock Market</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                          <Button onClick={toggleHelpMode}>Help</Button>
                        </Nav>
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
                        </div>
                        )
      } </div>
  );
}

export default React.memo(Navigator);