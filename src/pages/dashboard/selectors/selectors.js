import {useSelector} from "react-redux";
import {useState} from "react";


function Selectors() {

    const transaction_state = useSelector((state) => state.transaction.value);
    const [transactionData, setTransactionData] = useState([]);
    const [addFollow, setAddFollow] = useState(0);

    return {
        transaction_state, transactionData, setTransactionData, addFollow, setAddFollow
    }
}

export default Selectors;