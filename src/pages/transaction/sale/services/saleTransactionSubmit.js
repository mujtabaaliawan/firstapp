import axios from "axios";
import {increase_transaction} from "../../reducer/transactionSlice";


async function SaleTransactionSubmit (token, stockID, values, selectedStock, dispatch, setNavigationUrl) {

    let transactionUrl = 'http://127.0.0.1:8000/transaction';

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    };

    let data = {
        'stock_detail_id': stockID,
        'nature': "sale",
        'volume_transacted': values.volume,
        'sale_stock': selectedStock,
    }

    let response = await axios.post(transactionUrl, data, {headers: headers})

    if (response.status === 201) {
        dispatch(increase_transaction());
        setNavigationUrl('/transactionlist');
    }
}

export default SaleTransactionSubmit;
