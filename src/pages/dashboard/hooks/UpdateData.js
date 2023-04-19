import {useEffect} from "react";
import TransactionData from "../services/getTransactionData"

function TransactionDataUpdate(token, setTransactionData, transaction_state, addFollow){

    useEffect(() => {
        TransactionData(token, setTransactionData)
    }, [token, transaction_state, setTransactionData, addFollow])
}

export default TransactionDataUpdate;