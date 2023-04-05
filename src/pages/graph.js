import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import '../styles/graph.css';
import Chart from "react-apexcharts";
import useDocumentName from "../hooks/documentname";
import Shepherd from "shepherd.js";


const Graph = () => {

  const isSubscribed = useSelector((state) => state.subscription.value);
  const token = useSelector((state) => state.token.value)
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [company_id, setCompanyID] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [field, setField] = useState('current');
  const currentDate = new Date();
  const dateTimeOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit',
    minute: '2-digit', second: '2-digit', hour12: false };
  const currentDateTime = currentDate.toLocaleString('en-US', dateTimeOptions).replace(
      /[/]/g, '-');

  const fromDate = new Date(currentDate.getFullYear(), currentDate.getMonth(),
            currentDate.getDate() - 1, currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
  const fromDateTimeOneDay = fromDate.toLocaleString('en-US', dateTimeOptions).replace(
      /[/]/g, '-');
  const [ fromDateTime, setFromDateTime] = useState(fromDateTimeOneDay);
  const [tourReady, setTourReady]  = useState(false)
  const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark',
            scrollTo: true
        }
  });
  useDocumentName('Graph', setTourReady);


  useEffect(() => {
    fetch('http://127.0.0.1:8000/company-name', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }})
        .then(response => response.json())
        .then(data => setCompanies(data.map(company => company.name)))
  }, [token]);



  const handleCompanyChange = (selected_company_name) => {
    setSelectedCompany(selected_company_name)
    const url = 'http://127.0.0.1:8000/name-id-search';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({"company_name": selected_company_name})
    })
        .then(response => response.json())
        .then(data => setCompanyID(data.id));
  };

  function handleClick(event) {
    const duration = event.target.name;
    let newDateTime;

    switch (duration) {
      case '1 year':
        newDateTime = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(),
            currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
        break;
      case '6 months':
        newDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6,
            currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
        break;
      case '1 month':
        newDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1,
            currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
        break;
      case '1 week':
        newDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(),
            currentDate.getDate() - 7, currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
        break;
      default:
        newDateTime = currentDate.toLocaleString('en-US', dateTimeOptions).replace(
            /[/]/g, '-');
        break;
    }

    setFromDateTime(newDateTime);

    const url = `http://127.0.0.1:8000/graph?company=${company_id
    }&date_time_lt=${fromDateTime}&date_time_gt=${currentDateTime}}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
        .then(response => {
          if (response.status === 200) {
            response.json()
                .then(data => {
              let dateTimeData = data.map(data => {
                return data.date_time
              });
              let fieldValueData = data.map(data => {
                return data[field]
              });
              setXValues(dateTimeData);
              setYValues(fieldValueData);
            })
          }
        })
  }

    let yAxisTitle = field.charAt(0).toUpperCase() + field.slice(1);
    const options = {
      chart: {
        id: "responsive-chart"
      },
      title: {
      text: `${selectedCompany} `,
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
      yaxis: {
        title: {
          text: yAxisTitle,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
          },
        },
      },
      xaxis: {
        type: "dateTime",
        categories: xValues,
        title: {
          text: "Date and Time",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
          },
        },
        labels: {
          rotateAlways: true,
          rotate: -75,
          formatter: function (val) {
            var date = new Date(val);
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var dateStr = date.toLocaleDateString();
            var timeStr = hours + ':' + minutes + ':' + seconds;
            return dateStr + ' ' + timeStr
          },
          offsetX: 2.5,
        }
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            title: {
              align: "left",
            },
            chart: {
              width: 400
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
    const dataSeries = [
      {
        name: field,
        data: yValues
      }
    ]

  return (
      <div>
        { isSubscribed && (
      <div>
        <div className="d-flex justify-content-center mb-2 mt-2" style={{
          display: "flex",
          flexShrink: "1",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          whiteSpace: "nowrap",
          margin: "auto",
        }}>
          <div className="form-group" style={{order: "1", marginRight: "3rem"}}>
          <label style={{fontStyle: "Bold", verticalAlign: "center"}}>Company Name</label>
          <select className="form-control mt-2 mb-2" id="company_name" value={selectedCompany}
                  onChange={(event) => handleCompanyChange(event.target.value)}>
            <option value="">Select Company</option>
            {companies.map((companyName, index) => (
                <option key={index} value={companyName}>{companyName}</option>
            ))}
          </select>
          </div>
          <div className="form-group" style={{order: "2"}}>
          <label style={{fontStyle: "Bold", verticalAlign: "center"}}>Field</label>
          <select className="form-control mt-2 mb-2" id="field" value={field}
                  onChange={(event) => setField(event.target.value)}>
            <option value=''>Select Field</option>
            <option value='current'>Current</option>
            <option value='open'>Open</option>
            <option value='high'>High</option>
            <option value='low'>Low</option>
            <option value='change'>Change</option>
            <option value='volume'>Volume</option>
            <option value='ldcp'>LDCP</option>
          </select>
          </div>
        </div>


        <div className="d-flex justify-content-center mb-2 mt-2" style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          margin: "auto",
          maxWidth: "50vw",
          whiteSpace: "nowrap",
        }}>
        <div>
          <button type="button" className="btn btn-primary mt-2 mb-2" style={{order: "1", marginLeft:"5rem"}} onClick={handleClick}>
              1 year</button>
        </div>
        <div>
          <button type="button" className="btn btn-primary mt-2 mb-2" style={{order: "2", marginLeft:"5rem"}} onClick={handleClick}>
              6 months</button>
        </div>
        <div>
          <button type="button" className="btn btn-primary mt-2 mb-2" style={{order: "3", marginLeft:"5rem"}} onClick={handleClick}
          >1 month</button>
        </div>
        <div>
          <button type="button" className="btn btn-primary mt-2 mb-2" style={{order: "4", marginLeft:"5rem"}} onClick={handleClick}
          >1 week</button>
        </div>
         </div>
    <div id="chart-div" style={{
      display: "flex",
      margin:"auto",
      justifyContent: "center",
      height: "50%",
      width: "100%"
      }}>
      <Chart id="responsive-chart"
             options={options}
             series={dataSeries}
             type="line"
             width="1500"
             height="500"
      />
    </div>
      </div>
        )}
      </div>
  );
}

export default Graph;
