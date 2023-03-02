import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';
import {increase_transaction} from "../features/transaction/transactionSlice";

function TransactionNew() {

    const token = useSelector((state) => state.token.value);
    const [stockid, setStockID] = useState('');
    const [nature, setNature] = useState('');
    const [volume, setVolume] = useState('');
    const [page_changer, setPageChanger] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = 'New Transaction';
        }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8000/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({'stock_detail_id':stockid, 'nature':nature, 'volume_transacted':volume})
        })
            .then(response => {
                if (response.status === 201) {
                    dispatch(increase_transaction);
                    setPageChanger(true);
                }
            })
    }
    if(page_changer===true) {
        return <Navigate to="/transactionlist"/>;
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="text-center">
                        <h1>Create New Transaction</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="stockid" className="form-label">StockID</label>
                            <input type="number" className="form-control" id="stockid" value={stockid} onChange={(event) => setStockID(event.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nature" className="form-label">Nature</label>
                            <input type="text" className="form-control" id="nature" value={nature} onChange={(event) => setNature(event.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="volume" className="form-label">Volume</label>
                            <input type="number" className="form-control" id="volume" value={volume} onChange={(event) => setVolume(event.target.value)} required />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TransactionNew;