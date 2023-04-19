import {Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";

function UserForm(props){

    const formik = props.formik;


    return (
        <Row id={'box'}>
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Form.Group className="mb-3 mt-5">
                    <Form.Control type="email" className={`form-control 
                    ${formik.touched.email && 
                    formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
                           id="email" value={formik.values.email}
                           onChange={formik.handleChange}
                           placeholder={"Email"} />
                      {formik.touched.email && formik.errors.email && (
                          <span className='text-red-400'>{formik.errors.email}</span> )}
                  </Form.Group>
                </Row>
              <Row>
                  <div className="mb-4">
                    <input type="password"
                           className={`form-control ${formik.touched.password &&
                           formik.errors.password ? 'border-red-400' : 'border-gray-300'}`}
                           id="password" value={formik.values.password}
                           onChange={formik.handleChange}
                           placeholder={"Password"} />
                      {formik.touched.password && formik.errors.password && (
                          <span className='text-red-400'>{formik.errors.password}</span> )}
                  </div>
                  <div>
                    <Button type="submit" id='submit-button' className="btn btn-primary">Register</Button>
                  </div>
                  </Row>
            </Form>
                </Row>
    )
}

export default UserForm;