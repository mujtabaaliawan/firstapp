import {useState, useEffect} from "react";
import {useSelector} from "react-redux";

const useGetJsonFetch = (url) => {
    const token = useSelector((state) => state.token.value)
    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const response = fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            })
            const json = await response.json();
            setData(json);
                };
        fetchData();
        }, [url, token]);

    return [data];
};
export default useGetJsonFetch;