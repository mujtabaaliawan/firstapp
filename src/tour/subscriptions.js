
function SubscriptionSteps(tour) {

    tour.addStep({
        id: 'trial-tour',
        text: 'Click here for Free Trial Subscription using the email id provided for login, or click Next' +
            'to view paid subscriptions',
        attachTo: {
            element: '#trial-button',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: [
            {
                text: 'Cancel',
                action: tour.cancel
            },
            {
                text: 'Next',
                action: tour.next
            },
        ]
    })
    tour.addStep({
        id: 'yearly-tour',
        text: 'Please click here to purchase yearly subscription plan',
        attachTo: {
            element: '#yearly-button',
            on: 'left'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: [
            {
                text: 'Cancel',
                action: tour.cancel
            },
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            },
        ]
    })
    tour.addStep({
        id: 'monthly-tour',
        text: 'Please click here to purchase monthly subscription plan',
        attachTo: {
            element: '#monthly-button',
            on: 'bottom'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: [
            {
                text: 'Cancel',
                action: tour.cancel
            },
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            },
        ]
    })
    tour.addStep({
        id: 'weekly-tour',
        text: 'Please click here to purchase weekly subscription plan',
        attachTo: {
            element: '#weekly-button',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Complete',
                action: tour.complete
            }
        ]
    })
    return (
        <div>
        </div>
    )
}

export default SubscriptionSteps;
