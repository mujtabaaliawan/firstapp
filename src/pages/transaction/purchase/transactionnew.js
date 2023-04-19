import React from 'react';
import useDocumentName from "../../../hooks/documentname";
import GetCompanyNames from "./hooks/getCompanyNames";
import Navigation from "../../favourite/new/hooks/navigation";
import TransactionForm from "./components/TransactionForm";
import UserSelectors from "../../selectors/userSelectors";
import GlobalSelectors from "../../selectors/globalSelectors";
import Selectors from "./selectors/selectors";

function TransactionNew() {

    let {token, isActiveSub, isTrialSub} = UserSelectors();
    let {dispatch, navigate} = GlobalSelectors();
    let {navigationUrl, companies, setCompanies, currentPrice, setCurrentPrice, setStockID,
        availableStock, setAvailableStock, formik} = Selectors(token, dispatch);

    useDocumentName('New Transaction');
    GetCompanyNames(token, setCompanies);
    Navigation(navigationUrl, navigate);


    return (
        <div>
            { (!isActiveSub && !isTrialSub) ? (<></>) : (

                <TransactionForm formik={formik} companies={companies} setStockID={setStockID}
                 setCurrentPrice={setCurrentPrice} setAvailableStock={setAvailableStock}
                 availableStock={availableStock} currentPrice={currentPrice} token={token} />

            )}
        </div>
    );
}

export default TransactionNew;