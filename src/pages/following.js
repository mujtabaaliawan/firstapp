import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";
import useDocumentName from "../hooks/documentname";
import Button from "react-bootstrap/Button";

const Following = () => {
    const token = useSelector((state) => state.token.value);
    const [data, setData] = useState([]);
    const [selectedFollowingId, setSelectedFollowingId] = useState('');

    useDocumentName('Following');

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
            .then(data => setData(data))
    }, [token]);

    const handleToggleDetails = (id) => {
        setSelectedFollowingId((prevId) => (prevId === id ? "" : id));
    };

 return (
      <div>
        <h1 style={{
            fontSize: "50px",
            fontFamily: 'Times New Roman',
            textAlign: 'center',
            color: "red",
        }}>Following</h1>

            <Table>
                <Thead>
                    <Tr className="fs-5 fs-lg-4">
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Mobile Number</Th>
                        <Th>Transactions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item) => (
                        <React.Fragment key={item.id}>
                            <Tr>
                                <Td>{item.id}</Td>
                                <Td>{item.name}</Td>
                                <Td>{item.email}</Td>
                                <Td>{item.mobile_number}</Td>
                                <Td><Button onClick={() => handleToggleDetails(item.id)}>
                                    {selectedFollowingId === item.id
                                        ? "Hide transaction details"
                                        : "Display transaction details"}
                                </Button></Td>
                            </Tr>
                            {selectedFollowingId === item.id && (
                            <tr>
                                <td colSpan="7">
                                    <div style={{
                                        fontSize: "30px",
                                        fontFamily: 'Times New Roman',
                                        textAlign: 'center',
                                        color: "red",
                                    }}>Transaction Details</div>
                                    <Table>
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
                    ))}
                </Tbody>
            </Table>
      </div>
  );
};
export default Following;