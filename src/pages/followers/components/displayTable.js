import 'rsuite/dist/rsuite.min.css';
import { Table } from 'rsuite';
import React from "react";

function FollowerTable(props){

    let data = props.data;
    const { Column, HeaderCell, Cell } = Table;


    return (
        <Table virtualized height={400} data={data} defaultSortType={'asc'}
               sortColumn={'id'}>
            <Column width={100} align="center" fixed>
                <HeaderCell >ID</HeaderCell>
                <Cell dataKey="id" />
            </Column>

            <Column width={100}>
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="name" />
            </Column>

            <Column width={100}>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
            </Column>

            <Column width={100}>
        <HeaderCell>Mobile Number</HeaderCell>
        <Cell dataKey="mobile_number" />
      </Column>

        </Table>
    )
}

export default FollowerTable;