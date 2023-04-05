import {useEffect} from "react";

const useDocumentName = (name, setTourReady) => {

    useEffect(() => {
        document.title = name;
        setTourReady(true);
        }, [name, setTourReady]);
};

export default useDocumentName;
