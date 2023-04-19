import axios from "axios";

async function FilterSearchResults(token, searchQuery,
                             setSearchData, setDisplaySearchResults) {
    let searchUrl = `http://127.0.0.1:8000/market-search?name=${searchQuery}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }

    let response = await axios.get(searchUrl, {headers: headers})
    setSearchData(response.data);
    setDisplaySearchResults(true);

}

export default FilterSearchResults;