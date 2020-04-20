import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import {
    message,
    notification,
    Input,
    Upload,
    Button
  } from 'antd'
  import * as Icon from 'react-feather';
import {ModalContext} from "../../../context/ModalContext"
import {KycContext} from "../../../context/KycContext"
//  Validation
import { Formik,  Form, ErrorMessage } from "formik";
import * as Yup from "yup";




const AddDirector = (props)=> {

    const context = useContext(ModalContext)
    const {modalClose}= context
    const kycContext = useContext(KycContext)
    const {kyc, setKyc}= kycContext
    const { directors } = kyc


    const [newDirector, setNewDirector] =useState({
     image:null,
      firstName:'',
      lastName:'',
      director_pin:'',
      id_number: '',
      email:'',
      contact:'',
      address:''

    });

    // const [image, setImage] = useState(null);

    const {image, firstName, lastName,director_pin,id_number,email,contact,address}= newDirector;

    const item= {
      image,
      name: `${firstName + ""+ lastName}`,
      director_pin,
      id_number,
      email,
      contact,
      address
      
    }

    const openNotification = () => {
      notification.open({
        message: 'Success',
        description:
          'Director added successfully',
        onClick: () => {
          console.log('Notification Clicked!')
        },
      })
    }

    const handleAddRow = (e)=>{
      // e.preventDefault()

      setKyc({ ...kyc, directors:[...directors,item]})
   
    }

    // handle upload image
    const fileUpload = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
   
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          console.log("this is the file"+ JSON.stringify(info.file))
          setNewDirector({...newDirector, image :JSON.stringify(info.fileList)})
          message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      },
    }


    const success=()=>{
      return(
        openNotification(),
        modalClose(),
        handleAddRow()
      )
    }
 
    // const onChangeFileHandler=(e)=>{
    //   // setImage(e.target.files[0])
    //   console.log(e.target.files[0])
    // }
  

      const handleChange = (evt) => {
    const value = evt.target.value;
    setNewDirector({
      ...newDirector,
      [evt.target.name]: value,
    });
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
            <Modal.Title><h5  className="text-grey">Add Director</h5></Modal.Title>
          </Modal.Header>
          <Modal.Body>
     
          <Form className="login-form" >
          <div className="form-group ">
              <Upload {...fileUpload} >
                <Button>
                  <Icon.Upload size={14}  className="mr-2"/> 
                  Upload Photo
                </Button>
              </Upload>
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