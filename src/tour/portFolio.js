import navbarCollapsed from "./Components/collapsedNavbar";
import GetButtons from "./Components/buttons";

function PortFolioSteps(tour, token, dispatch) {

    const buttons = GetButtons(token, dispatch, tour);

    tour.addStep({
        id: 'tour-portfolio',
        text: 'Welcome to PortFolio Page. Here you can see your stocks data,' +
            ' investments, earnings and calculated profits and losses based on current market.',
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
        id: 'tour-portfolio-total-stocks',
        text: 'This shows the total number of stocks you have purchased.',
        attachTo: {
            element: '#portfolio-total-stocks',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-profit',
        text: 'This shows your expected profit, if you want to sell all your stocks now at existing market price.',
        attachTo: {
            element: '#portfolio-expected-profit',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-loss',
        text: 'This shows your expected loss, if you want to sell all your stocks now at existing market price.',
        attachTo: {
            element: '#portfolio-expected-loss',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-loss',
        text: 'This shows your current investment in the market',
        attachTo: {
            element: '#current-investment',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-loss',
        text: 'This shows your lifetime investment in the market',
        attachTo: {
            element: '#total-investment',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-company',
        text: 'This shows the company name of which you have purchased stocks',
        attachTo: {
            element: '#company-name',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-company-stocks',
        text: 'This shows the total stocks of the company.',
        attachTo: {
            element: '#company-stocks',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-company-investment',
        text: 'This shows your current investment in the company',
        attachTo: {
            element: '#company-current-investment',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-company-expected-earning',
        text: 'This shows your expected earning, ' +
            'if you want to sell this company stocks now at existing market price.',
        attachTo: {
            element: '#company-expected-earning',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-company-lifetime-investment',
        text: 'This shows your lifetime investment in the company.',
        attachTo: {
            element: '#company-lifetime-investment',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-company-lifetime-earning',
        text: 'This shows your lifetime earning from this company',
        attachTo: {
            element: '#company-lifetime-earning',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-company-stock-details',
        text: 'This shows the details of your company stocks',
        attachTo: {
            element: '#company-stock-details',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-company-stock-details-button',
        text: 'Press this button to see the detail of ' +
            'company stocks you have purchased',
        attachTo: {
            element: '#button-company-stock-detail',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-stock',
        text: 'This shows the stocks you have purchased of the company',
        attachTo: {
            element: '#stock',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-purchase-price',
        text: 'This shows the purchase price of your company stocks',
        attachTo: {
            element: '#purchase-price',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-purchase-date',
        text: 'This shows the purchase date of your company stocks',
        attachTo: {
            element: '#purchase-date',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-expected-sale-price',
        text: 'This shows the sale price of the stock at current market price',
        attachTo: {
            element: '#expected-sale-price',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    tour.addStep({
        id: 'tour-portfolio-stock-expected-earning',
        text: 'This shows the expected earning from selling these stocks at current market price',
        attachTo: {
            element: '#expected-earning',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
    });

    navbarCollapsed(tour);

    tour.addStep({
        id: 'tour-trans-menu',
        text: 'Now lets sell the stocks. Please click here to open the transaction dropdown menu',
        attachTo: {
            element: '#trans-nav-dropdown',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        buttons: buttons
    });


    tour.addStep({
        id: 'tour-trans-sell',
        text: 'Now please click here to open the Transaction Page to record sale of stocks',
        attachTo: {
            element: '#sale-trans-loggedin',
            on: 'right'
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

export default PortFolioSteps;