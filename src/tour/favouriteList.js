import skipTour from "./Components/endTour";
import navbarCollapsed from "./Components/collapsedNavbar";

function FavouriteListSteps(tour, token, dispatch) {

    const buttons = [
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
        id: 'tour-favourite-id',
        text: 'This page shows the list of your favourites. This shows the id of your favourite.',
        attachTo: {
            element: '#favourite-id',
            on: 'top'
        },
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
        id: 'tour-favourite-category',
        text: 'This shows the category of your favourite company.',
        attachTo: {
            element: '#favourite-category',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });
    tour.addStep({
        id: 'tour-favourite-company',
        text: 'This shows your favourite marked company.',
        attachTo: {
            element: '#favourite-company',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-favourite-field',
        text: 'This shows the marked price field of your favourite company.',
        attachTo: {
            element: '#favourite-monitor-field',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-favourite-minimum-limit',
        text: 'This shows the minimum lower limit of the marked price field of your favourite company stocks.',
        attachTo: {
            element: '#favourite-minimum-limit',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-favourite-maxiimum-limit',
        text: 'This shows the maximum upper limit of the marked price field of your favourite company stocks.',
        attachTo: {
            element: '#favourite-maximum-limit',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    navbarCollapsed(tour);

    tour.addStep({
        id: 'tour-dashboard',
        text: 'Please click here to see the dashboard where we will see the transactions of all the traders',
        attachTo: {
            element: '#dashboard-loggedin',
            on: 'top'
        },
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
                text: 'Back',
                action: tour.back
            },
            {
                text: 'End',
                action: tour.complete
            },
        ]
    });


}

export default FavouriteListSteps;