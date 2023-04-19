import {useFormik} from "formik";
import {loading_on} from "../../../reducers/loading/loadingSlice";
import SubmitLoginData from "../services/submitLoginData";
import * as Yup from "yup";
import {useState} from "react";

function Selectors (dispatch){
  const [navigationUrl, setNavigationUrl] = useState('');

  const formik = useFormik({
      initialValues: {
          email: '',
          password: '',
      },
      onSubmit: function (values) {
          dispatch(loading_on());
          SubmitLoginData(values, dispatch, setNavigationUrl);
      },
      validationSchema: Yup.object({
          email: Yup.string()
              .email()
              .required(),
          password: Yup.string()
              .required()
              .test('is-length', 'Length should be minimum 3 letters',
                  function (value) {
                  const passwordLength = value.length;
                  return passwordLength >= 3;
              })
      }),
  })
    return {
        navigationUrl, formik
    }
}
export default Selectors;