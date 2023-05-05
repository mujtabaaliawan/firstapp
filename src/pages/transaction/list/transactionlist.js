import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../../../hooks/documentname";
import TransactionDataUpdate from "./hooks/UpdateData";
import TransactionTable from "./components/displayTable";
import UserSelectors from "../../selectors/userSelectors";
import Selectors from "../selectors/selectors";

function Transaction(){
    let {token, isActiveSub, isTrialSub} = UserSelectors();
    let {transaction_state, transactionData, setTransactionData} = Selectors();


    useDocumentName('New Transaction');

    TransactionDataUpdate(token, setTransactionData, transaction_state);

    return (
        <div>
            { (!isActiveSub && !isTrialSub) ? (<></>) :(
                <TransactionTable data={transactionData} />

            )}
        </div>
    );
}

export default Transaction;
