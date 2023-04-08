import navbarCollapsed from "./Components/collapsedNavbar";
import GetButtons from "./Components/buttons";

function GraphSteps(tour, token, dispatch) {

    const buttons = GetButtons(token, dispatch, tour);

    tour.addStep({
        id: 'tour-graph',
        text: 'Welcome to Graph Page. Here you can plot relevant ' +
            'company stock price graphs for certain time durations.',
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
        id: 'tour-graph-company-name',
        text: 'Please click and select the company for which you desire graph of stock value.',
        attachTo: {
            element: '#company_name',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-graph-field',
        text: 'Click and choose the price field for which to plot the graph. By default it is current price.',
        attachTo: {
            element: '#field',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-graph-plot1',
        text: 'Click here to plot the graph for previous 1 year',
        attachTo: {
            element: '#plot-1-year',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-graph-plot2',
        text: 'Click here to plot the graph for previous 6 months',
        attachTo: {
            element: '#plot-6-months',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-graph-plot3',
        text: 'Click here to plot the graph for previous 1 month',
        attachTo: {
            element: '#plot-1-month',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-graph-plot4',
        text: 'Click here to plot the graph for previous 1 week',
        attachTo: {
            element: '#plot-1-week',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        buttons: buttons
        });

    navbarCollapsed(tour);

    tour.addStep({
        id: 'tour-transaction-menu',
        text: 'Click here to open Transaction Dropdown Menu',
        attachTo: {
            element: '#trans-nav-dropdown',
            on: 'right-end'
        },
            advanceOn: {
            selector: '#trans-nav-dropdown',
                event: 'click'
        },
        classes: 'example-step-extra-class',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-new-transaction',
        text: 'Click here to enter a new stock purchase transaction',
        attachTo: {
            element: '#new-trans-loggedin',
            on: 'right-end'
        },
        beforeShowPromise: function() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    resolve();
                    }, 300);
            });
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

export default GraphSteps;