import skipTour from "./Components/endTour";
import navbarCollapsed from "./Components/collapsedNavbar";

function HomeSteps(isLoggedIn, isSubscribed, tour, token) {

    navbarCollapsed(tour);

    if (isLoggedIn && isSubscribed) {
            tour.addStep({
                id: 'user-profile',
                text: 'Click here to view your Profile',
                attachTo: {
                    element: '#profile-loggedin',
                    on: 'bottom'
                },
                classes: 'example-step-extra-class',
                buttons: [
                    {
                        text: 'Next',
                        action: tour.next
                    },
                ]
            });
        } else {
            if (isLoggedIn) {
                tour.addStep({
                    id: 'user-subscription',
                    text: 'Click here to view subscription plans',
                    attachTo: {
                        element: '#subscription-unsubscribed',
                        on: 'bottom'
                    },
                    classes: 'example-step-extra-class',
                    buttons: [
                        {
                            text: 'Next',
                            action: tour.next
                        },
                    ]
                });
            } else {
                tour.addStep({
                    id: 'user-signup',
                    text: 'Start by clicking on this button to take you to Signup Page',
                    attachTo: {
                        element: '#signup-loggedout',
                        on: 'bottom'
                    },
                    classes: 'example-step-extra-class',
                    advanceOn: {
                        selector: '#signup-loggedout',
                        event: 'click'
                    },
                    buttons: [
                        {
                            text: 'Skip Tour',
                            action: (() => {
                                skipTour(token);
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
                    id: 'user-login',
                    text: 'Click here if you have already signed up for this app',
                    attachTo: {
                        element: '#login-loggedout',
                        on: 'bottom'
                    },
                    classes: 'example-step-extra-class',
                    buttons: [
                        {
                            text: 'Back',
                            action: tour.back
                        },
                        {
                            text: 'Complete',
                            action: tour.complete
                        }
                    ]
                });
            }
        }
}

export default HomeSteps;