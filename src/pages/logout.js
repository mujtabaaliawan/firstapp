import { useDispatch } from 'react-redux';
import { clear_token } from '../features/token/tokenSlice';
import { logged_out } from '../features/user/userSlice';
import { Navigate } from 'react-router-dom';

function Logout() {
  const dispatch = useDispatch()
    dispatch(clear_token());
    dispatch(logged_out());
  return (
      <Navigate to='/' />
  );
}

export default Logout;