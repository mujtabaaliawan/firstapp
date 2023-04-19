import {Col, Container, Row} from "react-bootstrap";


function TraderNoTransTable(props){

    return (
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

export default TraderNoTransTable;