import { useDispatch } from 'react-redux';
import { clear_token } from '../features/token/tokenSlice';
import { logged_out } from '../features/user/userSlice';
import { not_manager } from '../features/manager/managerSlice';
import { Navigate } from 'react-router-dom';
import {clear_transaction_company} from "../features/transaction-company/transactionCompanySlice";
import {clear_favourite_company} from "../features/favourite-company/favouriteCompanySlice";
import {clear_subscription} from "../features/subscription/subscriptionSlice";
import {clear_trial} from "../features/user-trial/trialSlice";
import {loading_off} from "../features/loading/loadingSlice";

function Logout() {
  const dispatch = useDispatch()
    dispatch(clear_token());
    dispatch(logged_out());
    dispatch(not_manager());
    dispatch(clear_favourite_company());
    dispatch(clear_transaction_company());
    dispatch(clear_subscription());
    dispatch(clear_trial());
    dispatch(loading_off());
  return (
      <Navigate to='/login' />
  );
}

export default Logout;