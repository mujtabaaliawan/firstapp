import GetButtons from "./Components/buttons";

function TransactionSaleSteps(tour, token, dispatch) {

    const buttons = GetButtons(token, dispatch, tour);

    tour.addStep({
        id: 'tour-transactionSale',
        text: 'Welcome to Sale Transaction Page. ' +
            'Here you can create new transaction record for stock sale.',
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
        text: 'Please click and select the company you want to sell stocks off',
        attachTo: {
            element: '#company_name',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-transaction-field',
        text: 'This shows the nature of transaction',
        attachTo: {
            element: '#field',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-transaction-current-value',
        text: 'This shows the current stock price in the market',
        attachTo: {
            element: '#current_value',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-transaction-volume',
        text: 'Click and choose the volume of the stocks you want to sell.',
        attachTo: {
            element: '#volume',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-transaction-submit',
        text: 'Click to submit the transaction sale record.',
        attachTo: {
            element: '#sale-submit',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
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

export default TransactionSaleSteps;