import navbarCollapsed from "./Components/collapsedNavbar";
import GetButtons from "./Components/buttons";

function TransactionListSteps(tour, token, dispatch) {

    const buttons = GetButtons(token, dispatch, tour);

    tour.addStep({
        id: 'tour-transactionList',
        text: 'Welcome to Transactions Page. This page shows all the transactions you have made.',
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
        id: 'tour-transaction-id',
        text: 'This shows the id of your transaction.',
        attachTo: {
            element: '#transaction-id',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-nature',
        text: 'This shows the nature of your transaction.',
        attachTo: {
            element: '#transaction-nature',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-volume',
        text: 'This shows the volume of stocks of your transaction.',
        attachTo: {
            element: '#transaction-volume',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-datetime',
        text: 'This shows the time that you performed the transaction.',
        attachTo: {
            element: '#transaction-datetime',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-category',
        text: 'This shows the category of company of your transaction.',
        attachTo: {
            element: '#transaction-category',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-company',
        text: 'This shows the company of your transaction.',
        attachTo: {
            element: '#transaction-company',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-stockID',
        text: 'This shows the stockId of the company and stock price on which you performed transaction.',
        attachTo: {
            element: '#transaction-stockID',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-current',
        text: 'This shows the current price of the stocks when the transaction was performed.',
        attachTo: {
            element: '#transaction-current',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-open',
        text: 'This shows the opening price of the stocks when the transaction was performed.',
        attachTo: {
            element: '#transaction-open',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-high',
        text: 'This shows the high price of the stocks when the transaction was performed.',
        attachTo: {
            element: '#transaction-high',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-low',
        text: 'This shows the low price of the stocks when the transaction was performed.',
        attachTo: {
            element: '#transaction-low',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-change',
        text: 'This shows the change in one day price of the stocks when the transaction was performed.',
        attachTo: {
            element: '#transaction-change',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-transaction-ldcp',
        text: 'This shows the last day closing price of the stocks when the transaction was performed.',
        attachTo: {
            element: '#transaction-ldcp',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    navbarCollapsed(tour);

    tour.addStep({
        id: 'tour-portfolio',
        text: 'Click here to visit the Portfolio section',
        attachTo: {
            element: '#portfolio-loggedin',
            on: 'right-end'
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


export default TransactionListSteps;