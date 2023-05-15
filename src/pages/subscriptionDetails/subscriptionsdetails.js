import React from 'react';
import "../subscriptions/styles/subscriptions.css";
import { Container} from 'react-bootstrap';
import useDocumentName from "../../hooks/documentname";
import SubscriptionDataUpdate from "./hooks/UpdateData";
import SubscriptionMainData from "./components/mainDataDisplay";
import TableDataDisplay from "./components/tableDataDisplay";
import UserSelectors from "../selectors/userSelectors";
import Selectors from "./selectors/selectors";

function SubscriptionDetails() {
    let {token} = UserSelectors();
    let {subscriptionData, setSubscriptionData, isManager, tableData, setTableData} = Selectors();

    useDocumentName('Subscription Details');
    SubscriptionDataUpdate(token, setSubscriptionData);



    return (
        <div>
            { (!isManager) ? (<></>) : (
                <div>
            <Container className="mt-5">
                <SubscriptionMainData data={subscriptionData} setTableData={setTableData} />
                <div>
                    { tableData && (
                        <TableDataDisplay data={tableData} />
                    )}
                </div>
                </Container>
            </div>
                )}
        </div>
    );
}
export default SubscriptionDetails;