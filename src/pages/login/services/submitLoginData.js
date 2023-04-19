import axios from "axios";
import {loading_off} from "../../../reducers/loading/loadingSlice";
import {set_token} from "../reducers/userSlice";
import {set_tourMode} from "../reducers/userSlice";
import {logged_in} from "../reducers/userSlice";
import {set_manager} from "../reducers/userSlice";
import {set_activeSub} from "../reducers/userSlice";
import {set_trialSub} from "../reducers/userSlice";

async function LoginData(values, dispatch, setNavigationUrl){

    let loginUrl = 'http://127.0.0.1:8000/credentials';
    let checkSubUrl = "http://127.0.0.1:8000/check-subscription";

    const headers = {
                'Content-Type': 'application/json',
        }
    const loginData = {
        "email": values.email,
        "password": values.password,
    };

    let loginResponse = await axios.post(loginUrl, loginData, { headers: headers})

    console.log(loginResponse.status);

    if (loginResponse.status === 200) {
        let newHeaders = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + loginResponse.data.token
        };
        dispatch(set_token(loginResponse.data.token));
        dispatch(set_tourMode(loginResponse.data.tour_mode));
        dispatch(logged_in());
        if (loginResponse.data.role === 'manager') {
            dispatch(set_manager());
            dispatch(loading_off());
            setNavigationUrl("/main");
        } else {
            let subResponse = await axios.get(checkSubUrl, {headers: newHeaders})
            if (subResponse.data.subscription_status === "active") {
                dispatch(loading_off());
                dispatch(set_activeSub());
                setNavigationUrl("/main");
            } else if (subResponse.data.subscription_status === "trialing") {
                dispatch(loading_off());
                dispatch(set_trialSub());
                setNavigationUrl("/main");
            }
        }
    }
    else{
        dispatch(loading_off());
         values.email='';
         values.password=';'
        throw new Error('Invalid credentials');
    }

}


export default LoginData;