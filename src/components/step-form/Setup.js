import React,{useContext} from 'react'
import {KycContext} from '../../context/KycContext'
import { Upload, message, Button } from 'antd'
import 'antd/dist/antd.css';
import * as Icon from 'react-feather';



export default function Finish(props) {

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

  const context = useContext(KycContext)
  const {kyc, setKyc}= context
  const {pin, certificate, directors } = kyc

  const handleChange = (evt) => {
    const value = evt.target.value;
    setKyc({
      ...kyc,
      [evt.target.name]: value,
    });
  }
  const handleRowChange=(index)=>e=>{
      const {name, value} =e.target;
      const rows = [...directors];
      rows[index]={...rows[index],[name]:value};
      setKyc({ ...kyc, directors:rows})
    }
    const handleAddRow = (e)=>{
      e.preventDefault()
      const item ={
        image:null,
        director_name:'',
        id: '',
        email:'',

      };
      setKyc({ ...kyc, directors:[...directors,item]})
   
    }
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
                            <button id="add_row" onClick={handleAddRow} class="btn btn-info text-white btn-sm py-2 float-right mb-3"><i className="fa fa-plus-circle pr-2"/>Add Director</button>
                  
                  
                    <table className="table table-bordered table-hover" id="tab_logic">
                              <thead className="bg-light">

                                <tr >
                                  <th Name="">
                                    #
                                  </th>
                                  <th class="">
                                 Name
                                  </th>
                                  <th class="">
                                 ID/Passport
                                  </th>
                                  <th class="text-center">
                                Email
                                  </th>
                                  <th class="text-center"/>
                                   
                               
                                </tr>
                              </thead>
                              <tbody>
                                {directors.map((director, index)=>{
                                  return(
                                  <tr key={index}>
                                    {/* <td className="text-center"></td> */}
                                    <td className="">
                                    <input
                                        type="text"
                                        name="director_name"
                                        value={directors[index].name}
                                        onChange={handleRowChange(index)}
                                        className="form-control"
                                      />
                                    </td>
                                    <td className="text-center">
                                    <input
                                        type="text"
                                        name="email"
                                        value={directors[index].email}
                                        onChange={handleRowChange(index)}
                                        className="form-control"
                                      />
                                    </td>
                                    <td className="text-center">
                                    <button
                                      className="btn btn-outline-danger btn-xs"
                                      onClick={handleRemoveRow(index)}
                                        >
                                          <i className="fa fa-trash"></i>
                                         
                        </button>
                                    </td>
                                  </tr>
                                )})}
                              
                              </tbody>
                            </table>
              
          
                </>
   
    )
}
