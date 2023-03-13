import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";
import useDocumentName from "../hooks/documentname";


const Dashboard = () => {
    const token = useSelector((state) => state.token.value)
    const transaction_state = useSelector((state) => state.transaction.value);
    const [data, setData] = useState([]);
    const [field, setField] = useState(['id']);

    function handleHeaderClick(headerName) {
        if (field === headerName) {
            setField(`-${field}`);
        }
        else {
            setField(headerName);
        }
    }
    useDocumentName('Dashboard');

    useEffect(() => {
        async function fetchData() {
            const url = `http://127.0.0.1:8000/all-transaction?field=${field}`;
            const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            const json = await response.json();
            console.log(json);
            setData(json);
        }
        fetchData();
        }, [transaction_state, field, token]);


  return (
      <div>
        <h1 style={{
            fontSize: "50px",
            fontFamily: 'Times New Roman',
            textAlign: 'center',
            color: "white",
        }}>Dashboard</h1>

            <Table>
                <Thead>
                    <Tr className="fs-5 fs-lg-4">
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} onClick={() => handleHeaderClick('id')}>ID</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} onClick={() => handleHeaderClick('trader__user__first_name')}>Trader Name</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} onClick={() => handleHeaderClick('nature')}>Nature</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} onClick={() => handleHeaderClick('volume_transacted')}>Volume</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} onClick={() => handleHeaderClick('date_time')}>Date Time</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} onClick={() => handleHeaderClick('stock_detail__company__category__name')}>Category</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} onClick={() => handleHeaderClick('stock_detail__company__name')}>Company</Th>
                        <Th>Current</Th>
                        <Th>Open</Th>
                        <Th>High</Th>
                        <Th>Low</Th>
                        <Th>Change</Th>
                        <Th>LDCP</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(item => (
                        <Tr key={item.id}>
                            <Td>{item.id}</Td>
                            <Td>{item.trader_name}</Td>
                            <Td>{item.nature}</Td>
                            <Td>{item.volume_transacted}</Td>
                            <Td>{item.date_time}</Td>
                            <Td>{item.category_name}</Td>
                            <Td>{item.company_name}</Td>
                            <Td>{item.current}</Td>
                            <Td>{item.open}</Td>
                            <Td>{item.high}</Td>
                            <Td>{item.low}</Td>
                            <Td>{item.change}</Td>
                            <Td>{item.ldcp}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
      </div>
  );
};
export default Dashboard;