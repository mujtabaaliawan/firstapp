import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';
import {increase_transaction} from "../features/transaction/transactionSlice";
import {clear_transaction_company} from "../features/transaction-company/transactionCompanySlice";


function TransactionCustom() {

    const token = useSelector((state) => state.token.value);
    const isSubscribed = useSelector((state) => state.subscription.value);
    const [stock_id, setStockID] = useState('');
    let nature = "purchase";
    const [volume, setVolume] = useState('');
    const [page_changer, setPageChanger] = useState(false);
    const [currentPrice, setCurrentPrice] = useState('')
    const [availableStock, setAvailableStock] = useState('');
    const dispatch = useDispatch();
    let markedCompany = useSelector((state) => state.transactionCompany.value);

    useEffect(() => {
        document.title = 'Perform Transaction';
    });

    useEffect( () => {
        const url = 'http://127.0.0.1:8000/stock-id-search';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({"company_name": markedCompany})
        })
            .then(response => response.json())
            .then(data => {
                setStockID(data.id)
                setCurrentPrice(data.current)
                setAvailableStock(data.available_stock)
      })
    }, [markedCompany, token])

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8000/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({'stock_detail_id':stock_id, 'nature':nature, 'volume_transacted':volume})
        })
            .then(response => {
                if (response.status === 201) {
                    dispatch(increase_transaction());
                    dispatch(clear_transaction_company());
                    setPageChanger(true);
                }
            })
    }

    if(page_changer===true) {
        return <Navigate to="/transactionlist"/>;
    }

    return (
        <div>
            { isSubscribed && (
        <div>
        { stock_id && currentPrice && (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="text-center">
                        <h1>Create New Transaction</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="company_name" className="form-label">Company Name</label>
                            <input type="text" className="form-control" id="company_name" value={markedCompany} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nature" className="form-label">Nature</label>
                            <input type="text" className="form-control mt-2 mb-2" id="field" value={nature} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="current" className="form-label">Current Value</label>
                            <input type="text" className="form-control" id="current_value" value={currentPrice} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="available_stock" className="form-label">Available Stock Volume</label>
                            <input type="text" className="form-control" id="available_stock" value={availableStock} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="volume" className="form-label">Volume</label>
                            <input type="number" className="form-control" id="volume" value={volume} onChange={(
                                event) => setVolume(event.target.value)} required />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )}
        </div>
            )}
        </div>
    );
}

export default TransactionCustom;