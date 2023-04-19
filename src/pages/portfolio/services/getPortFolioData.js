import axios from "axios";

async function PortFolioData(token, setPortFolioData){

        const portfolioUrl = 'http://127.0.0.1:8000/trader-profit';
        const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }

        let PortFolioDataResponse = await axios.get(portfolioUrl, { headers: headers})
        setPortFolioData(PortFolioDataResponse.data);
    }

export default PortFolioData;