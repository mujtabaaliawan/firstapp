import React from 'react';
import {useState, useEffect} from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../hooks/documentname";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import {set_favourite_company} from "../features/favourite-company/favouriteCompanySlice";
import {set_transaction_company} from "../features/transaction-company/transactionCompanySlice"
import Button from "react-bootstrap/Button";

const Market = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token.value)
    const [data, setData] = useState([]);
    const [field, setField] = useState(['id']);
    const isSubscribed = useSelector((state) => state.subscription.value);


    useDocumentName('Market');
    function handleHeaderClick(headerName) {
        setField(headerName);
    }
    function handleFavouriteClick(company_name) {
        dispatch(set_favourite_company(company_name));
        navigate("/custom-favourite");
    }

    function handleTransactionClick(company_name) {
        dispatch(set_transaction_company(company_name));
        navigate("/custom-transaction");
    }

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

  return (
      <div>
          { isSubscribed && (
      <div className="container-fluid">
    <Table>
      <Thead>
        <Tr className="fs-5 fs-lg-4">
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleHeaderClick('id')}>Stock ID</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleHeaderClick('company__category__name')}>Category</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleHeaderClick('company__name')}>Company</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleHeaderClick('current')}>Current</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleHeaderClick('open')}>Open</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleHeaderClick('high')}>High</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleHeaderClick('low')}>Low</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleHeaderClick('ldcp')}>LDCP</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleHeaderClick('volume')}>Volume</Th>
            <Th colSpan = "2" style={{
                textAlign: 'center',
                color: 'red',
            }}>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map(item => (
            <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.category_name}</Td>
                <Td>{item.company_name}</Td>
                <Td>{item.current}</Td>
                <Td>{item.open}</Td>
                <Td>{item.high}</Td>
                <Td>{item.low}</Td>
                <Td>{item.ldcp}</Td>
                <Td>{item.volume}</Td>
                <Td><Button onClick={() => handleFavouriteClick(item.company_name)}>Mark Favourite</Button></Td>
                <Td><Button onClick={() => handleTransactionClick(item.company_name)}>Perform Transaction</Button></Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
      </div>
          )}
      </div>
  );
}

export default Market;
