import React from 'react';
import useDocumentName from "../../../hooks/documentname";
import GetCompanyNames from "../../graph/hooks/getCompanyNames";
import FavouriteForm from "./components/favouriteForm";
import Navigation from "./hooks/navigation";
import GlobalSelectors from "../../selectors/globalSelectors";
import UserSelectors from "../../selectors/userSelectors";
import Selectors from "./selectors/selectors";

function FavouriteNew() {
    let {token, isActiveSub, isTrialSub} = UserSelectors();
    let {dispatch, navigate} = GlobalSelectors();
    let {navigationUrl, companies, setCompanies, fields, formik} = Selectors(token, dispatch);

    useDocumentName('New Favourite');
    GetCompanyNames(token, setCompanies);
    Navigation(navigationUrl, navigate);

    return (
        <div>
            { (!isActiveSub && !isTrialSub) ? (<></>) : (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="text-center">
                        <h1>Create New Favourite</h1>
                    </div>
                        <FavouriteForm formik={formik} companies={companies} fields={fields}/>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default FavouriteNew;