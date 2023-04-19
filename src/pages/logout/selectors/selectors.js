import {useState} from "react";

function Selectors (){
    const [navigationUrl, setNavigationUrl] = useState('');
    return {
        navigationUrl, setNavigationUrl
    }
}
export default Selectors;