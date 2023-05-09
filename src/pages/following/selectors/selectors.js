import {useState} from "react";

function Selectors (){
    const [followingData, setFollowingData] = useState([]);
    return {
        followingData, setFollowingData
    }
}
export default Selectors;