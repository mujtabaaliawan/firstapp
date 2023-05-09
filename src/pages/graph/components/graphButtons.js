import React from "react";
import ButtonClick from "../utility/ButtonClick";
import Button from "react-bootstrap/Button";

function GraphButtons(props){
    let token = props.token;
    let field = props.field;
    let currentDate = props.currentDate;
    let dateTimeOptions = props.dateTimeOptions;
    let company_id = props.company_id;
    let currentDateTime = props.currentDateTime;
    let setXValues = props.setXValues;
    let setYValues = props.setYValues;

    return (
        <div className="d-flex justify-content-center mb-2 mt-2">
        <div>
          <Button type="button" className="btn btn-primary mt-2 mb-2" id={'plot-1-year'}
                  onClick={() => ButtonClick(token, field, '1-year',
              currentDate, dateTimeOptions, company_id, currentDateTime, setXValues, setYValues)}>
              1 year</Button>
        </div>
        <div>
          <Button type="button" className="btn btn-primary mt-2 mb-2" id={'plot-6-months'}
                  onClick={() => ButtonClick(token, field, '6-months',
              currentDate, dateTimeOptions, company_id, currentDateTime, setXValues, setYValues)}>
              6 months</Button>
        </div>
        <div>
          <Button type="button" className="btn btn-primary mt-2 mb-2" id={'plot-1-month'}
                  onClick={ () => ButtonClick(token, field, '1-month',
              currentDate, dateTimeOptions, company_id, currentDateTime, setXValues, setYValues)}
          >1 month</Button>
        </div>
        <div>
          <Button type="button" className="btn btn-primary mt-2 mb-2" id={'plot-1-week'}
                  onClick={() => ButtonClick(token, field, '1-week',
              currentDate, dateTimeOptions, company_id, currentDateTime, setXValues, setYValues)}
          >1 week</Button>
        </div>
         </div>
    )
}

export default GraphButtons;