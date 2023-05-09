import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../../hooks/documentname";
import Button from "react-bootstrap/Button";
import {Col, Row} from "react-bootstrap";
import './styles/market.css';
import useMarketUpdate from "./hooks/UpdateData";
import SearchBox from "./component/searchBox";
import {MemoizedMarket} from "./component/displayMarket";
import UserSelectors from "../selectors/userSelectors";
import Selectors from "./selectors/selectors";

const Market = () => {
    let {token, isActiveSub, isTrialSub} = UserSelectors();
    let {marketData, setMarketData, field, searchData, setSearchData,
        marketDate, setMarketDate, searchField, displaySearchResults, setDisplaySearchResults,
        formik} = Selectors(token);


    useDocumentName('Market');
    useMarketUpdate(token, field, setMarketData, setMarketDate);

    function SearchCancel(){
        setDisplaySearchResults(false);
        formik.values.SearchQuery='';
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
            <SearchBox token={token} setSearchData={setSearchData} formik={formik}
                       setDisplaySearchResults={setDisplaySearchResults} />
          <div>
              { !displaySearchResults ? ( <div>
              {marketData && (
                  <MemoizedMarket data={marketData} field={field}
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
                      <MemoizedMarket data={searchData} field={searchField}
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
