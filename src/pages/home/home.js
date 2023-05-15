import React from "react";
import HomeSteps from "./tour/home";
import UserSelectors from "../selectors/userSelectors";
import GlobalSelectors from "../selectors/globalSelectors";
import Selectors from "./selectors/selectors";
import TourStarter from "./hooks/tour";
import ToolTips from "./components/tooltips";

function Home(){
    let {token} = UserSelectors();
    let {dispatch} = GlobalSelectors();
    let {isLoggedIn, tourPermission, tourReady, setTourReady, tourStarted, setTourStarted, tour} = Selectors()

    function handleTourStart(tour){
      if (!tourStarted){
        setTourStarted(true);
        tour.start();
      }
    }
    TourStarter(setTourReady);

    if (tourPermission && tourReady) {
        HomeSteps(isLoggedIn, tour, dispatch, token);
        handleTourStart(tour);
    }
return (
    <div>
        <ToolTips />
    </div>
)
}

export default Home;