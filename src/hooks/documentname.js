import {useEffect} from "react";

const useDocumentName = (name) => {

    useEffect(() => {
        document.title = name;
        }, [name]);
};

export default useDocumentName;
