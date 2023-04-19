import {useState} from "react";

function Selectors (){
    const [followerData, setFollowerData] = useState([]);
    return {
        followerData, setFollowerData
    }
}
export default Selectors;