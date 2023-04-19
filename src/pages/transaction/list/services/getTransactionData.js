import axios from "axios";

async function TransactionData(token, setTransactionData){

        const transactionListUrl = 'http://127.0.0.1:8000/transaction';
        const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }

        let transactionDataResponse = await axios.get(transactionListUrl, { headers: headers})
        setTransactionData(transactionDataResponse.data);
    }

export default TransactionData;