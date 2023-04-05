import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../hooks/documentname";
import Shepherd from "shepherd.js";

function Favourite(){
    const token = useSelector((state) => state.token.value);
    const favourite_state = useSelector((state) => state.favourite.value);
    const [data, setData] = useState([]);
    const isSubscribed = useSelector((state) => state.subscription.value);
    const [tourReady, setTourReady]  = useState(false)
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark',
            scrollTo: true
        }
    });
    useDocumentName('Favourite List', setTourReady);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/favourite', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(response => response.json())
            .then(data => setData(data))
    }, [favourite_state, token]);

    return (
        <div>
            { isSubscribed && (
            <Table>
                <Thead>
                    <Tr className="fs-5 fs-lg-4">
                        <Th>ID</Th>
                        <Th>Category</Th>
                        <Th>Company</Th>
                        <Th>Monitor Field</Th>
                        <Th>Minimum Limit</Th>
                        <Th>Maximum Limit</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(item => (
                        <Tr key={item.id}>
                            <Td>{item.id}</Td>
                            <Td>{item.category_name}</Td>
                            <Td>{item.company_name}</Td>
                            <Td>{item.monitor_field}</Td>
                            <Td>{item.maximum_limit}</Td>
                            <Td>{item.minimum_limit}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            )}
        </div>
    );
}

export default Favourite;
