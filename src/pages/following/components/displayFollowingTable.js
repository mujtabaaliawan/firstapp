import 'rsuite/dist/rsuite.min.css';
import { Table } from 'rsuite';
import React from "react";
import CollaspedOutlineIcon from '@rsuite/icons/CollaspedOutline';
import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';
import Button from "rsuite/Button";
import TransactionTable from "./displayTransactionTable";

function FollowingTable(props){

    let data = props.data;
    const { Column, HeaderCell, Cell } = Table;
    const rowKey = 'id';
    const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
        <Cell {...props} style={{ padding: 5 }}>
            <Button
                color= "blue"
                appearance="primary"
                size={"md"}
                onClick={() => {
                    onChange(rowData);
                }}
                icon={
                expandedRowKeys.some(key => key === rowData[rowKey]) ? (
                    <CollaspedOutlineIcon />
                ) : (
                    <ExpandOutlineIcon />
                )
            }
            >Click</Button>
        </Cell>
    );

const renderRowExpanded = rowData => {
  return (
    <div>
        <TransactionTable data={rowData.transactions} />
    </div>
  );
};

  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);

  const handleExpanded = (rowData, dataKey) => {
      let open = false;
      const nextExpandedRowKeys = [];

      expandedRowKeys.forEach(key => {
          if (key === rowData[rowKey]) {
              open = true;
          } else {
              nextExpandedRowKeys.push(key);
          }
      });

      if (!open) {
          nextExpandedRowKeys.push(rowData[rowKey]);
      }

      setExpandedRowKeys(nextExpandedRowKeys);
  };

    return (
        <Table shouldUpdateScroll={false} virtualized height={400} data={data}
               rowKey={rowKey} expandedRowKeys={expandedRowKeys} renderRowExpanded={renderRowExpanded}>

            <Column width={100} align="center" fixed>
                <HeaderCell >ID</HeaderCell>
                <Cell dataKey="id" />
            </Column>

            <Column flexGrow={2}>
                <HeaderCell>Name <code>flexGrow={2}</code></HeaderCell>
                <Cell dataKey="name" />
            </Column>

            <Column flexGrow={1}>
                <HeaderCell>Email <code>flexGrow={1}</code></HeaderCell>
                <Cell dataKey="email" />
            </Column>

            <Column width={200}>
        <HeaderCell>Mobile Number</HeaderCell>
        <Cell dataKey="mobile_number" />
      </Column>

            <Column width={200} align="center">
        <HeaderCell>Transactions</HeaderCell>
        <ExpandCell dataKey="transaction" expandedRowKeys={expandedRowKeys} onChange={handleExpanded} />
      </Column>
        </Table>
    )
}

export default FollowingTable;