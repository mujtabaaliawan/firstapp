import {useEffect} from "react";
import FollowingData from "../services/getFollowingData"

function FollowingDataUpdate(token, setFollowingData){

    useEffect(() => {
        FollowingData(token, setFollowingData)
    }, [token, setFollowingData])
}

export default FollowingDataUpdate;