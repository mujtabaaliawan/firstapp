import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function GlobalSelectors(){

    let dispatch = useDispatch();
    let navigate = useNavigate();

    return {
        dispatch, navigate
    };
}

export default GlobalSelectors;