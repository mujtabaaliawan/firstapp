import React from 'react';
import DashboardDataUpdate from "./hooks/UpdateData";
import DashboardTable from "./components/displayTable";
import GlobalSelectors from "../selectors/globalSelectors";

const Dashboard = () => {
    let {selector, state} = GlobalSelectors();
    const token = selector((state) => state.token.value)
    const transaction_state = selector((state) => state.transaction.value);
    const [transactionData, setTransactionData] = state([]);
    const [addFollow, setAddFollow] = state(0);
    const isManager = selector((state) => state.manager.value);
    const isActiveSub = selector((state) => state.activeSub.value);
    const isTrialSub = selector((state) => state.trialSub.value);

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