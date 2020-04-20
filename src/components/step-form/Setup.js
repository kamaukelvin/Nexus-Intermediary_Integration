import React,{useContext} from 'react'
import {KycContext} from '../../context/KycContext'
import { Upload, message, Button } from 'antd'
import 'antd/dist/antd.css';
import * as Icon from 'react-feather';
import {ModalContext} from '../../context/ModalContext'
import AddDirector from '../widgets/modals/AddDirector'
import '../../assets/css/dashboard.css'



export default function Finish(props) {

  // MODAL CONTEXT

  const modalContext = useContext(ModalContext)
  const {setModalShow, modalShow, modalClose} =modalContext

  // KYC CONTEXT
  const context = useContext(KycContext)
  const {kyc, setKyc}= context
  const {pin, certificate, directors } = kyc

  const abc = {
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
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

 

  // const handleChange = (evt) => {
  //   const value = evt.target.value;
  //   setKyc({
  //     ...kyc,
  //     [evt.target.name]: value,
  //   });
  // }
  // const handleRowChange=(index)=>e=>{
  //     const {name, value} =e.target;
  //     const rows = [...directors];
  //     rows[index]={...rows[index],[name]:value};
  //     setKyc({ ...kyc, directors:rows})
  //   }
  
    const handleRemoveRow=(index)=>(e)=>{
      e.preventDefault()
      const rows = [...directors]
      rows.splice(index,1)
      setKyc({...kyc, directors:rows})
    }

    const onChangeFileHandler=(e)=>{
      setKyc({...kyc, certificate :e.target.files[0]})
      console.log(e.target.files[0])
    }
  
  
 
 
    return (
     <>

      <h6 className="info-text pt-5 mb-5 text-center">
          Almost Done!
      </h6>
  
                          
                              <div className="row">
                                <div className="col-md-6">
                                {/* <div className="form-group label-floating">
                                <label className="control-label">Pin Number</label>
                                <input 
                                name="pin" 
                                type="text"
                                className="form-control border" 
                                onChange={handleChange}
                                value={pin}
                               
                                /> */}
                           
                            <div className="form-group ">
                                <Upload {...abc}>
                                  <Button>
                                    <Icon.Upload size={14}  className="mr-2"/> 
                                    Upload Incorporation Certificate
                                  </Button>
                                </Upload>
                            </div>
                            <div className="form-group ">
                                <Upload {...abc}>
                                  <Button>
                                  <Icon.Upload size={14}  className="mr-2"/> 
                                    Upload KRA Pin
                                  </Button>
                                </Upload>
                            </div>
                            <div className="form-group ">
                                <Upload {...abc}>
                                  <Button>
                                  <Icon.Upload size={14}  className="mr-2"/> 
                                    Upload CR 12
                                  </Button>
                                </Upload>
                            </div>

                                </div>
                                <div className="col-md-6">
                                <div className="form-group ">
                                <Upload {...abc}>
                                  <Button>
                                  <Icon.Upload size={14}  className="mr-2"/> 
                                  Upload Practising License
                                  
                                  </Button>
                                </Upload>
                                </div>
                                <div className="form-group ">
                                <Upload {...abc}>
                                  <Button>
                                  <Icon.Upload size={14}  className="mr-2"/> 
                                    Upload License Certificate
                                  </Button>
                                </Upload>
                                </div>
                                <div className="form-group ">
                                <Upload {...abc}>
                                  <Button>
                                  <Icon.Upload size={14}  className="mr-2"/> 
                                  Upload Mou
                                  </Button>
                                </Upload>
                                </div>
                              

                                </div>
                              </div>
                       
                            <h6 className="pt-3">Add Company Directors:</h6>
                            <button id="add_row" onClick={() => setModalShow(true)} class="btn btn-outline-primary  btn-sm py-2 float-right mb-3"><i className="fa fa-plus-circle pr-2"/>Add Director</button>
                            <AddDirector show={modalShow} onHide={modalClose} />
                  
                    <table className="table table-bordered table-hover" id="tab_logic">
                              <thead className="bg-light">

                                <tr >
                                  <th className="">
                                    Image
                                  </th>
                                  <th className="">
                                 Name
                                  </th>
                                  <th className="">
                                 ID/Passport
                                  </th>
                                  <th className="text-center">
                             Pin No.
                                  </th>
                                  <th className="text-center">
                                Phone
                                  </th>
                                  <th className="text-center">
                                Email
                                  </th>
                                  <th className="text-center">
                                Address
                                  </th>
                                  <th className="text-center"/>
                                   
                               
                                </tr>
                              </thead>
                              <tbody>
                                {directors.map((director, index)=>{
                                  return(
                                  <tr >
                                    {/* <td className="text-center"></td> */}
          
                                    <td className="text-center">
                                    <div className="profile-thumbnail">
                                    <img src="https://via.placeholder.com/100x100" className="img-fluid wd-35 ht-35 rounded-circle" alt="" />
                                  </div>
                                      </td>
                               
                                    <td className="text-center">
                                      {director.name}
                                    </td>
                                    <td className="text-center">
                                 {director.id_number}
                                    </td>
                                    <td className="text-center">
                                   {director.director_pin}
                                    </td>
                                    <td className="text-center">
                                   {director.contact}
                                    </td>
                                    <td className="text-center">
                                   {director.email}
                                    </td>
                                    <td className="text-center">
                                  {director.address}
                                    </td>
                                    <td className="text-center">
                                    <button
                                      className="btn btn-outline-none btn-xs"
                                      onClick={handleRemoveRow(index)}
                                        >
                                          <i className="fa fa-trash text-danger"></i>
                                         
                        </button>
                                    </td>
                                  </tr>
                                )})}
                              
                              </tbody>
                            </table>
              
          
                </>
   
    )
}
