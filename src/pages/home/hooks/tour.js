import {useEffect} from "react";

function TourStarter(setTourReady){

    useEffect(() => {
            document.title = 'Home';
            setTourReady(true);
        }, [setTourReady]);
}
export default TourStarter;