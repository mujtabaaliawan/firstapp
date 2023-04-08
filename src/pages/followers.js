import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";
import useDocumentName from "../hooks/documentname";
import Shepherd from "shepherd.js";
import FollowerSteps from "../tour/follower";


const Followers = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token.value);
    const [data, setData] = useState([]);
    const isSubscribed = useSelector((state) => state.subscription.value);
    const tourPermission = useSelector((state) => state.tourMode.value);
    const [tourReady, setTourReady]  = useState(false);
    const [tourStarted, setTourStarted] = useState(false);
    const tour = new Shepherd.Tour({
        useModalOverlay: false,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark shepherd-theme-arrows',
            scrollTo: true
        }
    });

    useDocumentName('Followers', setTourReady);

    if (tourPermission && tourReady) {
        FollowerSteps(tour, token, dispatch)
        handleTourStart(tour)
    }

    function handleTourStart(tour){
        if (!tourStarted){
        setTourStarted(true);
        tour.start();
        }
    }

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
         { isSubscribed && (
      <div>
        <h1 style={{
            fontSize: "50px",
            fontFamily: 'Times New Roman',
            textAlign: 'center',
            color: "red",
            marginTop: "50px",
        }}>Followers</h1>

            <Table style={{
                            marginTop: "30px"
                        }}>
                <Thead>
                    <Tr className="fs-5 fs-lg-4 text-center">
                        <Th id={'follower-id'}>ID</Th>
                        <Th id={'follower-name'}>Name</Th>
                        <Th id={'follower-email'}>Email</Th>
                        <Th id={'follower-mobile'}>Mobile Number</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(item => (
                        <Tr key={item.id} className={'text-center'}>
                            <Td>{item.id}</Td>
                            <Td>{item.name}</Td>
                            <Td>{item.email}</Td>
                            <Td>{item.mobile_number}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
      </div>
         )}
     </div>
  );
}
export default Followers;