import {useSelector} from "react-redux";
import {useState} from "react";
function Selectors (){
    const [planName, setPlanName] = useState ('');
    const [buttonState, setButtonState] = useState(false);
    const isSubscribed = useSelector((state) => state.activeSub.value);

    return {
        planName, setPlanName, buttonState, setButtonState, isSubscribed
    }
}
export default Selectors;