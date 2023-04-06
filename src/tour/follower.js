import navbarCollapsed from "./Components/collapsedNavbar";
import skipTour from "./Components/endTour";

function FollowerSteps(tour, token, dispatch) {

    let buttons = [
        {
            text: 'Skip Tour',
            action: (() => {
                skipTour(token, dispatch);
                tour.cancel();
            })
        },
        {
            text: 'Back',
            action: tour.back
        },
        {
            text: 'Next',
            action: tour.next
        },
    ];

    tour.addStep({
        id: 'tour-follower',
        text: 'Welcome to Follower Page. This page shows all the traders who are following you',
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
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
        id: 'tour-follower-id',
        text: 'This shows the ID of the trader following you.',
        attachTo: {
            element: '#follower-id',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-follower-name',
        text: 'This shows the name of the trader following you.',
        attachTo: {
            element: '#follower-name',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-follower-email',
        text: 'This shows the email of the trader following you.',
        attachTo: {
            element: '#follower-email',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-follower-mobile',
        text: 'This shows the mobile number of the trader following you.',
        attachTo: {
            element: '#follower-mobile',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    navbarCollapsed(tour);

    tour.addStep({
        id: 'tour-complete',
        text: 'Thanks. The tour is now complete. Please enjoy the app',
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Complete Tour',
                action: (() => {
                    skipTour(token, dispatch);
                    tour.cancel();
                })
            },
        ]
    });
}

export default FollowerSteps;