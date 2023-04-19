import React from 'react';
import useDocumentName from "../../../hooks/documentname";
import GetCompanyNames from "./hooks/getCompanyNames";
import Navigation from "../purchase/hooks/navigation";
import TransactionSaleForm from "./components/TransactionSaleForm";
import UserSelectors from "../../selectors/userSelectors";
import GlobalSelectors from "../../selectors/globalSelectors";
import Selectors from "./selectors/selectors";

function TransactionNew() {

    let {token, isActiveSub, isTrialSub} = UserSelectors();
    let {dispatch, navigate} = GlobalSelectors();
    let {setStockID, navigationUrl, saleCompanies, setSaleCompanies,
        currentPrice, setCurrentPrice, traderStock, setTraderStock, setSelectedStock,
        formik} = Selectors(token, dispatch)

    useDocumentName('Transaction Sale');
    GetCompanyNames(token, setSaleCompanies);
    Navigation(navigationUrl, navigate);


    return (
        <div>
            { (!isActiveSub && !isTrialSub) ? (<></>) : (
        <TransactionSaleForm formik={formik} companies={saleCompanies} currentPrice={currentPrice}
         traderStock={traderStock} token={token} setStockID={setStockID} setCurrentPrice={setCurrentPrice}
         setTraderStock={setTraderStock} setSelectedStock={setSelectedStock}
        />
            )}
        </div>
    );
}

export default TransactionNew;