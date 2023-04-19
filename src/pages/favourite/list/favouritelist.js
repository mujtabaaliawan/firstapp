import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useDocumentName from "../../../hooks/documentname";
import FavouriteDataUpdate from "./hooks/UpdateData";
import FavouriteTable from './components/displayTable';
import UserSelectors from "../../selectors/userSelectors";
import FavouriteSelectors from "../selectors/selectors";

function Favourite(){
    let {token, isActiveSub, isTrialSub} = UserSelectors();
    let {favourite_state, favouriteData, setFavouriteData} = FavouriteSelectors();


    useDocumentName('Favourite List');
    FavouriteDataUpdate(token, setFavouriteData, favourite_state);


    return (
        <div>
            { (!isActiveSub && !isTrialSub) ? (<></>) : (
            <FavouriteTable data={favouriteData} />
            )}
        </div>
    );
}

export default Favourite;
