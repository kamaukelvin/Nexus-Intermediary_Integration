import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { Upload, message} from 'antd'
import * as Icon from 'react-feather';
import '../../../assets/css/dashboard.css'

import {ModalContext} from "../../../context/ModalContext"
import {KycContext} from "../../../context/KycContext"


//  Validation
import { Formik,  Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


const AddDirector = (props)=> {

    const context = useContext(ModalContext)
    const {modalClose}= context
    const kycContext = useContext(KycContext)
    const {kyc, setKyc, image, setImage }= kycContext
    const { directors } = kyc



    // states
    const [newDirector, setNewDirector] =useState({

      firstName:'',
      lastName:'',
      director_pin:'',
      id_number: '',
      email:'',
      contact:'',
      address:''

    });

// destructure
    const { firstName, lastName,director_pin,id_number,email,contact,address}= newDirector;

    const item= {
      
      name: `${firstName + ""+ lastName}`,
      director_pin,
      id_number,
      email,
      contact,
      address
      
    }

    const handleAddRow = (e)=>{
      // e.preventDefault()
      setKyc({ ...kyc, directors:[...directors,item]})
    }

    const success=()=>{
      return(
        modalClose(),
        handleAddRow()
  
      )
    }

    const handleChange = (evt) => {
    const value = evt.target.value;
    setNewDirector({
      ...newDirector,
      [evt.target.name]: value,
    });
  }

  // start

  // const [defatFileList, setDefaultFileList] = useState([]);
  // const [progress, setProgress] = useState(0);

  const uploadImage = async options => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiI3IiwidXNlcl9pZCI6MjY1LCJyb2xlX2NvZGUiOiJJTl9BRE1fUkxfMDAxIiwidXNlcl90eXBlIjoiSU5URVJNRURJQVJZIiwiaWF0IjoxNTg3MDI2OTc5LCJleHAiOjE1ODk2MTg5NzksImF1ZCI6IkNsaWVudF9JZGVudGl0eSIsImlzcyI6Ik5leHVzIiwic3ViIjoiaW5mb0BuZXh1cy5rZSJ9.BK2Rs61mEoeaplDVU_kK0wokfGPwZ5m2j0S_lGXwiYOjQCawwrwbiCD-B3of3mmw0si8MG5Gcgl34Z8fg3G1QwQe9SO2YREdeyB9caWkS75gYvf9HxOeIKZXJ4KXkvXrwcV2Vic0pyCUDZpXxFqz5C2yuFqPEPvNSr-36trBGyepC8l35I36A45GBD5dseBD0PC_SxCDI751OGQbxvi01oUv8_KtJwPoI7qo0yKpx1V4XFM4BpKREk9gsyjAaqCNpJzSD4bu3-BwqaIYsho2H5Zi32Iv8pmzHJGtRl68GZQM4xeyENKjkA5vNlJGPaiySXOOybrLMsdJn3T2NXyjMQ"
     
     },
    };
    fmData.append("image", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
    } catch (err) {
      console.log("Eroor: ", err);
      
      onError({ err });
    }
  };

  const handleOnChange = ({ file, fileList, event }) => {

    setImage(fileList);
  
  };

  const beforeUpload = (file) => {
    // if (!/jpe?g|png$/.test(file.type)) {
    //     // message.error('Picture format error');
    //     file.flag=true;
    //     return false;
    // }
    const isLt1M = file.size / 1024  < 1;
    if (!isLt1M) {
      message.error('Picture size more than limit(2M)')
        file.flag=true;
        return false;
    }
    return true;
}
  
 

    return (
      <Formik
        enableReinitialize
        initialValues={newDirector}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required("First Name is required"),
          lastName: Yup.string()
            .required("Last Name is required"),
        image: Yup.string()
            .required("image is required"),
            director_pin: Yup.string()
              .required("KRA Pin is required"),
            
          id_number: Yup.string()
            .required("ID Number is required"),
          contact: Yup.string()
            .required("Phone Number is required"),
          address: Yup.string()
            .required("Physical address is required"),
          email: Yup.string()
            .email("Enter a valid email")
            .required("Password is required"),
 
        })}
        onSubmit={() => success()}
      >
        {({ errors, touched }) => (
      <div>
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title><h5  className="text-grey">Add a Director</h5></Modal.Title>
          </Modal.Header>
          <Modal.Body>
     
          <Form className="login-form" enctype="multipart/form-data">
          <div className="form-group ">
            <p className="text-center"> Director's image</p>
                <Upload
                  accept="image/*"
                  multiple= {false}
                  customRequest={uploadImage}
                  beforeUpload={beforeUpload}
                  onChange={handleOnChange}
                  listType="picture-card"
                  defaultFileList={image}
                  className="image-upload-grid">
        {image.length >= 1 ? null : <div><Icon.Edit2 size={18}/></div>}
        </Upload>
        {/* {progress > 0 ? <Progress percent={progress} /> : null} */}
          </div>
        
      
                  <div className="form-row">
           <div className="col-md-6">
                    <div className="form-group ">
                      <label htmlFor="firstName">First Name</label>
                        <input
                  
                          name="firstName"
                          type="text"
                          value={newDirector.firstName}
                          // value={directors[index].image}
                          // onChange={handleChange(index)}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.firstName && touched.firstName ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name='firstName'
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                 
        </div>
           <div className="col-md-6">
                    <div className="form-group ">
                      <label htmlFor="lastName">Last Name</label>
                        <input
                          name="lastName"
                          type="text"
                          value={newDirector.lastName}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.lastName && touched.lastName ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                 
        </div>
        </div>
                 
                  <div className="form-group mt-0 ">
                      <label htmlFor="username">Email</label>
                        <input
                          name="email"
                          type="text"
                          value={newDirector.email}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.username && touched.username ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                    <div className="form-row">
                    <div className="col-md-6">
                  <div className="form-group mt-0">
                      <label htmlFor="password">KRA Pin</label>
                        <input
                          name="director_pin"
                          type="text"
                          value={newDirector.director_pin}
                          onChange={handleChange}
                          className={
                            "form-control border password-input" +
                            (errors.director_pin && touched.director_pin ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="director_pin"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                  <div className="form-group mt-0">
                      <label htmlFor="id">ID Number</label>
                        <input
                          name="id_number"
                          type="text"
                          value={newDirector.id_number}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.id_number && touched.id_number ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="id_number"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                    </div>
                    </div>
                    <div className="form-group mt-0 ">
                      <label htmlFor="username">Contact</label>
                        <input
                          name="contact"
                          type="text"
                          value={newDirector.contact}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.contact && touched.contact ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="contact"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                    <div className="form-group mt-0 ">
                      <label htmlFor="username">Address</label>
                        <input
                          name="address"
                          type="text"
                          value={newDirector.address}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.address && touched.address ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
              
                
                </Form>
            
          </Modal.Body>
          <Modal.Footer> 
            <button
              color="primary"
              variant="contained"
              // type="submit"
              onClick={success}
              className="btn btn-outline-success px-5 mx-auto "
            >Submit
            </button> 
          </Modal.Footer>
        </Modal>
      </div>
        )}
      </Formik>
    );
  }

export default AddDirector