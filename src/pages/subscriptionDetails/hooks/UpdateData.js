import {useEffect} from "react";
import SubscriptionData from "../services/getSubscriptionData"

function SubscriptionDataUpdate(token, setData){

    useEffect(() => {
        SubscriptionData(token, setData)
    }, [token, setData])
}

export default SubscriptionDataUpdate;