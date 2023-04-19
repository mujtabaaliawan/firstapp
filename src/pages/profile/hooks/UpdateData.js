import {useEffect} from "react";
import ProfileData from "../services/getProfileData"

function ProfileDataUpdate(token, setProfileData, setTraderPictureURL){

    useEffect(() => {
        ProfileData(token, setProfileData, setTraderPictureURL)
    }, [token, setProfileData, setTraderPictureURL])
}

export default ProfileDataUpdate;