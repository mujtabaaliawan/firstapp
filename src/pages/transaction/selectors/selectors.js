import {useSelector} from "react-redux";
import {useState} from "react";
function Selectors (){
    const transaction_state = useSelector((state) => state.transaction.value);
    const [transactionData, setTransactionData] = useState([]);
    return {
        transaction_state, transactionData, setTransactionData
    }
}
export default Selectors;