import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../../hooks/documentname";
import Button from "react-bootstrap/Button";
import {Col, Row} from "react-bootstrap";
import '../../styles/market-search.css'
import useMarketUpdate from "./hooks/UpdateData";
import SearchBox from "./component/searchBox";
import DisplayMarket from "./component/displayMarket";
import UserSelectors from "../selectors/userSelectors";
import Selectors from "./selectors/selectors";

const Market = () => {
    let {token, isActiveSub, isTrialSub} = UserSelectors();
    let {marketData, setMarketData, field, searchQuery, setSearchQuery, searchData, setSearchData,
        marketDate, setMarketDate, searchField, displaySearchResults, setDisplaySearchResults} = Selectors()


    useDocumentName('Market');

    useMarketUpdate(token, field, setMarketData, setMarketDate);

    function SearchCancel(){
        setDisplaySearchResults(false);
        setSearchQuery('');
    }
    return (
      <div>
          { (!isActiveSub && !isTrialSub) ? (<></>) :(
      <div className="container-fluid">
          <Row>
              <Col id={'date-container'}>
                  <h4>Market Updated on: <span id={'date-value'}>{marketDate}</span></h4>
              </Col>
          </Row>
            <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                   token={token} setSearchData={setSearchData}
                       setDisplaySearchResults={setDisplaySearchResults} />
          <div>
              { !displaySearchResults ? ( <div>
              {marketData && (
                  <DisplayMarket data={marketData} field={field}
                  />
              )} </div>
                  ) : ( <div>
                  <Row>
                      <Col>
                          <h4> Search Results</h4>
                      </Col>
                      <Col>
                          <Button onClick={SearchCancel}>Cancel Search</Button>
                      </Col>
                  </Row>
                  {
                      <DisplayMarket data={searchData} field={searchField}
                  />
                  }
                  </div>) }
          </div>
              </div>
              )
          }
      </div>
    )
}

export default Market;
