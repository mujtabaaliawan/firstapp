import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../hooks/documentname";

function Report(){
    const token = useSelector((state) => state.token.value)
    const transaction_state = useSelector((state) => state.transaction.value);
    const [data, setData] = useState([]);
    const [field, setField] = useState(['id']);
    const isManager = useSelector((state) => state.manager.value);

    useDocumentName('Daily Report');

    function handleHeaderClick(headerName) {
        if (field === headerName) {
            setField(`-${field}`);
        }
        else {
            setField(headerName);
        }
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/daily-report?field=${field}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(response => response.json())
            .then(data => setData(data))
    }, [transaction_state, field, token]);

    return (
        <div>
            { isManager && (
        <div>
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
            )}
        </div>
  );
}

export default Report;
