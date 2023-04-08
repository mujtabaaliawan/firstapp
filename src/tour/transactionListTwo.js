import navbarCollapsed from "./Components/collapsedNavbar";


function TransactionListTwoSteps(tour) {


    navbarCollapsed(tour);

    tour.addStep({
        id: 'tour-favourite-menu',
        text: 'Click here to open Favourite Dropdown Menu',
        attachTo: {
            element: '#fav-nav-dropdown',
            on: 'right'
        },
        advanceOn: {
            selector: '#fav-nav-dropdown',
                event: 'click'
        },
        classes: 'example-step-extra-class',
        buttons:[
            {
                text: 'Next',
                action: tour.next
            },
            ]
    });

    tour.addStep({
        id: 'tour-new-transaction',
        text: 'Click here to mark a company as your favourite.',
        attachTo: {
            element: '#new-fav-loggedin',
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

export default TransactionListTwoSteps;