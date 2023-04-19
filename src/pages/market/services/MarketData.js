import axios from "axios";

async function LatestMarketData(token, field, setMarketData, setMarketDate){

        const marketUrl = `http://127.0.0.1:8000/latest_stock?field=${field}`;
        const marketDateUrl = 'http://127.0.0.1:8000/stock_date';
        const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }

        let marketDataResponse = await axios.get(marketUrl, { headers: headers})
        setMarketData(marketDataResponse.data);

        let marketDateResponse = await axios.get(marketDateUrl, { headers: headers})
        setMarketDate(marketDateResponse.data['latest_time'].replace('T',' '))
    }

export default LatestMarketData;