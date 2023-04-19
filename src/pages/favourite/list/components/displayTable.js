import 'rsuite/dist/rsuite.min.css';
import { Table } from 'rsuite';

function FavouriteTable(props){

    let data = props.data;
    const { Column, HeaderCell, Cell } = Table;


    return (
        <Table virtualized height={400} data={data} defaultSortType={'asc'}
               sortColumn={'id'}>
            <Column width={100} align="center" fixed>
                <HeaderCell >Id</HeaderCell>
                <Cell dataKey="id" />
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


      <Column width={200}>
        <HeaderCell>Monitor Field</HeaderCell>
        <Cell dataKey="monitor_field" />
      </Column>

      <Column width={200}>
        <HeaderCell>Minimum Limit</HeaderCell>
        <Cell dataKey="minimum_limit" />
      </Column>

      <Column width={200}>
        <HeaderCell >Maximum Limit</HeaderCell>
        <Cell dataKey="maximum_limit" />
      </Column>

    </Table>
    )

}

export default FavouriteTable;