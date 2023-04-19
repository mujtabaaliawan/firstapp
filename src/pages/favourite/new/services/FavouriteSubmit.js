import axios from "axios";
import {increase_favourite} from "../../reducer/favouriteSlice";


async function FavouriteSubmit (token, values, dispatch, setNavigationUrl) {

    let favouriteUrl = 'http://127.0.0.1:8000/favourite';
    let companyIDUrl = 'http://127.0.0.1:8000/name-id-search';
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    };

    let companyIDData = {
        "company_name": values.company_name
    }

    let companyIDResponse = await axios.post(companyIDUrl, companyIDData, {headers: headers})
    let companyID = companyIDResponse.data.id

    let data = {
        'company_id': companyID,
        'monitor_field': values.field,
        'maximum_limit': values.maximumLimit,
        'minimum_limit': values.minimumLimit,
    }

    let response = await axios.post(favouriteUrl, data, {headers: headers})

    if (response.status === 201) {
        dispatch(increase_favourite);
        setNavigationUrl('/favouritelist');
    }
}

export default FavouriteSubmit;
