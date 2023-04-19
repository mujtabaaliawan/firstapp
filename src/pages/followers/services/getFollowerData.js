import axios from "axios";

async function FollowerData(token, setFollowerData){

        const followerListUrl = 'http://127.0.0.1:8000/follower';
        const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }

        let followerDataResponse = await axios.get(followerListUrl, { headers: headers})
        setFollowerData(followerDataResponse.data);
    }

export default FollowerData;