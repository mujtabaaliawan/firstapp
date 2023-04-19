import {useState} from "react";

function Selectors (){
    const [marketData, setMarketData] = useState([]);
    const [field] = useState('id');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [marketDate, setMarketDate] = useState('');
    const [searchField] = useState('id');
    const [displaySearchResults, setDisplaySearchResults] = useState(false);
    return {
        marketData, setMarketData, field, searchQuery, setSearchQuery, searchData, setSearchData,
        marketDate, setMarketDate, searchField, displaySearchResults, setDisplaySearchResults

    }
}
export default Selectors;