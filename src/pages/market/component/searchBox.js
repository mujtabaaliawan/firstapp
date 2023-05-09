import {Col, Row} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import styles from "../styles/components";
import Form from "react-bootstrap/Form";


function SearchBox(props) {

    const {SearchBoxIcon} = styles();
    const formik = props.formik;

    return (
        <Row>
              <Col id={'search-container'} className={'container-fluid d-flex justify-content-end mt-2 mb-2'}>
                  <div id="search-box">
                      <Form onSubmit={formik.handleSubmit}>
                          <Form.Control type="text" className={'form-control'}
                           id="searchQuery" value={formik.values.searchQuery}
                           onChange={formik.handleChange}
                           placeholder={"Search"} />
                      </Form>
                          <SearchBoxIcon>
                              <FaSearch className="search-icon" onClick={() => formik.handleSubmit(formik.values)} />
                          </SearchBoxIcon>
                  </div>
              </Col>
        </Row>
    )
}

export default SearchBox