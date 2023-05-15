import navbarCollapsed from "./Components/collapsedNavbar";
import GetButtons from "./Components/buttons";
import skipTour from "./Components/endTour";

function HomeSteps(isLoggedIn, tour, dispatch, token) {

    const buttons = GetButtons(token, dispatch, tour);
    navbarCollapsed(tour);


    tour.addStep({
        id: 'tour-market',
        text: 'Click here to view the latest stock market prices',
        attachTo: {
            element: '#market-loggedin',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Skip Tour',
                action: (() => {
                    skipTour(token, dispatch);
                    tour.cancel();
                })
            },
            {
                text: 'Next',
                action: tour.next
            },
            ]
    });

    tour.addStep({
        id: 'tour-transaction',
        text: 'Click here to open menu and record your stock purchase and sale transactions',
        attachTo: {
            element: '#trans-nav-dropdown',
            on: 'bottom'
        },
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio',
        text: 'Click here to see your calculated stock profits and loses based on latest market stock prices',
        attachTo: {
            element: '#portfolio-loggedin',
            on: 'bottom'
        },
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-favourite',
        text: 'Click here to open menu and select a stock company as your favourite, and enter stock price limits.' +
            ' You will receive alerts when the current stock price crosses the marked limits.',
        attachTo: {
            element: '#fav-nav-dropdown',
            on: 'bottom'
        },
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-dashboard',
        text: 'Click here to view all transactions of all traders and follow any trader you want.',
        attachTo: {
            element: '#dashboard-loggedin',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'End Tour',
                action: (() => {
                    skipTour(token, dispatch);
                    tour.complete();
                })
            },
            ]
    });
}

export default HomeSteps;