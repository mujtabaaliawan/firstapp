import {Form} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";
import GetSaleStockDetail from "../services/getSaleStockDetail";

function TransactionSaleForm(props){
    let formik = props.formik;
    let companies = props.companies;
    let currentPrice = props.currentPrice;
    let traderStock = props.traderStock;
    let token = props.token;
    let setStockID = props.setStockID;
    let setCurrentPrice = props.setCurrentPrice;
    let setTraderStock = props.setTraderStock;
    let setSelectedStock = props.setSelectedStock;

    return (
            <div>
                <Form onSubmit={formik.handleSubmit}>
                    <div className={`form-control mb-3 ${formik.touched.companyName && 
                    formik.errors.companyName ? 'border-red-400' : 'border-gray-300'}`}>
          <Form.Label>Company Name</Form.Label>
          <Form.Select className="form-control mt-2 mb-2" id="company_name" value={formik.values.companyName}
                       onChange = {(event) =>{ GetSaleStockDetail(token, setStockID,
                           event.target.value, setCurrentPrice, setTraderStock)}}>
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
                  <Form.Label htmlFor="stockName" className="form-label">Stocks</Form.Label>
                  <Form.Select type="number" className="form-control" id="sale_stock"
                                onChange={(event) => setSelectedStock(event.target.value)}
                                value={formik.values.saleStock}>
                  <option value="">Select Stock</option>
                                {traderStock.map((stockName, index) => (
                                    <option key={index} value={stockName}>{stockName}</option>
                                ))}
                  </Form.Select>
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
export default TransactionSaleForm;