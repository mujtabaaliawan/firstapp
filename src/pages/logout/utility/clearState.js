import {clear_token} from "../../login/reducers/userSlice";
import {logged_out} from "../../login/reducers/userSlice";
import {not_manager} from "../../login/reducers/userSlice";
import {clear_activeSub} from "../../login/reducers/userSlice";
import {clear_trialSub} from "../../login/reducers/userSlice";
import {set_tourMode} from "../../login/reducers/userSlice";
import {useEffect} from "react";


function ClearAllStates(dispatch, setNavigationUrl) {
    dispatch(clear_token());
    dispatch(logged_out());
    dispatch(not_manager());
    dispatch(clear_activeSub());
    dispatch(clear_trialSub());
    dispatch(set_tourMode(true));
    useEffect(()=>{
        setNavigationUrl('/');
	})

}

export default ClearAllStates;