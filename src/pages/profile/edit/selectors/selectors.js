import {useFormik} from "formik";
import * as Yup from "yup";
import {useState} from "react";
import SubmitProfileUpdateData from "../services/submitProfileUpdateData";

function Selectors (token){
  const [navigationUrl, setNavigationUrl] = useState('');
  const [traderImage, setTraderImage] = useState('');

  const formik = useFormik({
      initialValues: {
          name: '',
          mobile_number:'',
      },
      onSubmit: function (values) {
          SubmitProfileUpdateData(values, token, setNavigationUrl, traderImage);
      },
      validationSchema: Yup.object({
          name: Yup.string(),
          mobile_number: Yup.string()
      }),
  })
    return {
        navigationUrl, formik, traderImage, setTraderImage
    }
}
export default Selectors;