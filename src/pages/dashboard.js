import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";
import Button from "react-bootstrap/Button";


const Dashboard = () => {
    const token = useSelector((state) => state.token.value)
    const transaction_state = useSelector((state) => state.transaction.value);
    const [data, setData] = useState([]);
    const [field, setField] = useState(['id']);
    const [addFollow, setAddFollow] = useState(0);
    const isManager = useSelector((state) => state.manager.value);
    const isActiveSub = useSelector((state) => state.activeSub.value);
    const isTrialSub = useSelector((state) => state.trialSub.value);

    function handleFollowClick(followID) {
        let followUrl = 'http://127.0.0.1:8000/follow';
        fetch(followUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({"follow": followID})
        })
        setAddFollow(addFollow+1);
    }

    function handleUnfollowClick(unFollowID) {
        let followUrl = 'http://127.0.0.1:8000/unfollow';
        fetch(followUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({"unfollow": unFollowID})
        })
        setAddFollow(addFollow-1);
    }


    function handleHeaderClick(headerName) {
        if (field === headerName) {
            setField(`-${field}`);
        }
        else {
            setField(headerName);
        }
    }

    useEffect(() => {
        const url = `http://127.0.0.1:8000/all-transaction?field=${field}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(response => response.json())
            .then(data => setData(data))
    }, [transaction_state, field, token, addFollow]);



  return (
      <div>
          { (isActiveSub || isTrialSub || isManager) && (
      <div>
        <h1 style={{
            fontSize: "50px",
            fontFamily: 'Times New Roman',
            textAlign: 'center',
            color: "red",
            marginTop: "50px"
        }}>Dashboard</h1>

            <Table style={{
                            marginTop: "30px"
                        }}>
                <Thead>
                    <Tr className="fs-5 fs-lg-4 text-center">
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} id={'dashboard-id'} onClick={() => handleHeaderClick('id')}>ID</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} id={'dashboard-name'}
                            onClick={() => handleHeaderClick('trader__user__first_name')}
                        >Trader Name</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} id={'dashboard-nature'}
                            onClick={() => handleHeaderClick('nature')}>Nature</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} id={'dashboard-volume'}
                            onClick={() => handleHeaderClick('volume_transacted')}>Volume</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} id={'dashboard-datetime'}
                            onClick={() => handleHeaderClick('date_time')}>Date Time</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} id={'dashboard-category'}
                            onClick={() => handleHeaderClick('stock_detail__company__category__name')}>
                            Category</Th>
                        <Th style={{
                            cursor: 'pointer',
                            color: '#0d6efd',
                        }} id={'dashboard-company'}
                            onClick={() => handleHeaderClick('stock_detail__company__name')}
                        >Company</Th>
                        <Th id={'current'}>Current</Th>
                        <Th id={'open'}>Open</Th>
                        <Th id={'high'}>High</Th>
                        <Th id={'low'}>Low</Th>
                        <Th id={'change'}>Change</Th>
                        <Th id={'ldcp'}>LDCP</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(item => (
                        <Tr key={item.id} className={'text-center'}>
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
                            <div> {
                                item.follow_status === true ? (
                                <Td>
                                    <Button onClick={() => handleUnfollowClick(item.trader_id)}>Unfollow</Button>
                                </Td>
                            ) : item.own_status === true ? <></> : (
                                <Td>
                                    <Button onClick={() => handleFollowClick(item.trader_id)}>Follow</Button>
                                </Td>
                            )
                            }
                            </div>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
      </div>
          )}
      </div>
  );
}
export default Dashboard;