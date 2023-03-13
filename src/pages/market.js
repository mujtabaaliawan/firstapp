import React from 'react';
import {useState} from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {useEffect} from "react";
import {useSelector} from "react-redux";

const Market = () => {
  const token = useSelector((state) => state.token.value)
    const [data, setData] = useState([]);
    const [field, setField] = useState(['id']);

    useEffect(() => {
        document.title = 'Market';
        }, []);

  function handleHeaderClick(headerName) {
    setField(headerName);
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
          </Tr>
        ))}
      </Tbody>
    </Table>
</div>
);
};

export default Market;
