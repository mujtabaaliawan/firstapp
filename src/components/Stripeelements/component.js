import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loading_on, loading_off} from "../../features/loading/loadingSlice";


const CheckoutForm = (subscriptionPlan) => {
    const token = useSelector((state) => state.token.value);
    const dispatch = useDispatch();

  useEffect(() => {
        dispatch(loading_on());
        let checkOut_url = "http://127.0.0.1:8000/checkout";
        fetch(checkOut_url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({"subscription": subscriptionPlan})
        })
            .then(r => r.json())
            .then(data => {
                dispatch(loading_off());
                window.location.href = data;
            });
    })

    return ( <div>
        </div>
    );
};

export default CheckoutForm;