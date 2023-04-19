import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ReportDataUpdate from "./hooks/UpdateData";
import ReportTable from "./components/reportTable";
import UserSelectors from "../selectors/userSelectors";
import Selectors from "./selectors/selectors";
function Report(){
    let {token} = UserSelectors();
    let {transaction_state, data, setData, isManager} = Selectors();


    ReportDataUpdate(token, setData, transaction_state);


    return (
        <div>
            { (!isManager) ? (<></>) : (
                <ReportTable data={data} />
            )}
        </div>
  );
}

export default Report;
