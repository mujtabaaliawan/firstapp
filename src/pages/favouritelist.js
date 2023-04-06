import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../hooks/documentname";
import Shepherd from "shepherd.js";
import FavouriteListSteps from "../tour/favouriteList";

function Favourite(){
    const token = useSelector((state) => state.token.value);
    const dispatch = useDispatch();
    const favourite_state = useSelector((state) => state.favourite.value);
    const [data, setData] = useState([]);
    const isSubscribed = useSelector((state) => state.subscription.value);
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

    function handleTourStart(tour){
      if (!tourStarted){
        setTourStarted(true);
        tour.start();
      }
    }

    useDocumentName('Favourite List', setTourReady);

    if (tourPermission && tourReady) {
        FavouriteListSteps(tour, token, dispatch);
        handleTourStart(tour);
    }

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
