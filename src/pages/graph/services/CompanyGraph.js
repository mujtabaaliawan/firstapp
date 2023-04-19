import axios from "axios";

async function CompanyGraph (token, company_id, newDateTime,
                             currentDateTime, field, setXValues,
                             setYValues){

    const graphUrl = `http://127.0.0.1:8000/graph?company=${company_id
                        }&date_time_lt=${newDateTime}&date_time_gt=${currentDateTime}}`;

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };

    let response = await axios.get(graphUrl, {headers: headers})
    if (response.status===200) {
        setXValues(response.data.map(data => data.date_time));
        setYValues(response.data.map(data => data[field]));
    }
}

export default CompanyGraph;