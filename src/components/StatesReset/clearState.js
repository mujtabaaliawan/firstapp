import {clear_token} from "../../features/token/tokenSlice";
import {logged_out} from "../../features/user/userSlice";
import {not_manager} from "../../features/manager/managerSlice";
import {clear_favourite_company} from "../../features/favourite-company/favouriteCompanySlice";
import {clear_transaction_company} from "../../features/transaction-company/transactionCompanySlice";
import {clear_activeSub} from "../../features/subscription/activeSlice";
import {clear_trialSub} from "../../features/subscription/trialSlice";
import {set_tourMode} from "../../features/tour/tourSlice";

function ClearAllStates(dispatch) {
    dispatch(clear_token());
    dispatch(logged_out());
    dispatch(not_manager());
    dispatch(clear_favourite_company());
    dispatch(clear_transaction_company());
    dispatch(clear_activeSub());
    dispatch(clear_trialSub);
    dispatch(set_tourMode(true));
}

export default ClearAllStates;