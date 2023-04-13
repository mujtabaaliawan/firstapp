import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ClearAllStates from "../components/StatesReset/clearState";

function Logout() {
  const dispatch = useDispatch()
  ClearAllStates(dispatch);


  return (
      <Navigate to='/' />
  );
}

export default Logout;