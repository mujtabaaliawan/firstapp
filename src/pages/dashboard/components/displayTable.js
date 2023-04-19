import 'rsuite/dist/rsuite.min.css';
import { Table } from 'rsuite';
import React from "react";
import Button from 'rsuite/Button';
import FollowClick from "../services/FollowButtonClick";
import UnFollowClick from "../services/UnfollowButtonClick";

function DashboardTable(props){

    let data = props.data;
    let token = props.token;
    let addFollow = props.addFollow;
    let setAddFollow = props.setAddFollow;
    const { Column, HeaderCell, Cell } = Table;


    return (
        <Table virtualized height={400} data={data} defaultSortType={'asc'}
               sortColumn={'id'}>
            <Column width={100} align="center" fixed>
                <HeaderCell >Id</HeaderCell>
                <Cell dataKey="id" />
            </Column>

            <Column width={100}>
                <HeaderCell>Trader</HeaderCell>
                <Cell dataKey="trader_name" />
            </Column>

            <Column width={100}>
                <HeaderCell>Nature</HeaderCell>
                <Cell dataKey="nature" />
            </Column>

            <Column width={100}>
        <HeaderCell>Volume</HeaderCell>
        <Cell dataKey="volume_transacted" />
      </Column>

            <Column width={200}>
        <HeaderCell>Date Time</HeaderCell>
        <Cell dataKey="date_time" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>Company <code>flexGrow={1}</code></HeaderCell>
        <Cell dataKey="company_name" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell
        >Category <code>flexGrow={2}</code></HeaderCell>
        <Cell dataKey="category_name" />
      </Column>

       <Column width={100}>
        <HeaderCell>Current</HeaderCell>
        <Cell dataKey="current" />
      </Column>

      <Column width={100}>
        <HeaderCell>Open</HeaderCell>
        <Cell dataKey="open" />
      </Column>

      <Column width={100}>
        <HeaderCell >High</HeaderCell>
        <Cell dataKey="high" />
      </Column>

      <Column width={100}>
        <HeaderCell >Low</HeaderCell>
        <Cell dataKey="low" />
      </Column>

      <Column width={100}>
        <HeaderCell >LDCP</HeaderCell>
        <Cell dataKey="ldcp" />
      </Column>

      <Column width={100}>
        <HeaderCell >Change</HeaderCell>
        <Cell dataKey="change" />
      </Column>

            <Column width={200}>
        <HeaderCell>Action</HeaderCell>
                <Cell>
    {rowData =>
      (rowData.follow_status === false && rowData.own_status === false)
        ? <Button color={'blue'} appearance={'primary'} size={'sm'}
                  onClick={() => FollowClick(token, rowData.trader_id, setAddFollow, addFollow)}>Follow</Button>
        : (rowData.follow_status === true && rowData.own_status === false)
          ? <Button color={'blue'} appearance={'primary'} size={'sm'}
                    onClick={() => UnFollowClick(token, rowData.trader_id, setAddFollow, addFollow)}>Unfollow</Button>
          : null
    }
                </Cell>
      </Column>
    </Table>
    )
}

export default DashboardTable;