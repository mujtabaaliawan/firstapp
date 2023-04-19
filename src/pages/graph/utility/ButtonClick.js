import CompanyGraph from "../services/CompanyGraph";

function ButtonClick(token, field, duration, currentDate, dateTimeOptions,
                            company_id, currentDateTime, setXValues, setYValues){
    let newDateTime;

    switch (duration) {
      case '1-year':
        newDateTime = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(),
            currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
        break;
      case '6-months':
        newDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6,
            currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
        break;
      case '1-month':
        newDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1,
            currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
        break;
      case '1-week':
        newDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(),
            currentDate.getDate() - 7, currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
        break;
      default:
        newDateTime = currentDate.toLocaleString('en-US', dateTimeOptions).replace(
            /[/]/g, '-');
        break;
    }
    CompanyGraph (token, company_id, newDateTime, currentDateTime, field, setXValues, setYValues);
}

export default ButtonClick;