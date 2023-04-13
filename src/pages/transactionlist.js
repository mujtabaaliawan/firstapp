import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../hooks/documentname";


function Transaction(){

    const token = useSelector((state) => state.token.value)
    const transaction_state = useSelector((state) => state.transaction.value);
    const [data, setData] = useState([]);
    const isActiveSub = useSelector((state) => state.activeSub.value);
    const isTrialSub = useSelector((state) => state.trialSub.value);


    useDocumentName('New Transaction');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/transaction', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(response => response.json())
            .then(data => setData(data))
    }, [transaction_state, token]);

    return (
        <div>
            { (isActiveSub || isTrialSub) && (
            <Table>
                <Thead>
                    <Tr className="fs-5 fs-lg-4 text-center">
                        <Th id={'transaction-id'}>ID</Th>
                        <Th id={'transaction-nature'}>Nature</Th>
                        <Th id={'transaction-volume'}>Volume</Th>
                        <Th id={'transaction-datetime'}>Date Time</Th>
                        <Th id={'transaction-category'}>Category</Th>
                        <Th id={'transaction-company'}>Company</Th>
                        <Th id={'transaction-stockID'}>Stock ID</Th>
                        <Th id={'transaction-current'}>Current</Th>
                        <Th id={'transaction-open'}>Open</Th>
                        <Th id={'transaction-high'}>High</Th>
                        <Th id={'transaction-low'}>Low</Th>
                        <Th id={'transaction-change'}>Change</Th>
                        <Th id={'transaction-ldcp'}>LDCP</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(item => (
                        <Tr key={item.id} className={'text-center'}>
                            <Td>{item.id}</Td>
                            <Td>{item.nature}</Td>
                            <Td>{item.volume_transacted}</Td>
                            <Td>{item.date_time}</Td>
                            <Td>{item.category_name}</Td>
                            <Td>{item.company_name}</Td>
                            <Td>{item.stock_id}</Td>
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
            )}
        </div>
    );
}

export default Transaction;
