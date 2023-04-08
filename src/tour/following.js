import navbarCollapsed from "./Components/collapsedNavbar";
import GetButtons from "./Components/buttons";

function FollowingSteps(tour, token, dispatch) {

    const buttons = GetButtons(token, dispatch, tour);

    tour.addStep({
        id: 'tour-following',
        text: 'Welcome to Explore Page. This page shows all the traders you are following and their transactions.',
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            },
        ]
        });

    tour.addStep({
        id: 'tour-following-id',
        text: 'This shows the ID of the trader you are following',
        attachTo: {
            element: '#following-id',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-following-name',
        text: 'This shows the name of the trader you are following',
        attachTo: {
            element: '#following-name',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-following-email',
        text: 'This shows the email of the trader you are following',
        attachTo: {
            element: '#following-email',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-following-mobile',
        text: 'This shows the mobile number of the trader you are following',
        attachTo: {
            element: '#following-mobile',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-following-transaction',
        text: 'This shows the transactions of the trader you are following',
        attachTo: {
            element: '#following-transaction',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    navbarCollapsed(tour);

    tour.addStep({
        id: 'tour-followers',
        text: 'Click here to see the traders who are following you.',
        attachTo: {
            element: '#followers-loggedin',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        buttons: [
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

export default FollowingSteps;