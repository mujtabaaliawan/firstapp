import {Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React from "react";
import styles from "../styles/styles";
import {Button} from "react-bootstrap";

function UserForm(props){

    const formik = props.formik;
    const { FormBox, SubmitButton } = styles();

    return (
        <div as={FormBox}>
        <Row>
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
                  <div className={"ml-5"}>
                    <Button as={SubmitButton} type="submit" id='submit-button' className="btn-primary">Register</Button>
                  </div>
                  </Row>
            </Form>
                </Row>
            </div>
    )
}

export default UserForm;