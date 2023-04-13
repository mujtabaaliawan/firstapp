
function SignUpSteps(tour) {

    const buttons = [
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
        ];

    tour.addStep({
        id: 'tour-signup',
        text: 'Welcome to Signup Page. Here you can create a new user profile to use the app.',
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
        id: 'user-email',
        text: 'Please enter your email address here',
        attachTo: {
            element: '#email',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        advanceOn: {
            selector: '#email',
            event: 'change'
        },
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
        id: 'user-password',
        text: 'Please enter your password.',
        attachTo: {
            element: '#password',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        advanceOn: {
            selector: '#password',
            event: 'change'
        },
        buttons: buttons
    });


    tour.addStep({
        id: 'user-submit',
        text: 'Now please press the submit button.',
        attachTo: {
            element: '#submit-button',
            on: 'right'
        },
        advanceOn: {
            selector: '#submit-button',
            event: 'click'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Complete',
                action: tour.complete
            },
        ]
    });
}

export default SignUpSteps;