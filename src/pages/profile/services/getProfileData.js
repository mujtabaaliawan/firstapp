import axios from "axios";

async function ProfileData(token, setProfileData, setTraderPictureURL){

        const profileListUrl = 'http://127.0.0.1:8000/trader-profile';
        const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }

        let ProfileDataResponse = await axios.get(profileListUrl, { headers: headers})
        setProfileData(ProfileDataResponse.data);
        if (ProfileDataResponse.data.hasOwnProperty("picture")) {
                setTraderPictureURL(`http://127.0.0.1:8000/${ProfileDataResponse.data["picture"]}`);
        }
        else {
                setTraderPictureURL("https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png")
        }
    }

export default ProfileData;