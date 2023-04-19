import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import FavouriteDataUpdate from "./hooks/UpdateData";
import FavouriteTable from "./components/displayTable";
import UserSelectors from "../../selectors/userSelectors";
import FavouriteSelectors from "../selectors/selectors";
import Selectors from "./selectors/selectors";

function AllFavourite(){
    let {token} = UserSelectors();
    let {favourite_state, favouriteData, setFavouriteData} = FavouriteSelectors();
    let {isManager} = Selectors()

    FavouriteDataUpdate(token, setFavouriteData, favourite_state);

    return (
        <div>
            { (!isManager) ? (<></>) : (
            <FavouriteTable data={favouriteData} />
            )}
        </div>
    );
}

export default AllFavourite;
