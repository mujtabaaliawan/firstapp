import {useState} from "react";
import {useFormik} from "formik";
import FilterSearchResults from "../services/searchData";

function Selectors (token){

    const [marketData, setMarketData] = useState([]);
    const [field] = useState('id');
    const [searchData, setSearchData] = useState([]);
    const [marketDate, setMarketDate] = useState('');
    const [searchField] = useState('id');
    const [displaySearchResults, setDisplaySearchResults] = useState(false);
    const formik = useFormik({
      initialValues: {
          searchQuery: '',
      },
      onSubmit: function (values) {
          FilterSearchResults(token, values.searchQuery,
              setSearchData, setDisplaySearchResults);
      },
    })

    return {
        marketData, setMarketData, field, searchData, setSearchData,
        marketDate, setMarketDate, searchField, displaySearchResults, setDisplaySearchResults,
        formik,
    }
}
export default Selectors;