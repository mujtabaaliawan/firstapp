import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";
import useDocumentName from "../hooks/documentname";


const Followers = () => {
    const token = useSelector((state) => state.token.value);
    const [data, setData] = useState([]);

    useDocumentName('Followers');

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/follower';
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

 return (
      <div>
        <h1 style={{
            fontSize: "50px",
            fontFamily: 'Times New Roman',
            textAlign: 'center',
            color: "white",
        }}>Followers</h1>

            <Table>
                <Thead>
                    <Tr className="fs-5 fs-lg-4">
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Mobile Number</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(item => (
                        <Tr key={item.id}>
                            <Td>{item.id}</Td>
                            <Td>{item.name}</Td>
                            <Td>{item.email}</Td>
                            <Td>{item.mobile_number}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
      </div>
  );
};
export default Followers;