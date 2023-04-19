import {loading_off} from "../../../reducers/loading/loadingSlice";
import {set_token} from "../../login/reducers/userSlice";
import {logged_in} from "../../login/reducers/userSlice";
import {set_trialSub} from "../../login/reducers/userSlice";
import {toast} from "react-toastify";
import axios from 'axios';

async function newTrader (values, dispatch, setNavigationURL) {

    const traderData = {
        "email": values.email,
        "password": values.password,
    };
    const traderNewUrl = 'http://127.0.0.1:8000/trader-new';
    const headers = {
        'Content-Type': 'application/json',
    }

    try {
        const response = await axios.post(traderNewUrl, traderData,
            {headers: headers})

        if (response.status === 201) {
            dispatch(loading_off());
            dispatch(set_token(response.data.token));
            dispatch(logged_in());
            dispatch(set_trialSub());
            setNavigationURL('/main');
        }
        else {
            dispatch(loading_off());
            toast.error(response.status);
        }
    }
    catch (error) {
        toast.error(error.message, {position: toast.POSITION.TOP_CENTER, autoClose: false});
        dispatch(loading_off());
    }
}

export default newTrader;