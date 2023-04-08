import {useSelector} from "react-redux";
import Shepherd from 'shepherd.js';
import {useState} from "react";
import useDocumentName from "../hooks/documentname";
import HomeSteps from "../tour/home";


const Home = () => {
    const token = useSelector((state) => state.token.value);
    const isLoggedIn = useSelector((state) => state.logged.value);
    const isSubscribed = useSelector((state) => state.subscription.value);
    const tourPermission = useSelector((state) => state.tourMode.value);
    const [tourReady, setTourReady]  = useState(false)
    const [tourStarted, setTourStarted] = useState(false);
    const tour = new Shepherd.Tour({
        useModalOverlay: false,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark shepherd-theme-arrows',
            scrollTo: true
        }
    });
    function handleTourStart(tour){
      if (!tourStarted){
        setTourStarted(true);
        tour.start();
      }
    }
    useDocumentName('Home', setTourReady);

    if (tourPermission && tourReady) {
        HomeSteps(isLoggedIn, isSubscribed, tour, token);
        handleTourStart(tour);
    }

    return (
      <div>
      </div>

  )
}

export default Home;