
function GraphInitialize(xValues, yValues, field, selectedCompany) {

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

  return {
    options,
    dataSeries,
  };
}
export default GraphInitialize;