import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loading_off, loading_on} from "../features/loading/loadingSlice";


const CustomerPortal = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token.value);

    useEffect(() => {
        dispatch(loading_on());
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
                dispatch(loading_off());
                window.location.href = data;
            });
    })

    return (
        <>
        </>
    )
}
export default CustomerPortal;