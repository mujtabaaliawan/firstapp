import GetButtons from "./Components/buttons";

function TransactionNewSteps(tour, token, dispatch) {

    const buttons = GetButtons(token, dispatch, tour);

    tour.addStep({
        id: 'tour-follower',
        text: 'Welcome to New Transaction Page. ' +
            'Here you can create new transaction record for stock purchase.',
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
        id: 'tour-transaction-company-name',
        text: 'Please click and select the company you have purchased the stocks of',
        attachTo: {
            element: '#company_name',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-transaction-field',
        text: 'This shows the nature of your transaction.',
        attachTo: {
            element: '#field',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-transaction-available-stock',
        text: 'These are the available stocks of the company you have selected',
        attachTo: {
            element: '#available_stock',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-transaction-volume',
        text: 'Enter the volume of the stocks that you have purchased',
        attachTo: {
            element: '#volume',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-transaction-submit',
        text: 'Press the button to Enter Transaction Record, you will be redirected to Transaction List Page',
        attachTo: {
            element: '#submit-button',
            on: 'top-start'
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

export default TransactionNewSteps;