import {useEffect} from "react";


function Navigation(navigationUrl, navigate) {

    useEffect(() => {
        navigate(navigationUrl);

  }, [navigationUrl, navigate]);
}

export default Navigation;