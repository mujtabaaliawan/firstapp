import axios from "axios";

async function FavouriteData(token, setFavouriteData){

        const favouriteListUrl = 'http://127.0.0.1:8000/favourite';
        const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }

        let favouriteDataResponse = await axios.get(favouriteListUrl, { headers: headers})
        setFavouriteData(favouriteDataResponse.data);
    }

export default FavouriteData;