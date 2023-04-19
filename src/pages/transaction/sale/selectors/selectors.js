import {useFormik} from "formik";
import SaleTransactionSubmit from "../services/saleTransactionSubmit";
import * as Yup from "yup";
import {useState} from "react";
function Selectors (token, dispatch){

    const [stockID, setStockID] = useState('');
    const [navigationUrl, setNavigationUrl] = useState('');
    const [saleCompanies, setSaleCompanies] = useState([]);
    const [currentPrice, setCurrentPrice] = useState('');
    const [traderStock, setTraderStock] = useState([]);
    const [selectedStock, setSelectedStock] = useState('');


    const formik = useFormik({
    initialValues: {
        companyName: saleCompanies[0],
        volume: '',
        saleStock: traderStock[0],
    },
    onSubmit: function (values){
        SaleTransactionSubmit(token, stockID, values, selectedStock, dispatch, setNavigationUrl);
        },
    validationSchema: Yup.object({
        companyName: Yup.string()
          .oneOf(saleCompanies, 'The company you chose does not exist'),

        volume: Yup.number()
                .required(),

        saleStock: Yup.string()
            .oneOf(traderStock, 'The stock you choose does not exist'),
    }),
    })
    return {
        setStockID, navigationUrl, saleCompanies, setSaleCompanies,
        currentPrice, setCurrentPrice, traderStock, setTraderStock, setSelectedStock,
        formik

    }
}
export default Selectors;