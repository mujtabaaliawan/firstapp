import axios from "axios";


async function GetSaleStockDetail(token, setStockID, companyName, setCurrentPrice, setTraderStock){

    let stockUrl = 'http://127.0.0.1:8000/stock-id-search';
    let companyIDUrl = 'http://127.0.0.1:8000/name-id-search';
    let traderStockUrl = 'http://127.0.0.1:8000/trader-stock';

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
    }


    let companyIDresponse = await axios.post(companyIDUrl, data, {headers: headers})
    if (companyIDresponse.status === 200) {
        let stockData = {
            "company_id": companyIDresponse.data.id
        }
        let traderStockResponse = await axios.post(traderStockUrl, stockData, {headers: headers})
        if (traderStockResponse.status === 200) {
            setTraderStock(traderStockResponse.data)
        }
    }

    return (
        <div>

        </div>
    );
}


export default GetSaleStockDetail;