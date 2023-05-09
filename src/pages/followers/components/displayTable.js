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

            <Column flexGrow={3}>
                <HeaderCell>Name <code>flexGrow={3}</code></HeaderCell>
                <Cell dataKey="name" />
            </Column>

            <Column flexGrow={1}>
                <HeaderCell>Email <code>flexGrow={1}</code></HeaderCell>
                <Cell dataKey="email" />
            </Column>

            <Column flexGrow={2}>
        <HeaderCell>Mobile Number <code>flexGrow={2}</code></HeaderCell>
        <Cell dataKey="mobile_number" />
      </Column>

        </Table>
    )
}

export default FollowerTable;