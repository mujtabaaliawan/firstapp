import React from 'react';
import {useState, useEffect} from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../hooks/documentname";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import { FaSearch } from 'react-icons/fa';
import {Col, Row} from "react-bootstrap";
import '../styles/market-search.css';
import Container from "react-bootstrap/Container";
import LoadMarketData from "../components/marketData/marketTable";
import axios from 'axios';


const Market = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token.value);
    const [marketData, setMarketData] = useState([]);
    const [field, setField] = useState('id');
    const isActiveSub = useSelector((state) => state.activeSub.value);
    const isTrialSub = useSelector((state) => state.trialSub.value);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [marketDate, setMarketDate] = useState('');
    const [searchField, setSearchField] = useState('id');
    const [displaySearchResults, setDisplaySearchResults] = useState(false);

    useDocumentName('Market');

    useEffect(() => {
        let marketUrl = `http://127.0.0.1:8000/latest_stock?field=${field}`;
        let marketDateUrl = 'http://127.0.0.1:8000/stock_date';
        let headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }
        axios.get(marketUrl, { headers: headers})
            .then(response => {
                setMarketData(response.data);
            })
        axios.get(marketDateUrl, { headers: headers})
            .then (response => {setMarketDate(response.data['latest_time'].replace('T',' '))});
    }, [field, token])


    function filterSearchResults(searchQuery, searchField) {
        let searchUrl = `http://127.0.0.1:8000/market-search?name=${searchQuery}`;
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
        axios.get(searchUrl, { headers: headers})
            .then(response => {
                setSearchData(response.data);
            })
        setDisplaySearchResults(true);
        }

    function SearchCancel(){
        setDisplaySearchResults(false);
        setSearchQuery('');
    }
    return (
      <div>
          { (isActiveSub || isTrialSub) && (
      <div className="container-fluid">
          <Row>
              <Col id={'date-container'}>
                  <h4>Market Updated on:</h4><h4>{marketDate}</h4>
              </Col>
              <Col id={'search-container'} className={'container-fluid'}>
                  <div className="search-box">
                      <input type="text" placeholder="Search" value={searchQuery}
                             onChange={(e) => setSearchQuery(e.target.value)}
                             onKeyDown={(e) => {
                                 if (e.key === 'Enter') {
                                     filterSearchResults(searchQuery);
                                 }
                          }}
                      />
                      <FaSearch className="search-icon" onClick={() => filterSearchResults(searchQuery)} />
                  </div>
              </Col>
          </Row>
          <Container>
              { !displaySearchResults ? ( <div>
              {marketData && (
                  <LoadMarketData data={marketData} field={field}
                                  setField={setField} dispatch={dispatch} navigate={navigate}
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
                      <LoadMarketData data={searchData} field={searchField}
                                      setField={setSearchField} dispatch={dispatch} navigate={navigate}
                  />
                  }
                  </div>) }
          </Container>
              </div>
              )
          }
      </div>
    )
}

export default Market;
