import {useSelector} from "react-redux";
import {useState} from "react";
function Selectors (){

    const [subscriptionData, setSubscriptionData] = useState('');
    const isManager = useSelector((state) => state.manager.value);
    const [tableData, setTableData] = useState('');

    return {
        subscriptionData, setSubscriptionData, isManager, tableData, setTableData

    }
}
export default Selectors;