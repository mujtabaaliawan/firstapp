import React from 'react';
import useDocumentName from "../../hooks/documentname";
import FollowingDataUpdate from "./hooks/UpdateData";
import FollowingTable from "./components/displayFollowingTable";
import UserSelectors from "../selectors/userSelectors";
import Selectors from "./selectors/selectors";

const Following = () => {
    let {token, isActiveSub, isTrialSub} = UserSelectors();
    let {isManager, followingData, setFollowingData} = Selectors();

    useDocumentName('Following');
    FollowingDataUpdate(token, setFollowingData);

    return (
     <div>
         { (!isActiveSub && !isTrialSub && !isManager) ? (<></>) : (
             <FollowingTable data={followingData} />
         )}
     </div>
  );
}
export default Following;