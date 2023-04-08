import navbarCollapsed from "./Components/collapsedNavbar";
import GetButtons from "./Components/buttons";

function ProfileSteps(tour, token, dispatch) {

    const buttons = GetButtons(token, dispatch, tour);

    tour.addStep({
        id: 'tour-profile',
        text: 'Welcome to Profile Page. This page shows your profile and your personal data.',
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
        id: 'user-picture',
        text: 'This is your profile picture',
        attachTo: {
            element: '#profile-picture',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        buttons: buttons
    });

    tour.addStep({
        id: 'user-total-transactions',
        text: 'This shows your total number of transactions',
        attachTo: {
            element: '#transaction-data',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'user-total-followers',
        text: 'This shows your total number of followers',
        attachTo: {
            element: '#followers-data',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'user-total-following',
        text: 'This shows your total number of people you are following',
        attachTo: {
            element: '#following-data',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'user-total-following',
        text: 'This shows your personal details such as mobile number, address etc.',
        attachTo: {
            element: '#personal-data',
            on: 'top-start'
        },
        classes: 'example-step-extra-class',
        buttons: buttons
    });

    navbarCollapsed(tour);

    tour.addStep({
        id: 'user-next-page',
        text: 'Now please click here to go to the Market',
        attachTo: {
            element: '#market-loggedin',
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
            },
        ]
    });

}
export default ProfileSteps;