import React from 'react';
import './styles/graph.css';
import Chart from "react-apexcharts";
import useDocumentName from "../../hooks/documentname";
import GetCompanyNames from "./hooks/getCompanyNames";
import GraphInitialize from "./utility/GraphInitialize";
import GraphForm from "./components/graphForm";
import GraphButtons from "./components/graphButtons";
import UserSelectors from "../selectors/userSelectors";
import Selectors from "./selectors/selectors";
import styles from "./styles/components";

const Graph = () => {

  let {token, isActiveSub, isTrialSub} = UserSelectors();
  let {xValues, setXValues, yValues, setYValues, companies, setCompanies,
    company_id,  selectedCompany,  field, fields, currentDate,
    currentDateTime, dateTimeOptions, formik} = Selectors(token);
  const {StyledChart} = styles();

  useDocumentName('Graph');

  GetCompanyNames(token, setCompanies);
  let { options, dataSeries } = GraphInitialize(xValues,
                                    yValues, field, selectedCompany);

  return (
      <div>
        { (!isActiveSub && !isTrialSub) ? (<></>) : (
      <div>
        <GraphForm formik={formik} companies={companies} fields={fields} />
        <GraphButtons token={token} field={field} currentDate={currentDate} dateTimeOptions={dateTimeOptions}
        company_id={company_id} currentDateTime={currentDateTime} setXValues={setXValues} setYValues={setYValues}/>

    <StyledChart id="chart-div">
      <Chart id="responsive-chart"
             options={options}
             series={dataSeries}
             type="line"
             width="1500"
             height="500"
      />
    </StyledChart>
      </div>
        )}
      </div>
  );
}

export default Graph;
