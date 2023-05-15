
const navbarCollapsed = (tour) => {
    if (window.innerWidth < 992) {
        tour.addStep({
            id: 'navbar-menu-click',
            text: 'Click here to open Menu',
            attachTo: {
                element: 'button.navbar-toggler.collapsed',
                on: 'bottom'
            },
            classes: 'example-step-extra-class',
            advanceOn: {
                selector: 'button.navbar-toggler.collapsed',
                event: 'click'
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                },
            ]
        });
    }
}

export default navbarCollapsed;