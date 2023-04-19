import {useSelector} from "react-redux";
import {useState} from "react";

function Selectors (){
    const isManager = useSelector((state) => state.manager.value);
    const [followingData, setFollowingData] = useState([]);
    return {
        isManager, followingData, setFollowingData
    }
}
export default Selectors;