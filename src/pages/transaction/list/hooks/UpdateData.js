import {useEffect} from "react";
import TransactionData from "../services/getTransactionData"

function DashboardDataUpdate(token, setTransactionData, transaction_state){

    useEffect(() => {
        TransactionData(token, setTransactionData)
    }, [token, transaction_state, setTransactionData])
}

export default DashboardDataUpdate;