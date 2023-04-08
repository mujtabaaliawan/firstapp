import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';
import {increase_transaction} from "../features/transaction/transactionSlice";
import useDocumentName from "../hooks/documentname";
import Shepherd from "shepherd.js";
import TransactionSaleSteps from "../tour/transactionSale";
import {set_tourTwo} from "../features/tour-two/tourTwoSlice";

function TransactionNew() {

    const token = useSelector((state) => state.token.value);
    const [stock_id, setStockID] = useState('');
    const [volume, setVolume] = useState('');
    const [page_changer, setPageChanger] = useState(false);
    const [saleCompanies, setSaleCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [traderStock, setTraderStock] = useState([]);
    const [selectedStock, setSelectedStock] = useState('');
    const dispatch = useDispatch();
    const isSubscribed = useSelector((state) => state.subscription.value);
    const tourPermission = useSelector((state) => state.tourMode.value);
    const [tourReady, setTourReady]  = useState(false);
    const [tourStarted, setTourStarted] = useState(false);
    const tour = new Shepherd.Tour({
        useModalOverlay: false,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark shepherd-theme-arrows',
            scrollTo: true
        }
    });

    function handleTourStart(tour){
      if (!tourStarted){
        setTourStarted(true);
        tour.start();
      }
    }

    useDocumentName('Transaction Sale', setTourReady);

    if (tourPermission && tourReady) {
        TransactionSaleSteps(tour, token, dispatch);
        dispatch(set_tourTwo());
        handleTourStart(tour);
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8000/sale-company-name', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }})
            .then(response => response.json())
            .then(data => setSaleCompanies(data))
    }, [token]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8000/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({'stock_detail_id':stock_id, 'nature':'sale', 'volume_transacted':volume,
                                'sale_stock': selectedStock})
        })
            .then(response => {
                if (response.status === 201) {
                    dispatch(increase_transaction);
                    setPageChanger(true);
                }
            })
    }

    const handleCompanyChange = (selected_company_name) => {
        setSelectedCompany(selected_company_name);
        const url = 'http://127.0.0.1:8000/stock-id-search';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({"company_name": selected_company_name})
        })
            .then(response => response.json())
            .then(data => {
                setStockID(data.id)
                setCurrentPrice(data.current)
      })

        const id_url = 'http://127.0.0.1:8000/name-id-search';
        fetch(id_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({"company_name": selected_company_name})
        })
            .then(response => response.json())
            .then(data => {

        const stock_url = 'http://127.0.0.1:8000/trader-stock';
        fetch(stock_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({"company_id": data.id})
        })
            .then(response => response.json())
            .then(data => setTraderStock(data));
    });
    };

    if(page_changer===true) {
        return <Navigate to="/transactionlist"/>;
    }

    const handleTraderStock = (selected_stockName) => {
        setSelectedStock(selected_stockName);
    }

    return (
        <div>
            { isSubscribed && (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="text-center">
                        <h1>Create New Transaction</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="company_name" className="form-label">Company Name</label>
                            <select className="form-control" id="company_name" value={selectedCompany}
                                     onChange={(event) => handleCompanyChange(event.target.value)}>
                                <option value="">Select Company</option>
                                {saleCompanies && saleCompanies.map((companyName, index) => (
                                    <option key={index} value={companyName}>{companyName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nature" className="form-label">Nature</label>
                            <input type="text" className="form-control mt-2 mb-2" id="field" value="sale" readOnly/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="current" className="form-label">Current Value</label>
                            <input type="text" className="form-control" id="current_value" value={currentPrice} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stock_name" className="form-label">Stock</label>
                            <select className="form-control" id="stock_name" value={selectedStock}
                                     onChange={(event) => handleTraderStock(event.target.value)}>
                                <option value="">Select Stock</option>
                                {traderStock.map((stockName, index) => (
                                    <option key={index} value={stockName}>{stockName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="volume" className="form-label">Volume</label>
                            <input type="number" className="form-control" id="volume" value={volume}
                                    onChange={(event) => setVolume(event.target.value)} required />
                        </div>
                        <div className="text-center">
                            <button type="submit" id={'sale-submit'} className="btn btn-primary">Sale</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            )}
        </div>
    );
}

export default TransactionNew;