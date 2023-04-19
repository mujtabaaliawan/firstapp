import {useEffect} from "react";
import CompanyNames from "../services/CompanyNames";


function GetCompanyNames(token, setCompanies){

    useEffect(() => {
        CompanyNames(token, setCompanies);

  }, [token, setCompanies]);
}

export default GetCompanyNames;