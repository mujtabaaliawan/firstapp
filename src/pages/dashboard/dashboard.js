import React from 'react';
import DashboardDataUpdate from "./hooks/UpdateData";
import DashboardTable from "./components/displayTable";
import UserSelectors from "../selectors/userSelectors";
import Selectors from "./selectors/selectors";

const Dashboard = () => {
    let {token, isActiveSub, isTrialSub, isManager} = UserSelectors();
    let {transaction_state, transactionData, setTransactionData, addFollow, setAddFollow} = Selectors();

    DashboardDataUpdate(token, setTransactionData, transaction_state, addFollow);

  return (
      <div>
          { (!isActiveSub && !isTrialSub && !isManager) ? ( <></> ) :(
              <DashboardTable data={transactionData} token={token}
              addFollow={addFollow} setAddFollow={setAddFollow} />
              ) }
      </div>
  )
}

export default Dashboard;