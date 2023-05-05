import {Row} from "react-bootstrap";
import React from "react";
import styles from "../styles/styles"

function FooterDisplay (){

    const { Footer } = styles();

    return (
        <div as={Footer}>
            <Row className={"mt-4"}>
                <p>Free All Features for 14 days on registration or <a href={'/login'}>press here for login</a></p>
            </Row>
        </div>
    )
}

export default FooterDisplay;