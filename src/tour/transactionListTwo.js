import navbarCollapsed from "./Components/collapsedNavbar";


function TransactionListTwoSteps(tour) {

    navbarCollapsed(tour);

    tour.addStep({
        id: 'tour-new-transaction',
        text: 'Click here to plot your desired company stock price graphs',
        attachTo: {
            element: '#graph-loggedin',
            on: 'below'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        });
}

export default TransactionListTwoSteps;