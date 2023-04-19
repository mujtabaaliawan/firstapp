import axios from "axios";


async function SaleCompanyNames (token, setSaleCompanies){

    const companyNameUrl = 'http://127.0.0.1:8000/sale-company-name';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    let response = await axios.get(companyNameUrl, {headers: headers})
    setSaleCompanies(response.data)
}

export default SaleCompanyNames;