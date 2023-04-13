import React from 'react';
import {useState, useEffect} from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
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
import {set_favourite_company} from "../features/favourite-company/favouriteCompanySlice";
import {set_transaction_company} from "../features/transaction-company/transactionCompanySlice";

const Market = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token.value);
    const [data, setData] = useState([]);
    const [field, setField] = useState(['id']);
    const isActiveSub = useSelector((state) => state.activeSub.value);
    const isTrialSub = useSelector((state) => state.trialSub.value);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [checkDataLoad, setCheckDataLoad] = useState(true);

    useDocumentName('Market');

    useEffect(() => {
        async function fetchData() {
            const url = `http://127.0.0.1:8000/latest_stock?field=${field}`;
            const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            const json = await response.json();
            setData(json);
        }
        fetchData();
        }, [field, token]);


    if (checkDataLoad) {
        if (data.length > 0) {
            setIsDataFetched(true);
            setCheckDataLoad(false);
        }
    }
    // function filterSearchResults(searchQuery) {
    //     async function fetchSearchData() {
    //         const searchUrl = `http://127.0.0.1:8000/market-search?name=${searchQuery}`;
    //         const response = await fetch(searchUrl, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + token
    //         },
    //     })
    //         const json = await response.json();
    //         setSearchData(json);
    //     }
    //     fetchSearchData();
    //     }
    //

    // function handleFavouriteClick(company_name) {
    //     dispatch(set_favourite_company(company_name));
    //     navigate("/custom-favourite");
    // }

    // function handleTransactionClick(company_name) {
    //     dispatch(set_transaction_company(company_name));
    //     navigate("/custom-transaction");
    // }
    //
    // function handleFieldChange(field){
    //     setField(field);
    // }


    return (
      <div>
          { (isActiveSub || isTrialSub) && (
      <div className="container-fluid">
          <Row>
              <Col id={'date-container'}>
                  <h4>Market Updated on</h4>
              </Col>
          </Row>
          <div>
              {isDataFetched && (
                  <LoadMarketData data={data} field={field}
                                  setField={setField} dispatch={dispatch} navigate={navigate}
                  />
              )}
          </div>


          {/*    <Col id={'search-container'} className={'container-fluid'}>*/}
          {/*        <div className="search-box">*/}
          {/*            <input type="text" placeholder="Search" value={searchQuery}*/}
          {/*                   onBlur={(e) => setSearchQuery(e.target.value)}*/}
          {/*                       onKeyDown={(e) => {*/}
          {/*                           if (e.key === 'Enter') {*/}
          {/*                               filterSearchResults(searchQuery);*/}
          {/*                           }*/}
          {/*                }}*/}
          {/*            />*/}
          {/*            <FaSearch className="search-icon" onClick={() => filterSearchResults(searchQuery)} />*/}
          {/*        </div>*/}
          {/*    </Col>*/}
          {/*</Row>*/}
    {/*      {(searchData.length > 0) ? (*/}
    {/*          <div>*/}
    {/*          {searchData && (*/}
    {/*              <Container>*/}
    {/*              <Row>*/}
    {/*                  <h4>Search Results</h4>*/}
    {/*              </Row>*/}
    {/*              <Table>*/}
    {/*  <Thead>*/}
    {/*    <Tr className="fs-5 fs-lg-4 text-center">*/}
    {/*      <Th  style={{*/}
    {/*        cursor: 'pointer',*/}
    {/*        color: '#0d6efd',*/}
    {/*        }} onClick={() => handleFieldChange('id')} id={'market-stock-id'}>Stock ID</Th>*/}
    {/*      <Th  style={{*/}
    {/*        cursor: 'pointer',*/}
    {/*        color: '#0d6efd',*/}
    {/*        }} onClick={() => handleFieldChange('company__category__name')} id={'market-category'}*/}
    {/*      >Category</Th>*/}
    {/*      <Th  style={{*/}
    {/*        cursor: 'pointer',*/}
    {/*        color: '#0d6efd',*/}
    {/*        }} onClick={() => handleFieldChange('company__name')} id={'market-company'}>Company</Th>*/}
    {/*      <Th  style={{*/}
    {/*        cursor: 'pointer',*/}
    {/*        color: '#0d6efd',*/}
    {/*        }} onClick={() => handleFieldChange('current')} id={'market-current'}>Current</Th>*/}
    {/*      <Th  style={{*/}
    {/*        cursor: 'pointer',*/}
    {/*        color: '#0d6efd',*/}
    {/*        }} onClick={() => handleFieldChange('open')} id={'market-open'}>Open</Th>*/}
    {/*      <Th  style={{*/}
    {/*        cursor: 'pointer',*/}
    {/*        color: '#0d6efd',*/}
    {/*        }} onClick={() => handleFieldChange('high')} id={'market-high'}>High</Th>*/}
    {/*      <Th  style={{*/}
    {/*        cursor: 'pointer',*/}
    {/*        color: '#0d6efd',*/}
    {/*        }} onClick={() => handleFieldChange('low')} id={'market-low'}>Low</Th>*/}
    {/*      <Th  style={{*/}
    {/*        cursor: 'pointer',*/}
    {/*        color: '#0d6efd',*/}
    {/*        }} onClick={() => handleFieldChange('ldcp')} id={'market-ldcp'}>LDCP</Th>*/}
    {/*      <Th  style={{*/}
    {/*        cursor: 'pointer',*/}
    {/*        color: '#0d6efd',*/}
    {/*        }} onClick={() => handleFieldChange('volume')} id={'market-volume'}>Volume</Th>*/}
    {/*        <Th colSpan = "2" style={{*/}
    {/*            textAlign: 'center',*/}
    {/*            color: 'red',*/}
    {/*        }} id={'market-actions'}>Actions</Th>*/}
    {/*    </Tr>*/}
    {/*  </Thead>*/}
    {/*    <Tbody>*/}
    {/*        {searchData.map( item => (*/}
    {/*            <Tr key={`table2_${item.id}`} className={'text-center'}>*/}
    {/*                <Td>{item.id}</Td>*/}
    {/*                <Td>{item.category_name}</Td>*/}
    {/*                <Td>{item.company_name}</Td>*/}
    {/*                <Td>{item.current}</Td>*/}
    {/*                <Td>{item.open}</Td>*/}
    {/*                <Td>{item.high}</Td>*/}
    {/*                <Td>{item.low}</Td>*/}
    {/*                <Td>{item.ldcp}</Td>*/}
    {/*                <Td>{item.volume}</Td>*/}
    {/*                <Td><Button onClick={() => handleFavouriteClick(item.company_name)}*/}
    {/*                >Mark Favourite</Button></Td>*/}
    {/*                <Td><Button onClick={() => handleTransactionClick(item.company_name)}*/}
    {/*                >Purchase Stocks</Button></Td>*/}
    {/*        </Tr>*/}
    {/*    ))}*/}
    {/*          </Tbody>*/}
    {/*</Table>*/}
    {/*              </Container>*/}
    {/*      )}*/}
              </div>
              )
          }
      </div>
    )
}

export default Market;
