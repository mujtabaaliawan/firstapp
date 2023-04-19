import React from 'react';
import useDocumentName from "../../hooks/documentname";
import FollowerDataUpdate from "./hooks/UpdateData";
import FollowerTable from "./components/displayTable";
import UserSelectors from "../selectors/userSelectors";
import Selectors from "./selectors/selectors";

const Followers = () => {
    let {token, isActiveSub, isTrialSub} = UserSelectors();
    let {followerData, setFollowerData} = Selectors()


    useDocumentName('Followers');
    FollowerDataUpdate(token, setFollowerData);

 return (
     <div>
         { (!isActiveSub && !isTrialSub) ? (<></>) : (
          <FollowerTable data={followerData} />
         )}
     </div>
  );
}

export default Followers;