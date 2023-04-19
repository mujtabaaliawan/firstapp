import {useEffect} from "react";
import ReportData from "../services/getReportData"

function ReportDataUpdate(token, setReportData, transaction_state){

    useEffect(() => {
        ReportData(token, setReportData)
    }, [token, setReportData, transaction_state])
}

export default ReportDataUpdate;