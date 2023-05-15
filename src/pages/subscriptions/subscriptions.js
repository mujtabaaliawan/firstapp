import React from 'react';
import {loadStripe} from "@stripe/stripe-js/pure";
import "./styles/subscriptions.css";
import SubscriptionDisplay from "./components/subscriptionDisplay";
import Selectors from "./selectors/selectors";

function Subscriptions() {
    let {planName, setPlanName, buttonState, setButtonState, isSubscribed} = Selectors()

    const stripePromise = loadStripe(
        'pk_test_51Mo2FQLtjJIe7dr6ADTNPsTD3l6jXbtypH4bjDsjSiLzfEeAAiSyKRhR4KTfndiRZmM5jExK49PcS3Eh6s58zQfa009uaYV3ZI');

    return (
        <div>
            { (isSubscribed) ? (<></>) : (
                <SubscriptionDisplay stripePromise={stripePromise} setButtonState={setButtonState}
                setPlanName={setPlanName} planName={planName} buttonState={buttonState} />
            )}
        </div>
    );
}

export default Subscriptions;