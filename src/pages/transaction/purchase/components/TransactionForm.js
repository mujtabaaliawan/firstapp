import {Form} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";
import GetStockDetail from "../services/getStockDetail";

function TransactionForm(props){
    let formik = props.formik;
    let companies = props.companies;
    let currentPrice = props.currentPrice;
    let availableStock = props.availableStock;
    let token = props.token;
    let setStockID = props.setStockID;
    let setCurrentPrice = props.setCurrentPrice;
    let setAvailableStock = props.setAvailableStock;

    return (
            <div className={'container-fluid d-flex justify-content-center mt-2 mb-2 w-50'}>
                <Form onSubmit={formik.handleSubmit}>
                    <div className={`form-control mb-3 ${formik.touched.companyName && 
                    formik.errors.companyName ? 'border-red-400' : 'border-gray-300'}`}>
          <Form.Label>Company Name</Form.Label>
          <Form.Select className="form-control mt-2 mb-2" id="company_name" value={formik.values.companyName}
                       onChange = {(event) =>{ GetStockDetail(token, setStockID,
                           event.target.value, setCurrentPrice, setAvailableStock)}}>
            <option value="">Select Company</option>
            {companies.map((companyName, index) => (
                <option key={index} value={companyName}>{companyName}</option>
            ))}
          </Form.Select>
            {formik.touched.companyName && formik.errors.companyName && (
                <span className='text-red-400'>{formik.errors.email}</span> )}
          </div>

              <div className={"form-control mb-3"}>
                  <Form.Label htmlFor="currentPrice" className="form-label">Current Price</Form.Label>
                  <Form.Control type="number" className="form-control" id="currentPrice"
                                value={currentPrice} readOnly />
              </div>

              <div className={"form-control mb-3"}>
                  <Form.Label htmlFor="availableStock" className="form-label">Available Stock</Form.Label>
                  <Form.Control type="number" className="form-control" id="availableStock"
                                value={availableStock} readOnly />
              </div>

              <div className={`form-control mb-3
                    ${formik.touched.volume && 
                    formik.errors.volume ? 'border-red-400' : 'border-gray-300'}`}>
                  <Form.Label htmlFor="volume" className="form-label">Volume</Form.Label>
                  <Form.Control type="number" className="form-control" id="volume"
                                value={formik.values.volume}
                         onChange={formik.handleChange} />
                  {formik.touched.volume && formik.errors.volume && (
                <span className='text-red-400'>{formik.errors.volume}</span> )}
              </div>


              <div className="text-center">
                  <Button type="submit" id='button-submit' className="btn btn-primary">Submit</Button>
              </div>

                    </Form>
            </div>
    )
}
export default TransactionForm;