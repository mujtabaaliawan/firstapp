import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase_favourite} from "../features/favourite/favouriteSlice";
import { Navigate } from 'react-router-dom';
import useDocumentName from "../hooks/documentname";

function FavouriteCustom() {

    const token = useSelector((state) => state.token.value);
    const dispatch = useDispatch()
    const [company_id, setCompanyID] = useState('');
    const [monitor_field, setMonitorField] = useState('');
    const [maximum_limit, setMaximumLimit] = useState('');
    const [minimum_limit, setMinimumLimit] = useState('');
    const [page_changer, setPageChanger] = useState(false);
    const markedCompany = useSelector((state) => state.favouriteCompany.value);

    useDocumentName('Mark Favourite');

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/name-id-search';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({"company_name": markedCompany})
        })
            .then(response => response.json())
            .then(data => setCompanyID(data.id));
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://127.0.0.1:8000/favourite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({'company_id':company_id, 'monitor_field':monitor_field,
                'maximum_limit':maximum_limit, 'minimum_limit': minimum_limit})
        })
            .then(response => {
                if (response.status === 201) {
                    dispatch(increase_favourite);
                    setPageChanger(true);
                }
            })
    }

    if(page_changer===true) {
        return <Navigate to="/favouritelist"/>;
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="text-center">
                        <h1>Create New Favourite</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="company_name" className="form-label">Company Name</label>
                            <input type="text" className="form-control" id="company_name" value={markedCompany} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="monitor_field" className="form-label">Monitor Field</label>
                            <select className="form-control mt-2 mb-2" id="field" value={monitor_field}
                                    onChange={(event) => setMonitorField(event.target.value)}>
                                <option value=''>Select Field</option>
                                <option value='current'>Current</option>
                                <option value='open'>Open</option>
                                <option value='high'>High</option>
                                <option value='low'>Low</option>
                                <option value='change'>Change</option>
                                <option value='volume'>Volume</option>
                                <option value='ldcp'>LDCP</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="maximum_limit" className="form-label">Maximum Limit</label>
                            <input type="number" className="form-control" id="maximum_limit" value={maximum_limit} onChange={(event) => setMaximumLimit(event.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="minimum_limit" className="form-label">Minimum Limit</label>
                            <input type="number" className="form-control" id="minimum_limit" value={minimum_limit} onChange={(event) => setMinimumLimit(event.target.value)} required />
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

export default FavouriteCustom;