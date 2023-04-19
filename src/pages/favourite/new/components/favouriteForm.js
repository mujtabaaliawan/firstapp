import {Form} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";

function FavouriteForm(props){
    let formik = props.formik;
    let companies = props.companies;
    let fields = props.fields;

    return (
            <div>
                <Form onSubmit={formik.handleSubmit}>
                    <div className={`form-control mb-3 ${formik.touched.companyName && 
                    formik.errors.companyName ? 'border-red-400' : 'border-gray-300'}`}>
          <Form.Label>Company Name</Form.Label>
          <Form.Select className="form-control mt-2 mb-2" id="company_name" value={formik.values.companyName}
                  onChange = {formik.handleChange}>
            <option value="">Select Company</option>
            {companies.map((companyName, index) => (
                <option key={index} value={companyName}>{companyName}</option>
            ))}
          </Form.Select>
            {formik.touched.companyName && formik.errors.companyName && (
                <span className='text-red-400'>{formik.errors.email}</span> )}
          </div>

          <div className={`form-control mb-3
                    ${formik.touched.field && 
                    formik.errors.field ? 'border-red-400' : 'border-gray-300'}`}>
          <Form.Label>Field</Form.Label>
          <Form.Select className="form-control mt-2 mb-2" id="field" value={formik.values.field}
              onChange={formik.handleChange}>
              <option value="">Select Field</option>
              {fields.map((fields, index) => (
              <option value={fields} key={index}>{fields}</option>
                  ))}
          </Form.Select>
              {formik.touched.field && formik.errors.field && (
                <span className='text-red-400'>{formik.errors.companyName}</span> )}
          </div>

              <div className={`form-control mb-3
                    ${formik.touched.maximumLimit && 
                    formik.errors.maximumLimit ? 'border-red-400' : 'border-gray-300'}`}>
                  <Form.Label htmlFor="maximumLimit" className="form-label">Maximum Limit</Form.Label>
                  <Form.Control type="number" className="form-control" id="maximumLimit"
                                value={formik.values.maximumLimit}
                         onChange={formik.handleChange} />
                  {formik.touched.maximumLimit && formik.errors.maximumLimit && (
                <span className='text-red-400'>{formik.errors.maximumLimit}</span> )}
              </div>


              <div className={`form-control mb-3
                    ${formik.touched.minimumLimit && 
                    formik.errors.minimumLimit ? 'border-red-400' : 'border-gray-300'}`}>
                  <Form.Label htmlFor="minimumLimit" className="form-label">Minimum Limit</Form.Label>
                  <Form.Control type="number" className="form-control" id="minimumLimit"
                                value={formik.values.minimumLimit}
                         onChange={formik.handleChange} />
                  {formik.touched.minimumLimit && formik.errors.minimumLimit && (
                <span className='text-red-400'>{formik.errors.minimumLimit}</span> )}
              </div>


              <div className="text-center">
                  <Button type="submit" id='button-submit' className="btn btn-primary">Submit</Button>
              </div>
                    </Form>
            </div>
    )
}
export default FavouriteForm;