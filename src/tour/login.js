
function LoginSteps(tour) {

    tour.addStep({
        id: 'tour-login-email',
        text: 'Please enter your email address',
        attachTo: {
            element: '#email',
            on: 'top'
        },
        advanceOn: {
            selector: '#email',
            event: 'change'
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
        });

    tour.addStep({
        id: 'tour-login-password',
        text: 'Please enter your password',
        attachTo: {
            element: '#password',
            on: 'top'
        },
        advanceOn: {
            selector: '#password',
            event: 'change'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Cancel',
                action: tour.cancel
            },
            {
                text: 'Next',
                action: tour.next
            },
        ]
        });

    tour.addStep({
        id: 'tour-login-button',
        text: 'Press this button to submit and check login information',
        attachTo: {
            element: '#button-submit',
            on: 'bottom'
        },
        advanceOn: {
            selector: '#button-submit',
            event: 'click'
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
export default LoginSteps;