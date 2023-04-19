import 'rsuite/dist/rsuite.min.css';
import { Table } from 'rsuite';
import React from "react";

function TransactionTable(props){

    let data = props.data;
    const { Column, HeaderCell, Cell } = Table;

    return (
        <Table virtualized height={400} data={data} defaultSortType={'asc'}
               sortColumn={'id'}>
            <Column width={100} align="center" fixed>
                <HeaderCell >No.</HeaderCell>
                <Cell dataKey="count" />
            </Column>

            <Column width={100}>
                <HeaderCell>Nature</HeaderCell>
                <Cell dataKey="nature" />
            </Column>

            <Column width={100}>
        <HeaderCell>Volume</HeaderCell>
        <Cell dataKey="volume" />
      </Column>

            <Column width={200}>
        <HeaderCell>Date Time</HeaderCell>
        <Cell dataKey="date_time" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>Company <code>flexGrow={1}</code></HeaderCell>
        <Cell dataKey="company" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell
        >Category <code>flexGrow={2}</code></HeaderCell>
        <Cell dataKey="category" />
      </Column>

       <Column width={100}>
        <HeaderCell>Current</HeaderCell>
        <Cell dataKey="current" />
      </Column>
        </Table>
    )
}

export default TransactionTable;