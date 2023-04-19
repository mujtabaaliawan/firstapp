import React from 'react';
import useDocumentName from "../../hooks/documentname";
import PortfolioDataUpdate from "./hooks/UpdateData";
import PortfolioTable from "./components/PortFolioTable";
import UserSelectors from "../selectors/userSelectors";
import Selectors from "./selectors/selectors";

const PortFolio = () => {
    let {token, isActiveSub, isTrialSub} = UserSelectors();
    let {portfolioData, setPortfolioData, selectedFollowingIds,
        setSelectedFollowingIds, transaction_state} = Selectors()

    useDocumentName('New Transaction');
    PortfolioDataUpdate(token, setPortfolioData, transaction_state)

    return (
        <div>
            { (!isActiveSub && !isTrialSub) ? (<></>) : (
                <PortfolioTable data={portfolioData} selectedFollowingIds={selectedFollowingIds}
                                setSelectedFollowingIds={setSelectedFollowingIds} />
            )}
        </div>
    )
}

export default PortFolio;