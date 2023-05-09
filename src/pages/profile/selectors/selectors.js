import {useState} from "react";

function Selectors (){
    const [profileData, setProfileData] = useState([]);
    const [traderPictureURL, setTraderPictureURL] = useState('');
    const [navigationUrl, setNavigationUrl] = useState('');
    return {
        profileData, setProfileData, traderPictureURL, setTraderPictureURL,
        navigationUrl, setNavigationUrl
    }
}
export default Selectors;