import {useState} from "react";
import {useFormik} from "formik";
import FavouriteSubmit from "../services/FavouriteSubmit";
import * as Yup from "yup";

function Selectors (token, dispatch){
    const [navigationUrl, setNavigationUrl] = useState('');
    const [companies, setCompanies] = useState([]);
    const fields = ['current', 'open', 'high', 'low', 'change', 'ldcp', 'volume'];
    const formik = useFormik({
    initialValues: {
      companyName: companies[0],
      field: fields,
      maximumLimit:'',
      minimumLimit:'',
    },
    onSubmit: function (values){
        FavouriteSubmit(token, values, dispatch, setNavigationUrl);
    },
    validationSchema: Yup.object({
        companyName: Yup.string()
          .oneOf(companies, 'The company you chose does not exist'),

        field: Yup.string()
          .oneOf(fields, 'The field you chose does not exist'),

        maximumLimit: Yup.number()
                        .required(),
        minimumLimit:Yup.number()
                        .required(),
    }),
  })
    return {
        navigationUrl, companies, setCompanies, fields, formik
    }
}
export default Selectors;