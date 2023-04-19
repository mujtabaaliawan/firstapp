import {Container} from "react-bootstrap";
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";
import React from "react";
import Button from "react-bootstrap/Button";
import TraderDataTable from "./TraderDataTable";
import TraderNoTransTable from "./TraderNoTransTable";

function PortfolioTable(props){

    let data = props.data;
    let selectedFollowingIds = props.selectedFollowingIds;
    let setSelectedFollowingIds = props.setSelectedFollowingIds;

    const handleToggleDetails = (id) => {
        setSelectedFollowingIds((prevState) => {
            const updatedState = {...prevState};
            updatedState[id] = !updatedState[id];
            return updatedState;
        });
    };

    return (
        <div>
            { data && data.companies ? (
            <Container className="mt-5">
                <TraderDataTable data={data} />
                <Table style={{
                            marginTop: "30px"
                        }}>
                <Thead>
                    <Tr className="fs-5 fs-lg-4 text-center">
                        <Th id={'company-name'}>Company Name</Th>
                        <Th id={'company-stocks'}>Company Stocks</Th>
                        <Th id={'company-current-investment'}>Current Investment</Th>
                        <Th id={'company-expected-earning'}>Expected Earning</Th>
                        <Th id={'company-lifetime-investment'}>Lifetime Investment</Th>
                        <Th id={'company-lifetime-earning'}>Lifetime Earning</Th>
                        <Th id={'company-stock-details'}>Stock Details</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.entries(data.companies).map(([id, company]) => {
                        const isSelected = selectedFollowingIds[id] === true;
                        return (
                        <React.Fragment key={id}>
                            <Tr className={'text-center'}>
                                <Td>{company.company_name}</Td>
                                <Td>{company.total_company_stocks}</Td>
                                <Td>{company.current_investment_in_company}</Td>
                                <Td>{company.company_total_expected_profit_loss}</Td>
                                <Td>{company.lifetime_investment_in_company}</Td>
                                <Td>{company.company_lifetime_net_earning}</Td>
                                <Td><Button id={'button-company-stock-detail'}
                                            onClick={() => handleToggleDetails(id)}>
                                    {isSelected ? "Hide Stocks" : "Show Stocks"}
                                </Button></Td>
                            </Tr>
                            {isSelected && (
                                <tr className='mt-5'>
                                    <td colSpan="7">
                                        <div style={{ fontSize: "30px", fontFamily: 'Times New Roman',
                                            textAlign: 'center', color: "blue",
                                        }}>Stock Details
                                        </div>
                                        <Table className="mb-5 mt-3">
                                            <Thead>
                                                <Tr className={'text-center'}>
                                                    <Th id={'stock'}>Stocks</Th>
                                                    <Th id={'purchase-price'}>Purchase Price</Th>
                                                    <Th id={'purchase-date'}>Date of Purchase</Th>
                                                    <Th id={'expected-sale-price'}>Expected Sale Price</Th>
                                                    <Th id={'expected-earning'}>Expected Earning</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {company.stocks_data.map((stock, id) => (
                                                    <Tr key={id} className={'text-center'}>
                                                        <Td>{stock.stocks}</Td>
                                                        <Td>{stock.current_price}</Td>
                                                        <Td>{stock.date_time}</Td>
                                                        <Td>{stock.sale_price}</Td>
                                                        <Td>{stock.expected_profit_loss}</Td>
                                                    </Tr>
                                                ))}
                                            </Tbody>
                                        </Table>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    )})}
                </Tbody>
            </Table>
            </Container>
                ) : (
                    <TraderNoTransTable data={data} />
            )
            }
        </div>
    )
}
export default PortfolioTable;