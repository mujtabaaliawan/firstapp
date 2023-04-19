import axios from "axios";

async function FollowClick(token, followID, setAddFollow, addFollow) {

    let followUrl = 'http://127.0.0.1:8000/follow';
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    let followData = {
        "follow": followID
    }
    let response = await axios.post(followUrl, followData, {headers: headers})

    if(response.status === 200) {
        setAddFollow(addFollow + 1);
    }
}

export default FollowClick;