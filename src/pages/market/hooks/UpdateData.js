import {useEffect} from "react";
import LatestMarketData from "../services/MarketData";

function useMarketUpdate(token, field, setMarketData, setMarketDate ){

    useEffect(() => {
        LatestMarketData(token, field, setMarketData, setMarketDate)
    }, [field, token, setMarketData, setMarketDate])
}

export default useMarketUpdate;