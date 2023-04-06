import navbarCollapsed from "./Components/collapsedNavbar";
import skipTour from "./Components/endTour";

function GraphSteps(tour, token, dispatch) {

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
        id: 'tour-graph-company-name',
        text: 'Please click and select the company for which you desire graph of stock value.',
        attachTo: {
            element: '#company_name',
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
        id: 'tour-graph-field',
        text: 'Click and choose the price field for which to plot the graph. By default it is current price.',
        attachTo: {
            element: '#field',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
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
        highlightClass: 'highlight',
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
        highlightClass: 'highlight',
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
        highlightClass: 'highlight',
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
        highlightClass: 'highlight',
        buttons: buttons
        });

    navbarCollapsed(tour);

    tour.addStep({
        id: 'tour-new-page',
        text: 'Click here to go to the Dashboard Page',
        attachTo: {
            element: '#dashboard-loggedin',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        });

}

export default GraphSteps;