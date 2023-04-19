import axios from "axios";

async function UnFollowClick(token, unFollowID, setAddFollow, addFollow) {

    let unFollowUrl = 'http://127.0.0.1:8000/unfollow';
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    let unFollowData = {
        "unfollow": unFollowID
    }
    let response = await axios.post(unFollowUrl, unFollowData, {headers: headers})
    if(response.status === 200) {
        setAddFollow(addFollow - 1);
    }
}

export default UnFollowClick;