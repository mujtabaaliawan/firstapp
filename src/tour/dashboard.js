import navbarCollapsed from "./Components/collapsedNavbar";
import skipTour from "./Components/endTour";

function DashboardSteps(tour, token, dispatch) {

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
        id: 'tour-dashboard',
        text: 'Welcome to Dashboard. This page shows all the transactions of all the traders, ' +
            'you can follow any trader, to get his specific details.',
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
        id: 'tour-dashboard-id',
        text: 'This shows the transaction ID',
        attachTo: {
            element: '#dashboard-id',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-dashboard-name',
        text: 'This shows the Trader name.',
        attachTo: {
            element: '#dashboard-name',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-dashboard-nature',
        text: 'This shows the nature of transaction',
        attachTo: {
            element: '#dashboard-nature',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-dashboard-volume',
        text: 'This shows the volume of stocks transacted.',
        attachTo: {
            element: '#dashboard-volume',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-dashboard-datetime',
        text: 'This shows the time the transaction was recorded',
        attachTo: {
            element: '#dashboard-datetime',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-dashboard-category',
        text: 'This shows the category of transaction stocks company',
        attachTo: {
            element: '#dashboard-category',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-dashboard-company',
        text: 'This shows the company of transaction stocks.',
        attachTo: {
            element: '#dashboard-company',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-current',
        text: 'This shows the current value at which stocks transaction was made.',
        attachTo: {
            element: '#current',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-open',
        text: 'This shows the opening value of stocks on day when stocks transaction was made.',
        attachTo: {
            element: '#open',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-high',
        text: 'This shows the high value of stocks on day when stocks transaction was made.',
        attachTo: {
            element: '#high',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-open',
        text: 'This shows the low value of stocks on day when stocks transaction was made.',
        attachTo: {
            element: '#low',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-change',
        text: 'This shows the change in value of stocks from previous data when stocks transaction was made.',
        attachTo: {
            element: '#change',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-ldcp',
        text: 'This shows the last day closing price of stocks on day when stocks transaction was made.',
        attachTo: {
            element: '#ldcp',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-open',
        text: 'You can click on Follow button in-front of other traders transactions in order to Follow them',
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    navbarCollapsed(tour);

    tour.addStep({
        id: 'tour-following',
        text: 'Click here to see the traders that you are following',
        attachTo: {
            element: '#following-loggedin',
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

export default DashboardSteps;