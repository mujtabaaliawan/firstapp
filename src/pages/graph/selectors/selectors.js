import {useFormik} from "formik";
import handleCompanyChange from "../services/CompanyID";
import * as Yup from "yup";
import {useState} from "react";
function Selectors (token){
    const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [company_id, setCompanyID] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [field, setField] = useState('current');
  const fields = ['current', 'open', 'high', 'low', 'change', 'ldcp', 'volume'];
  const currentDate = new Date();
  const dateTimeOptions = { year: 'numeric', month: '2-digit',
    day: '2-digit', hour: '2-digit', minute: '2-digit',
    second: '2-digit', hour12: false };
  const currentDateTime = currentDate.toLocaleString('en-US',
      dateTimeOptions).replace(/[/]/g, '-');

  const formik = useFormik({
    initialValues: {
      companyName: companies[0],
      field: fields,
    },
    onSubmit: function (values){
      handleCompanyChange(token, values.company_name, setCompanyID);
      setSelectedCompany(values.company_name);
      setField(values.field);
    },
    validationSchema: Yup.object({
      companyName: Yup.string()
          .oneOf(companies, 'The company you chose does not exist'),
      field: Yup.string()
          .oneOf(fields, 'The field you chose does not exist'),
    }),
  })

    return {
        xValues, setXValues, yValues, setYValues, companies, setCompanies, company_id, setCompanyID,
        selectedCompany, setSelectedCompany, field, setField, fields, currentDate, currentDateTime, dateTimeOptions,
        formik
    }
}
export default Selectors;