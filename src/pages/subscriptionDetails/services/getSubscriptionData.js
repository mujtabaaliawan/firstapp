import axios from "axios";

async function SubscriptionData(token, setSubscriptionData){

        const Url = 'http://127.0.0.1:8000/subscriptions';
        const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }

        let response = await axios.get(Url, { headers: headers})
        setSubscriptionData(response.data);
    }

export default SubscriptionData;