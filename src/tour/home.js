import skipTour from "./Fetchers/endTour";

function HomeSteps(isLoggedIn, isSubscribed, tour, token) {

    if (window.innerWidth < 992) {
        tour.addStep({
            id: 'navbar-menu-click',
            text: 'Click here to open Menu',
            attachTo: {
                element: 'button.navbar-toggler.collapsed',
                on: 'bottom'
            },
            classes: 'example-step-extra-class',
            highlightClass: 'highlight',
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                },
            ]
        });
    }

    if (isLoggedIn && isSubscribed) {
            tour.addStep({
                id: 'user-profile',
                text: 'Click here to view your Profile',
                attachTo: {
                    element: '#profile-loggedin',
                    on: 'bottom'
                },
                classes: 'example-step-extra-class',
                highlightClass: 'highlight',
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
                    highlightClass: 'highlight',
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
        return (
            <div></div>
        )
}

export default HomeSteps;