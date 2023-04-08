import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useDocumentName from "../hooks/documentname";
import { Container, Row, Col} from 'react-bootstrap';
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";
import Button from "react-bootstrap/Button";
import Shepherd from "shepherd.js";
import PortFolioSteps from "../tour/portFolio";

const PortFolio = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token.value);
    const [data, setData] = useState([]);
    const [selectedFollowingIds, setSelectedFollowingIds] = useState({});
    const transaction_state = useSelector((state) => state.transaction.value);
    const isSubscribed = useSelector((state) => state.subscription.value);
    const tourPermission = useSelector((state) => state.tourMode.value);
    const [tourReady, setTourReady]  = useState(false);
    const [tourStarted, setTourStarted] = useState(false);
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark shepherd-theme-arrows',
            scrollTo: true
        }
    });
        function handleTourStart(tour){
      if (!tourStarted){
        setTourStarted(true);
        tour.start();
      }
    }

    useDocumentName('New Transaction', setTourReady);

    if (tourPermission && tourReady) {
        PortFolioSteps(tour, token, dispatch);
        handleTourStart(tour);
    }

        useEffect(() => {
        const url = 'http://127.0.0.1:8000/trader-profit';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(response => response.json())
            .then(data => setData(data))
    }, [token, transaction_state]);

    console.log(data);

    const handleToggleDetails = (id) => {
        setSelectedFollowingIds((prevState) => {
            const updatedState = {...prevState};
            updatedState[id] = !updatedState[id];
            return updatedState;
        });
    };

    return (
        <div>
            { isSubscribed && (
        <div>
            { data && data.companies ? (
            <Container className="mt-5">
        <Row className="mb-3">
          <Col md={2}>
          </Col>
            <Col>
            <h3 className="d-flex justify-content-center">Total Stocks</h3>
          </Col>
          <Col>
            <h3 className="d-flex justify-content-center">Expected Profit</h3>
          </Col>
          <Col>
            <h3 className="d-flex justify-content-center">Expected Loss</h3>
          </Col>
        </Row>
                <Row className="mb-3">
            <Col md={2}>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" id={'portfolio-total-stocks'}
                style={{color: "blue"}}>{data["total_stocks"]}</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" id={'portfolio-expected-profit'}
                style={{color: "blue"}}>{data["total_expected_profit"]}</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" id={'portfolio-expected-loss'}
                style={{color: "blue"}}>{data["total_expected_loss"]}</h4>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={2}>
          </Col>
          <Col>
            <h3 className="d-flex justify-content-center">Current Investment</h3>
          </Col>
          <Col>
            <h3 className="d-flex justify-content-center">Lifetime Investment</h3>
          </Col>
        </Row>
                <Row className="mb-3">
            <Col md={2}>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" id={'current-investment'}
                style={{color: "blue"}}>{data["current_investment"]}</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" id={'total-investment'}
                style={{color: "blue"}}>{data["total_investment"]}</h4>
          </Col>
        </Row>
                <Table style={{
                            marginTop: "30px"
                        }}>
                <Thead>
                    <Tr className="fs-5 fs-lg-4 text-center">
                        <Th id={'company-name'}>Company Name</Th>
                        <Th id={'company-stocks'}>Company Stocks</Th>
                        <Th id={'company-current-investment'}>Current Investment</Th>
                        <Th id={'company-expected-earning'}>Expected Earning</Th>
                        <Th id={'company-lifetime-investment'}>Lifetime Investment</Th>
                        <Th id={'company-lifetime-earning'}>Lifetime Earning</Th>
                        <Th id={'company-stock-details'}>Stock Details</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.entries(data.companies).map(([id, company]) => {
                        const isSelected = selectedFollowingIds[id] === true;
                        return (
                        <React.Fragment key={id}>
                            <Tr className={'text-center'}>
                                <Td>{company.company_name}</Td>
                                <Td>{company.total_company_stocks}</Td>
                                <Td>{company.current_investment_in_company}</Td>
                                <Td>{company.company_total_expected_profit_loss}</Td>
                                <Td>{company.lifetime_investment_in_company}</Td>
                                <Td>{company.company_lifetime_net_earning}</Td>
                                <Td><Button id={'button-company-stock-detail'}
                                            onClick={() => handleToggleDetails(id)}>
                                    {isSelected
                                        ? "Hide Stocks"
                                        : "Show Stocks"}
                                </Button></Td>
                            </Tr>
                            {isSelected && (
                                <tr className='mt-5'>
                                    <td colSpan="7">
                                        <div style={{
                                            fontSize: "30px",
                                            fontFamily: 'Times New Roman',
                                            textAlign: 'center',
                                            color: "blue",
                                        }}>Stock Details
                                        </div>
                                        <Table className="mb-5 mt-3">
                                            <Thead>
                                                <Tr className={'text-center'}>
                                                    <Th id={'stock'}>Stocks</Th>
                                                    <Th id={'purchase-price'}>Purchase Price</Th>
                                                    <Th id={'purchase-date'}>Date of Purchase</Th>
                                                    <Th id={'expected-sale-price'}>Expected Sale Price</Th>
                                                    <Th id={'expected-earning'}>Expected Earning</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {company.stocks_data.map((stock, id) => (
                                                    <Tr key={id} className={'text-center'}>
                                                        <Td>{stock.stocks}</Td>
                                                        <Td>{stock.current_price}</Td>
                                                        <Td>{stock.date_time}</Td>
                                                        <Td>{stock.sale_price}</Td>
                                                        <Td>{stock.expected_profit_loss}</Td>
                                                    </Tr>
                                                ))}
                                            </Tbody>
                                        </Table>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    )})}
                </Tbody>
            </Table>
            </Container>
                ) : ( <Container className="mt-5">
        <Row className="mb-3">
          <Col md={2}>
          </Col>
            <Col>
            <h3 className="d-flex justify-content-center">Total Stocks</h3>
          </Col>
          <Col>
            <h3 className="d-flex justify-content-center">Expected Profit</h3>
          </Col>
          <Col>
            <h3 className="d-flex justify-content-center">Expected Loss</h3>
          </Col>
        </Row>
                <Row className="mb-3">
            <Col md={2}>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" id={'portfolio-total-stocks'}
                style={{color: "blue"}}>0</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" id={'portfolio-expected-profit'}
                style={{color: "blue"}}>0</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" id={'portfolio-expected-loss'}
                style={{color: "blue"}}>0</h4>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={2}>
          </Col>
          <Col>
            <h3 className="d-flex justify-content-center" id={'current-investment'}>Current Investment</h3>
          </Col>
          <Col>
            <h3 className="d-flex justify-content-center" id={'total-investment'}>Lifetime Investment</h3>
          </Col>
        </Row>
                <Row className="mb-3">
            <Col md={2}>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" style={{color: "blue"}}>0</h4>
          </Col>
          <Col>
            <h4 className="d-flex justify-content-center" style={{color: "blue"}}>0</h4>
          </Col>
        </Row>
            </Container>
            )
            }
        </div>
            )}
        </div>
    )
}

export default PortFolio;