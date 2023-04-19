import {useSelector} from "react-redux";
import {useState} from "react";
function Selectors (){
    const [profileData, setProfileData] = useState([]);
    const [traderPictureURL, setTraderPictureURL] = useState('');
    const isManager = useSelector((state) => state.manager.value);
    return {
        profileData, setProfileData, traderPictureURL, setTraderPictureURL, isManager
    }
}
export default Selectors;