import {useSelector} from "react-redux";
import Shepherd from "shepherd.js";
import {useState} from "react";
function Selectors (){
    const isLoggedIn = useSelector((state) => state.logged.value);
    const tourPermission = useSelector((state) => state.tourMode.value);
    const [tourReady, setTourReady]  = useState(false)
    const [tourStarted, setTourStarted] = useState(false);
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark shepherd-theme-arrows',
            scrollTo: true
        }
    });
    return {
        isLoggedIn, tourPermission, tourReady, setTourReady, tourStarted, setTourStarted, tour
    }
}
export default Selectors;