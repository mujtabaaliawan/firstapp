import {Table} from "rsuite";
import React from "react";

function TableDataDisplay(props){

    let data = props.data;
    const { Column, HeaderCell, Cell } = Table;

    function displayDate(stamp) {
        const date = new Date(stamp * 1000);
        return date.toLocaleString('en-US', {
            timeZone: 'UTC',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }

    return (
        <Table virtualized height={400} data={data} defaultSortType={'asc'}
               sortColumn={'id'}>
            <Column width={100} align="center" fixed>
                <HeaderCell >Id</HeaderCell>
                <Cell dataKey="id" />
            </Column>

            <Column width={100}>
                <HeaderCell>Subscription</HeaderCell>
                <Cell dataKey="metadata.subscription_name" />
            </Column>

            <Column width={200}>
                <HeaderCell>Start Date</HeaderCell>
                <Cell dataKey="current_period_start">{rowData => displayDate(rowData.current_period_start)}</Cell>
            </Column>

            <Column width={200}>
                <HeaderCell>End Date</HeaderCell>
                <Cell dataKey="current_period_end">{rowData =>  displayDate(rowData.current_period_end)}</Cell>
            </Column>

            <Column width={200}>
        <HeaderCell>Trader Name</HeaderCell>
        <Cell dataKey="metadata.customer_name" />
      </Column>

            <Column width={200}>
        <HeaderCell>Trader Email</HeaderCell>
        <Cell dataKey="metadata.customer_email" />
      </Column>

    </Table>
    )
}

export default TableDataDisplay;