import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {set_subscription, clear_subscription} from "../../features/subscription/subscriptionSlice";
import {Navigate} from "react-router-dom";

const CheckoutForm = (subscriptionPlan) => {
    const token = useSelector((state) => state.token.value);
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const [page_changer, setPageChanger] = useState(false);

    // Handle real-time validation errors from the card Element.
    const handleChange = (event) => {
        if (event.error) {
            setError(event.error.message);
        } else {
            setError(null);
        }
    }

    // Handle form submission.
    const handleSubmit = async (event) => {
        event.preventDefault();
        const card = elements.getElement(CardElement);

        const {paymentMethod, error} = await stripe.createPaymentMethod({
            type: 'card',
            card: card,
        });

        if (error) {
            setError(error.response.data)
        }
        else {
            let stripe_url = "http://127.0.0.1:8000/subscribe"
            fetch(stripe_url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({payment_method_id: paymentMethod.id,
                                            "subscription": subscriptionPlan })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "active") {
                    dispatch(set_subscription());
                    setPageChanger(true);
                }
                else {
                    dispatch(clear_subscription());
                    setPageChanger(true);
                }
            })
                .catch(error => { console.log(error)})
        }
    };

    if(page_changer===true) {
        return <Navigate to="/"/>;
    }

    return (
        <form onSubmit={handleSubmit} className="stripe-form">

            <div className="form-row">
                <label htmlFor="card-element">
                    Credit or debit card
                </label>

                <CardElement
                    id="card-element"
                    onChange={handleChange}
                />

                <div className="card-errors" role="alert">{error}</div>
            </div>

            <button type="submit" className="submit-btn">Submit Payment</button>

        </form>
    );
};

export default CheckoutForm;