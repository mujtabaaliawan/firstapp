import React from 'react';
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";
import Button from "react-bootstrap/Button";
import {set_favourite_company} from "../../features/favourite-company/favouriteCompanySlice";
import {set_transaction_company} from "../../features/transaction-company/transactionCompanySlice";

function LoadMarketData (props) {

    let data = props.data;
    let setField = props.setField;
    let dispatch = props.dispatch;
    let navigate = props.navigate;

    function handleFavouriteClick(company_name) {
        dispatch(set_favourite_company(company_name));
        navigate("/custom-favourite");
    }

    function handleTransactionClick(company_name) {
        dispatch(set_transaction_company(company_name));
        navigate("/custom-transaction");
    }

    function handleFieldChange(field){
        setField(field);
    }

    return (
        <Table>
      <Thead>
        <Tr className="fs-5 fs-lg-4 text-center">
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleFieldChange('id')} id={'market-stock-id'}>Stock ID</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleFieldChange('company__category__name')} id={'market-category'}
          >Category</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleFieldChange('company__name')} id={'market-company'}>Company</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleFieldChange('current')} id={'market-current'}>Current</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleFieldChange('open')} id={'market-open'}>Open</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleFieldChange('high')} id={'market-high'}>High</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleFieldChange('low')} id={'market-low'}>Low</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleFieldChange('ldcp')} id={'market-ldcp'}>LDCP</Th>
          <Th  style={{
            cursor: 'pointer',
            color: '#0d6efd',
            }} onClick={() => handleFieldChange('volume')} id={'market-volume'}>Volume</Th>
            <Th colSpan = "2" style={{
                textAlign: 'center',
                color: 'red',
            }} id={'market-actions'}>Actions</Th>
        </Tr>
      </Thead>
        <Tbody>
        {data.map(item => (
            <Tr key={`table1_${item.id}`} className={'text-center'}>
                <Td>{item.id}</Td>
                <Td>{item.category_name}</Td>
                <Td>{item.company_name}</Td>
                <Td>{item.current}</Td>
                <Td>{item.open}</Td>
                <Td>{item.high}</Td>
                <Td>{item.low}</Td>
                <Td>{item.ldcp}</Td>
                <Td>{item.volume}</Td>
                <Td><Button onClick={() => handleFavouriteClick(item.company_name)}
                >Mark Favourite</Button></Td>
                <Td><Button onClick={() => handleTransactionClick(item.company_name)}
                >Purchase Stocks</Button></Td>
          </Tr>
        ))}
    </Tbody>
        </Table>
            )
    
}

export default React.memo(LoadMarketData);
