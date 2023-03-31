import React, {useEffect} from "react";
import { useSelector} from "react-redux";


const CustomerPortal = () => {
    const token = useSelector((state) => state.token.value);

    useEffect(() => {
        let checkOut_url = "http://127.0.0.1:8000/customer-portal";
        fetch(checkOut_url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(r => r.json())
            .then(data => {
                window.location.href = data;
            });
    })

    return (
        <>
        </>
    )
}
export default CustomerPortal;