import {useSelector} from "react-redux";
import {useState} from "react";

function Selectors (){

    const [portfolioData, setPortfolioData] = useState([]);
    const [selectedFollowingIds, setSelectedFollowingIds] = useState({});
    const transaction_state = useSelector((state) => state.transaction.value);

    return {
        portfolioData, setPortfolioData, selectedFollowingIds, setSelectedFollowingIds, transaction_state
    }
}
export default Selectors;