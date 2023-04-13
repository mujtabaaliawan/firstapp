import {useDispatch, useSelector} from "react-redux";
import Shepherd from 'shepherd.js';
import React, {useEffect, useState} from "react";
import useDocumentName from "../hooks/documentname";
import HomeSteps from "../tour/home";
import {Tooltip} from "react-tooltip";


const Home = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.token.value);
    const isLoggedIn = useSelector((state) => state.logged.value);
    const tourPermission = useSelector((state) => state.tourMode.value);
    const [tourReady, setTourReady]  = useState(false)
    const [tourStarted, setTourStarted] = useState(false);
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark shepherd-theme-arrows',
            scrollTo: true
        }
    });
    function handleTourStart(tour){
      if (!tourStarted){
        setTourStarted(true);
        tour.start();
      }
    }

    useEffect(() => {
        document.title = 'Home';
        setTourReady(true);
        }, [setTourReady]);


    if (tourPermission && tourReady) {
        HomeSteps(isLoggedIn, tour, dispatch, token);
        handleTourStart(tour);
    }
return (
    <div>
        <Tooltip id={'profile-tooltip'} anchorSelect={'#profile-loggedin'} delayShow={1000}
                 content='Click to view or edit your Profile' variant='info' place={'bottom'}/>
        <Tooltip id={'market-tooltip'} anchorSelect={'#market-loggedin'} delayShow={1000}
                 content='Click to view latest market stocks value' variant='info' place={'bottom'} />
        <Tooltip id={'graph-tooltip'} anchorSelect={'#graph-loggedin'} delayShow={1000}
                 content='Click to plot time value graphs for stocks' variant='info' place={'bottom'} />
        <Tooltip id={'transaction-tooltip'} anchorSelect={'#trans-nav-dropdown'} variant='info'
                 content='Click to open transactions menu' delayShow={1000} place={'bottom'} />
        <Tooltip id={'newtrans-tooltip'} anchorSelect={'#new-trans-loggedin'}
                 content='Click to enter record of new stock purchase transaction'
                 delayShow={1000} place={'right'} variant='info'/>
        <Tooltip id={'saletrans-tooltip'} anchorSelect={'#sale-trans-loggedin'} variant='info'
                 content='Click to enter record of stock sale transaction' delayShow={1000} place={'right'} />
        <Tooltip id={'listtrans-tooltip'} anchorSelect={'#list-trans-loggedin'} variant='info'
                 content='Click to view your list of all transactions' delayShow={1000} place={'right'} />
        <Tooltip id={'portfolio-tooltip'} anchorSelect={'#portfolio-loggedin'} variant='info'
                 content='Click to view your Portfolio which calculates and shows your stock details and earnings'
                 delayShow={1000} place={'bottom'} />
        <Tooltip id={'favnav-tooltip'} anchorSelect={'#fav-nav-dropdown'}
                 content='Click to open favourites menu where you can mark a company as your favourite'
                 delayShow={1000} place={'bottom'} variant='info' />
        <Tooltip id={'newfav-tooltip'} anchorSelect={'#new-fav-loggedin'} variant='info'
                 content='Click to mark a company as your favourite and receive alerts about stock price caps'
                 delayShow={1000} place={'right'} />
        <Tooltip id={'listfav-tooltip'} anchorSelect={'#list-fav-loggedin'} variant='info'
                 content='Click to see your list of all favourites' delayShow={1000} place={'right'} />
        <Tooltip id={'dashboard-tooltip'} anchorSelect={'#dashboard-loggedin'}
                 content={'Click to see all transactions of all traders, you can follow any trader you like' +
                     ' to see his detailed transactions'} variant='info'
                 delayShow={1000} place={'bottom'} />
        <Tooltip id={'following-tooltip'} anchorSelect={'#following-loggedin'} variant='info'
                 content='Click to see detailed transactions of traders you are following'
                 delayShow={1000} place={'bottom'} />
        <Tooltip id={'followers-tooltip'} anchorSelect={'#followers-loggedin'} variant='info'
                 content='Click to see traders who are following you' delayShow={1000} place={'bottom'} />
        <Tooltip id={'customer-portal-tooltip'} anchorSelect={'#customer-portal-loggedin'} variant='info'
                 content='Click to view your subscription details' delayShow={1000} place={'bottom'} />
    </div>
)
}

export default Home;