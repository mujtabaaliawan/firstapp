import React from "react";
import {Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function ProfileEditBox(props){

    let formik = props.formik
    let setTraderImage = props.setTraderImage

    function handleImageChange(imageFile){
        setTraderImage(imageFile);
    }

    return (
    <div className="container mt-5 d-flex justify-content-center">
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Form.Group className="mb-3 mt-5">
                      <Form.Control type={"file"} className={'form-control'}
                           id="profile-picture" onChange={(event) => handleImageChange(event.target.files[0])}
                           placeholder={"Upload new Profile Picture"} />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3 mt-5">
                    <Form.Control type="text" className={`form-control 
                    ${formik.touched.name && 
                    formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
                           id="name" value={formik.values.name}
                           onChange={formik.handleChange}
                           placeholder={"Name"} />
                      {formik.touched.name && formik.errors.name && (
                          <span className='text-red-400'>{formik.errors.name}</span> )}
                  </Form.Group>
                </Row>
              <Row>
                <Row>
                  <Form.Group className="mb-3 mt-5">
                    <Form.Control type="text" className={`form-control 
                    ${formik.touched.mobile_number && 
                    formik.errors.mobile_number ? 'border-red-400' : 'border-gray-300'}`}
                           id="mobile_number" value={formik.values.mobile_number}
                           onChange={formik.handleChange}
                           placeholder={"Mobile Number"} />
                      {formik.touched.mobile_number && formik.errors.mobile_number && (
                          <span className='text-red-400'>{formik.errors.mobile_number}</span> )}
                  </Form.Group>
                </Row>
                  <div>
                    <Button type="submit" id='submit-button' className="btn btn-primary">Update</Button>
                  </div>
                  </Row>
            </Form>
        </div>
    )

}

export default ProfileEditBox;