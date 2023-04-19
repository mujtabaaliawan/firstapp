import axios from "axios";

async function FollowingData(token, setFollowingData){

        const followerListUrl = 'http://127.0.0.1:8000/following';
        const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }

        let followingDataResponse = await axios.get(followerListUrl, { headers: headers})
        setFollowingData(followingDataResponse.data);
    }

export default FollowingData;