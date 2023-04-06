import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../hooks/documentname";
import Shepherd from "shepherd.js";
import TransactionListSteps from "../tour/transactionList";
import TransactionListTwoSteps from "../tour/transactionListTwo";

function Transaction(){
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token.value)
    const transaction_state = useSelector((state) => state.transaction.value);
    const [data, setData] = useState([]);
    const isSubscribed = useSelector((state) => state.subscription.value);
    const tourPermission = useSelector((state) => state.tourMode.value);
    const [tourReady, setTourReady]  = useState(false);
    const [tourStarted, setTourStarted] = useState(false);
    const tourTwo = useSelector((state) => state.tourTwo.value)
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark shepherd-theme-arrows',
            scrollTo: true
        }
    });

    function handleTourStart(tour){
      if (!tourStarted){
        setTourStarted(true);
        tour.start();
      }
    }

    useDocumentName('New Transaction', setTourReady);

    if (tourPermission && tourReady) {
        if (!tourTwo) {
            TransactionListSteps(tour, token, dispatch);
            handleTourStart(tour);
        }
        else {
            TransactionListTwoSteps(tour);
            handleTourStart(tour);
        }
    }

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
            { isSubscribed && (
            <Table>
                <Thead>
                    <Tr className="fs-5 fs-lg-4">
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
                        <Tr key={item.id}>
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
