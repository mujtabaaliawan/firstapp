import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../hooks/documentname";

function Favourite(){
    const token = useSelector((state) => state.token.value);
    const favourite_state = useSelector((state) => state.favourite.value);
    const [data, setData] = useState([]);
    const isActiveSub = useSelector((state) => state.activeSub.value);
    const isTrialSub = useSelector((state) => state.trialSub.value);


    useDocumentName('Favourite List');


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
            { (isActiveSub || isTrialSub) && (
            <Table>
                <Thead>
                    <Tr className="fs-5 fs-lg-4 text-center">
                        <Th id={'favourite-id'}>ID</Th>
                        <Th id={'favourite-category'}>Category</Th>
                        <Th id={'favourite-company'}>Company</Th>
                        <Th id={'favourite-monitor-field'}>Monitor Field</Th>
                        <Th id={'favourite-minimum-limit'}>Minimum Limit</Th>
                        <Th id={'favourite-maximum-limit'}>Maximum Limit</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(item => (
                        <Tr key={item.id} className={'text-center'}>
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
