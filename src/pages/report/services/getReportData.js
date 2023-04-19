import axios from "axios";

async function ReportData(token, setReportData){

        const reportUrl = 'http://127.0.0.1:8000/daily-report?field=id';
        const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }

        let reportResponse = await axios.get(reportUrl, { headers: headers})
        setReportData(reportResponse.data);
    }

export default ReportData;