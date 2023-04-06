import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";
import useDocumentName from "../hooks/documentname";
import Button from "react-bootstrap/Button";
import Shepherd from "shepherd.js";
import FollowingSteps from "../tour/following";

const Following = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token.value);
    const [data, setData] = useState([]);
    const [selectedFollowingIds, setSelectedFollowingIds] = useState({});
    const isSubscribed = useSelector((state) => state.subscription.value);
    const isManager = useSelector((state) => state.manager.value);
    const tourPermission = useSelector((state) => state.tourMode.value);
    const [tourReady, setTourReady]  = useState(false);
    const [tourStarted, setTourStarted] = useState(false);
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark shepherd-theme-arrows',
            scrollTo: true
        }
    });

    useDocumentName('Following', setTourReady);

    if (tourPermission && tourReady) {
        FollowingSteps(tour, token, dispatch)
        handleTourStart(tour)
    }

    function handleTourStart(tour){
        if (!tourStarted){
        setTourStarted(true);
        tour.start();
        }
    }

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/following';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
    }, [token]);

    const handleToggleDetails = (id) => {
        setSelectedFollowingIds((prevState) => {
            const updatedState = {...prevState};
            updatedState[id] = !updatedState[id];
            return updatedState;
        });
    };


    return (
     <div>
         { (isSubscribed || isManager) && (
      <div>
        <h1 style={{
            fontSize: "50px",
            fontFamily: 'Times New Roman',
            textAlign: 'center',
            color: "white",
            marginTop: "50px"
        }}>Following</h1>

            <Table style={{
                            marginTop: "30px"
                        }}>
                <Thead>
                    <Tr className="fs-5 fs-lg-4">
                        <Th id={'following-id'} >ID</Th>
                        <Th id={'following-name'} >Name</Th>
                        <Th id={'following-email'} >Email</Th>
                        <Th id={'following-mobile'} >Mobile Number</Th>
                        <Th id={'following-transaction'} >Transactions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item) => {
                        const isSelected = selectedFollowingIds[item.id] === true;
                        return (
                        <React.Fragment key={item.id}>
                            <Tr>
                                <Td>{item.id}</Td>
                                <Td>{item.name}</Td>
                                <Td>{item.email}</Td>
                                <Td>{item.mobile_number}</Td>
                                <Td><Button onClick={() => handleToggleDetails(item.id)}>
                                    {isSelected
                                        ? "Hide transaction details"
                                        : "Display transaction details"}
                                </Button></Td>
                            </Tr>
                            {isSelected && (
                                <tr className='mt-5'>
                                    <td colSpan="7">
                                        <div style={{
                                            fontSize: "30px",
                                            fontFamily: 'Times New Roman',
                                            textAlign: 'center',
                                            color: "blue",
                                        }}>Transaction Details
                                        </div>
                                        <Table className="mb-5 mt-3">
                                            <Thead>
                                                <Tr>
                                                    <Th>Number</Th>
                                                    <Th>Date Time</Th>
                                                    <Th>Nature</Th>
                                                    <Th>Volume</Th>
                                                    <Th>Company</Th>
                                                    <Th>Category</Th>
                                                    <Th>Current</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {item.transactions.map((transaction) => (
                                                    <Tr key={transaction.id}>
                                                        <Td>{transaction.count}</Td>
                                                        <Td>{transaction.date_time}</Td>
                                                        <Td>{transaction.nature}</Td>
                                                        <Td>{transaction.volume}</Td>
                                                        <Td>{transaction.company}</Td>
                                                        <Td>{transaction.category}</Td>
                                                        <Td>{transaction.current}</Td>
                                                    </Tr>
                                                ))}
                                            </Tbody>
                                        </Table>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    )})}
                </Tbody>
            </Table>
      </div>
         )}
     </div>
  );
}
export default Following;