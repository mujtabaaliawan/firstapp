import {Form} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";

function GraphForm(props) {

    let formik = props.formik;
    let companies = props.companies;
    let fields = props.fields;

    return (
                <div className="d-flex justify-content-center mb-2 mt-2" style={{
          display: "flex",
          flexShrink: "1",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          whiteSpace: "nowrap",
          margin: "auto",
        }}>
          <Form onSubmit={formik.handleSubmit}>
          <div className={`form-control 
                    ${formik.touched.companyName && 
                    formik.errors.companyName ? 'border-red-400' : 'border-gray-300'}`}
               style={{order: "1", marginRight: "3rem"}}>
          <Form.Label style={{fontStyle: "Bold", verticalAlign: "center"}}>Company Name</Form.Label>
          <Form.Select className="form-control mt-2 mb-2" id="company_name" value={formik.values.companyName}
                  onChange = {formik.handleChange}>
            <option value="">Select Company</option>
            {companies.map((companyName, index) => (
                <option key={index} value={companyName}>{companyName}</option>
            ))}
          </Form.Select>
            {formik.touched.companyName && formik.errors.companyName && (
                <span className='text-red-400'>{formik.errors.companyName}</span> )}
          </div>


          <div className={`form-control 
                    ${formik.touched.field && 
                    formik.errors.field ? 'border-red-400' : 'border-gray-300'}`} style={{order: "2"}}>
          <Form.Label style={{fontStyle: "Bold", verticalAlign: "center"}}>Field</Form.Label>
          <Form.Select className="form-control mt-2 mb-2" id="field" value={formik.values.field}
              onChange={formik.handleChange}>
              <option value="">Select Field</option>
              {fields.map((fields, index) => (
              <option value={fields} key={index}>{fields}</option>
                  ))}
          </Form.Select>
              {formik.touched.field && formik.errors.field && (
                <span className='text-red-400'>{formik.errors.email}</span> )}
          </div>

          <div>
              <Button type="submit" id='submit-button' className="btn btn-primary">Submit</Button>
          </div>

          </Form>
        </div>

    )
}

export default GraphForm;