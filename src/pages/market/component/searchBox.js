import {Col, Row} from "react-bootstrap";
import FilterSearchResults from "../services/searchData";
import {FaSearch} from "react-icons/fa";

function SearchBox(props) {

    const searchQuery = props.searchQuery;
    const setSearchQuery = props.setSearchQuery;
    const token = props.token;
    const setSearchData = props.setSearchData;
    const setDisplaySearchResults = props.setDisplaySearchResults;

    return (
        <Row>
              <Col id={'search-container'} className={'container-fluid'}>
                  <div className="search-box">
                      <input type="text" placeholder="Search" value={searchQuery}
                             onChange={(e) => setSearchQuery(e.target.value)}
                             onKeyDown={(e) => {
                                 if (e.key === 'Enter') {
                                     FilterSearchResults(token, searchQuery,
                                         setSearchData, setDisplaySearchResults);
                                 }
                          }}
                      />
                      <FaSearch className="search-icon"
                                onClick={() => FilterSearchResults(token,
                          searchQuery, setSearchData, setDisplaySearchResults)} />
                  </div>
              </Col>
        </Row>
    )
}

export default SearchBox;