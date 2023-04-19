import axios from "axios";


async function CompanyNames (token, setCompanies){

    const companyNameUrl = 'http://127.0.0.1:8000/company-name';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    let response = await axios.get(companyNameUrl, {headers: headers})
    setCompanies(response.data)
}

export default CompanyNames;