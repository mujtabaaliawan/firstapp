import {Row} from "react-bootstrap";
import React from "react";


function TextDisplay (){

    return (
        <div>
        <Row className={'mb-4'}>
                <Row>
                <div>
                  <h1 id={'greeting'}>Because Who</h1>
                </div>
                </Row>
                <Row>
                <div>
                  <h1 id={'greeting'}>Doesn't Love to</h1>
                </div>
                </Row>
                <Row>
                <div>
                  <h1 id={'greeting'}>Maximize Stock Profits</h1>
                </div>
                </Row>
        </Row>
        </div>
    )
}

export default TextDisplay;