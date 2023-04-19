import axios from "axios";
import {increase_transaction} from "../../reducer/transactionSlice";


async function TransactionSubmit (token, stockID, values, dispatch, setNavigationUrl) {

    let transactionUrl = 'http://127.0.0.1:8000/transaction';

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    };

    let data = {
        'stock_detail_id': stockID,
        'nature': "purchase",
        'volume_transacted': values.volume,
    }

    let response = await axios.post(transactionUrl, data, {headers: headers})

    if (response.status === 201) {
        dispatch(increase_transaction());
        setNavigationUrl('/transactionlist');
    }
}

export default TransactionSubmit;
