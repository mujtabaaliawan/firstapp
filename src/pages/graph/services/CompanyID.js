import axios from "axios";


async function handleCompanyChange (token,
                                    selected_company_name,
                                    setCompanyID) {

    const companyIDUrl = 'http://127.0.0.1:8000/name-id-search';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };
    let data = {
        "company_name": selected_company_name
    }
    let response = await axios.post(companyIDUrl, data, {headers: headers})
    setCompanyID(response.data.id);
  }

  export default handleCompanyChange;