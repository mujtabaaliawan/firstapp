import {useEffect} from "react";
import PortfolioData from "../services/getPortFolioData"

function PortfolioDataUpdate(token, setPortfolioData, transaction_state){

    useEffect(() => {
        PortfolioData(token, setPortfolioData)
    }, [token, setPortfolioData, transaction_state])
}

export default PortfolioDataUpdate;