import 'rsuite/dist/rsuite.min.css';
import { Table } from 'rsuite';

function DisplayMarket(props){

    let data = props.data;
    const { Column, HeaderCell, Cell } = Table;


    return (
        <Table virtualized height={400} data={data} defaultSortType={'asc'}
               sortColumn={'id'}>
            <Column width={50} align="center" fixed>
                <HeaderCell >Id</HeaderCell>
                <Cell dataKey="id" />
            </Column>

      <Column width={260}>
        <HeaderCell>Company</HeaderCell>
        <Cell dataKey="company_name" />
      </Column>

      <Column width={255}>
        <HeaderCell
        >Category</HeaderCell>
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

      <Column width={100}>
        <HeaderCell>Volume</HeaderCell>
        <Cell dataKey="volume" />
      </Column>

    </Table>
    )

}

export default DisplayMarket;