import {useFormik} from "formik";
import TransactionSubmit from "../services/TransactionSubmit";
import * as Yup from "yup";
import {useState} from "react";
function Selectors (token, dispatch){

    const [navigationUrl, setNavigationUrl] = useState('');
    const [companies, setCompanies] = useState([]);
    const [currentPrice, setCurrentPrice] = useState('');
    const [stockID, setStockID] = useState('');
    const [availableStock, setAvailableStock] = useState('');


    const formik = useFormik({
    initialValues: {
        companyName: companies[0],
        volume: ''
    },
    onSubmit: function (values){
        TransactionSubmit(token, stockID, values, dispatch, setNavigationUrl);
        },
    validationSchema: Yup.object({
        companyName: Yup.string()
          .oneOf(companies, 'The company you chose does not exist'),

        volume: Yup.number()
                .required(),
    }),
    })
    return {
        navigationUrl, companies, setCompanies, currentPrice, setCurrentPrice, setStockID,
        availableStock, setAvailableStock, formik
    }
}
export default Selectors;