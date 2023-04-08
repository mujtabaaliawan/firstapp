import navbarCollapsed from "./Components/collapsedNavbar";
import GetButtons from "./Components/buttons";

function MarketSteps(tour, token, dispatch) {

    const buttons = GetButtons(token, dispatch, tour);

    tour.addStep({
        id: 'tour-market',
        text: 'Welcome to the Market Page. Here you can see the latest stock market data.',
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
        id: 'tour-market-id',
        text: 'This shows the id number of the Market Company Stock',
        attachTo: {
            element: '#market-stock-id',
            on: 'right',
        },
            highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-market-category',
        text: 'This shows the name of the category. You can click on it to sort the market according to category name',
        attachTo: {
            element: '#market-category',
            on: 'right',
        },
            highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-market-company',
        text: 'This shows the name of the company. You can click on it to sort the market according to company name',
        attachTo: {
            element: '#market-company',
            on: 'right',
        },
            highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-market-current',
        text: 'This shows the current price of company stock. You can click on it to sort the market' +
            ' according to current price',
        attachTo: {
            element: '#market-current',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-market-open',
        text: 'This shows the today opening price of company stock. You can click on it to sort the market' +
            ' according to open price',
        attachTo: {
            element: '#market-open',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-market-high',
        text: 'This shows the today high price of company stock. You can click on it to sort the market' +
            ' according to high price',
        attachTo: {
            element: '#market-high',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-market-low',
        text: 'This shows the today low price of company stock. You can click on it to sort the market' +
            ' according to low price',
        attachTo: {
            element: '#market-low',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-market-ldcp',
        text: 'This shows the last day closing price of company stock. You can click on it to sort the market' +
            ' according to last day closing price',
        attachTo: {
            element: '#market-ldcp',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-market-volume',
        text: 'This shows the volume of company stock. You can click on it to sort the market' +
            ' according to stock volume',
        attachTo: {
            element: '#market-volume',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-market-actions',
        text: 'You can click on Mark favourite to mark a company as our favourite company and receive alerts on marked' +
            'stock price caps. You can also click on Purchase Stocks to enter transaction regarding purchase of ' +
            'that company stocks',
        attachTo: {
            element: '#market-actions',
            on: 'right'
        },
            arrow: true,
        buttons: buttons
        });

        navbarCollapsed(tour);

        tour.addStep({
        id: 'tour-graph',
        text: 'Click here to visit the stocks graph section',
        attachTo: {
            element: '#graph-loggedin',
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

export default MarketSteps;