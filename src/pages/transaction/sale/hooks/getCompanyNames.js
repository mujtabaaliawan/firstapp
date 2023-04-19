import {useEffect} from "react";
import SaleCompanyNames from "../services/CompanyNames";


function GetCompanyNames(token, setSaleCompanies){

    useEffect(() => {
        SaleCompanyNames(token, setSaleCompanies);

  }, [token, setSaleCompanies]);
}

export default GetCompanyNames;