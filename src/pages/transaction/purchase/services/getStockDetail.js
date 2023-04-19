import axios from "axios";


async function GetStockDetail(token, setStockID, companyName, setCurrentPrice, setAvailableStock){

    let stockUrl = 'http://127.0.0.1:8000/stock-id-search';
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    };
    let data = {
        "company_name": companyName
    }

    let response = await axios.post(stockUrl, data, {headers: headers})
    if (response.status === 200) {
        setStockID(response.data.id)
        setCurrentPrice(response.data.current)
        setAvailableStock(response.data.available_stock)
    }
    return (
        <div>

        </div>
    );
}


export default GetStockDetail;