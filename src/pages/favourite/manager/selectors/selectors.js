import {useSelector} from "react-redux";

function Selectors (){
    const isManager = useSelector((state) => state.manager.value);

    return {
        isManager
    }
}
export default Selectors;