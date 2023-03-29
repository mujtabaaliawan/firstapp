import React, {useEffect} from "react";
import { useSelector} from "react-redux";


const CheckoutForm = (subscriptionPlan) => {
    const token = useSelector((state) => state.token.value);


  useEffect(() => {
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
            .then(data => { window.location.href = data;});
    })

    return ( <div>
        </div>
    );
};

export default CheckoutForm;