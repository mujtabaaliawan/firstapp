import skipTour from "./endTour";

function GetButtons(token, dispatch, tour) {
  return [
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
}

export default GetButtons;

