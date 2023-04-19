import {Col, Row} from "react-bootstrap";
import React from "react";


function TraderDataTable(props){

    let data = props.data;

    return (
        <div>
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
            </div>
    )

}

export default TraderDataTable;