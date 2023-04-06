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
                      <Navbar.Brand href="/">Stock Market</Navbar.Brand>
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
                          <Navbar.Brand href="/">Stock Market</Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                          <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                              <Nav.Link href="/">Home</Nav.Link>
                              <Nav.Link href="/profile" id='profile-loggedin'>Profile</Nav.Link>
                              <Nav.Link href="/market" id='market-loggedin'>Market</Nav.Link>
                              <Nav.Link href="/graph" id='graph-loggedin'>Graph</Nav.Link>
                              <NavDropdown title="Transaction" id="trans-nav-dropdown">
                                <NavDropdown.Item href="/newtransaction" id='new-trans-loggedin'>Create New</NavDropdown.Item>
                                <NavDropdown.Item href="/saletransaction" id='sale-trans-loggedin'>Sell Stocks</NavDropdown.Item>
                                <NavDropdown.Item href="/transactionlist" id='list-trans-loggedin'>List</NavDropdown.Item>
                              </NavDropdown>
                              <Nav.Link href="/portfolio" id='portfolio-loggedin'>Portfolio</Nav.Link>
                              <NavDropdown title="Favourite" id="fav-nav-dropdown">
                                <NavDropdown.Item href="/newfavourite" id='new-fav-loggedin'>Create New</NavDropdown.Item>
                                <NavDropdown.Item href="/favouritelist" id='list-fav-loggedin'>List</NavDropdown.Item>
                              </NavDropdown>
                              <Nav.Link href="/dashboard" id='dashboard-loggedin'>Dashboard</Nav.Link>
                              <Nav.Link href="/explore" id='following-loggedin'>Explore</Nav.Link>
                              <Nav.Link href="/followers" id='followers-loggedin'>Followers</Nav.Link>

                              <Nav.Link href="/portal" id='customer-portal-loggedin'>Customer Portal</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                              { help_mode ? (
                              <Button onClick={toggleHelpMode} style={{color: "lawngreen"}}>Help</Button>
                                  ) : (
                              <Button onClick={toggleHelpMode} style={{color: "orange"}}>Help Off</Button>
                              )}
                              <a href='http://localhost:3000/logout'>
                                <Button style={{
                                  margin: "auto",
                              }}>Logout</Button></a>
                            </Nav>
                          </Navbar.Collapse>
                        </Container>
                      </Navbar>
                            </div>
                  ) : (
                      <div>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                          <Navbar.Brand href="/">Stock Market</Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                          <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                              <Nav.Link href="/">Home</Nav.Link>
                              <Nav.Link href="/subscribe" id='subscription-unsubscribed'>Subscription Plans</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                              { help_mode ? (
                              <Button onClick={toggleHelpMode} style={{color: "darkgreen"}}>Help On</Button>
                                  ) : (
                              <Button onClick={toggleHelpMode} style={{color: "lawngreen"}}>Help Off</Button>
                              )}
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
                      <Navbar.Brand href="/" >Stock Market</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                          <Button onClick={toggleHelpMode}>Help</Button>
                        </Nav>
                          <Nav className="ms-auto">
                              <div>
                              <a href='http://localhost:3000/login'><Button id='login-loggedout' style={{
                                  marginRight: '10px',
                              }}>Login</Button></a>
                              <a href='http://localhost:3000/newuser'><Button id='signup-loggedout'>Signup</Button></a>
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