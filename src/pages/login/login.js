import React from 'react';
import Navigation from "../favourite/new/hooks/navigation";
import LoginBox from "./components/LoginBox";
import GlobalSelectors from "../selectors/globalSelectors";
import Selectors from "./selectors/selectors";

function Login() {
    let {dispatch, navigate} = GlobalSelectors();
    let{navigationUrl, formik} = Selectors(dispatch);


  Navigation(navigationUrl, navigate);

  return (
      <div>
        <LoginBox formik={formik}/>
      </div>
  );
}

export default Login;