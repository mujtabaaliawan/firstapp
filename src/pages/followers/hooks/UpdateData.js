import {useEffect} from "react";
import FollowerData from "../services/getFollowerData"

function FollowerDataUpdate(token, setFollowerData){

    useEffect(() => {
        FollowerData(token, setFollowerData)
    }, [token, setFollowerData])
}

export default FollowerDataUpdate;