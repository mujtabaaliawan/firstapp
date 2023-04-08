
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
        id: 'user-image',
        text: 'Please upload your profile picture here. ' +
            'You may skip this part and upload picture later, click Next.',
        attachTo: {
            element: '#image',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        advanceOn: {
            selector: '#image',
            event: 'change'
        },
        buttons: buttons
    });

    tour.addStep({
        id: 'user-firstname',
        text: 'Please enter your first name.',
        attachTo: {
            element: '#first',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        advanceOn: {
            selector: '#first',
            event: 'change'
        },
        buttons: buttons
    });

    tour.addStep({
        id: 'user-lastname',
        text: 'Please enter your last name.',
        attachTo: {
            element: '#last',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        advanceOn: {
            selector: '#last',
            event: 'change'
        },
        buttons: buttons
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
        id: 'user-mobile',
        text: 'Please enter your mobile number',
        attachTo: {
            element: '#mobile',
            on: 'right'
        },
        classes: 'example-step-extra-class',
        highlightClass: 'highlight',
        advanceOn: {
            selector: '#mobile',
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