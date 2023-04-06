import skipTour from "./Components/endTour";

function FavouriteNewSteps(tour, token, dispatch) {

        const buttons = [
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
        id: 'tour-favourite-company-name',
        text: 'Please click and select the company you want to mark as your favourite',
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
        id: 'tour-favourite-field',
        text: 'Please select the price field you want to monitor',
        attachTo: {
            element: '#field',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-favourite-maximum-limit',
        text: 'Please select the lower maximum limit cap for the price field. You will be alerted when stock reaches' +
            'this limit.',
        attachTo: {
            element: '#maximum_limit',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

        tour.addStep({
        id: 'tour-favourite-minimum-limit',
        text: 'Please select the lower minimum limit cap for the price field. You will be alerted when stock drops' +
            'down to this limit.',
        attachTo: {
            element: '#minimum_limit',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: buttons
        });

    tour.addStep({
        id: 'tour-favourite-submit',
        text: 'Press this button to submit and create your favourite. You will be redirected to Favourite List Page.',
        attachTo: {
            element: '#minimum_limit',
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

export default FavouriteNewSteps;