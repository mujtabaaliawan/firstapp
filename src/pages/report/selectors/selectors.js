import {useSelector} from "react-redux";
import {useState} from "react";
function Selectors (){

    const transaction_state = useSelector((state) => state.transaction.value);
    const [data, setData] = useState([]);
    const isManager = useSelector((state) => state.manager.value);

    return {
        transaction_state, data, setData, isManager

    }
}
export default Selectors;