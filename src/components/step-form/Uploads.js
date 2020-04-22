import React,{useContext, useState, useEffect} from 'react'
import {KycContext} from '../../context/KycContext'
import '../../assets/css/dashboard.css'
import MdCheckmarkCircleOutline from 'react-ionicons/lib/MdCheckmarkCircleOutline'
import IosCloudOutline from 'react-ionicons/lib/IosCloudOutline'
import IosAttach from 'react-ionicons/lib/IosAttach'
import IosCloudUploadOutline from 'react-ionicons/lib/IosCloudUploadOutline'
import {Upload, message} from 'antd'
import * as Icon from 'react-feather';
import axios from 'axios'




export default function Uploads() {

    const context = useContext(KycContext)
    const {kyc, setKyc, documents,setDocuments,upload}= context
  


    // upload handlers

//     const handleKraUpload = ({ fileList }) => {
//       console.log('KRA', fileList);
    
//       setDocuments({ ...documents, kra_pin: fileList });
//     };
//     const handleCR_12Upload = ({ fileList }) => {
//       console.log('CR_12', fileList);
//       setDocuments({ ...documents, cr_12: fileList });
//     };
//     const handleIncorporation_LicenseUpload = ({ fileList }) => {
//       console.log('Inc_License', fileList);
//       setDocuments({ ...documents, incorporation_certificate: fileList });
//     };
//     const handlePractising_LicenseUpload = ({ fileList }) => {
//       console.log('Pract_License', fileList);
//       setDocuments({ ...documents, practicing_license: fileList });
//     };
//     const handleLicense_CertificateUpload = ({ fileList }) => {
//       console.log('License_Cert', fileList);
//       setDocuments({ ...documents, licence_certificate: fileList });
//     };
//     const handleMoUUpload = ({ fileList }) => {
//       console.log('MoU', fileList);
//       setDocuments({ ...documents, mou: fileList });
//     };


// console.log("kra_pin" +  documents.kra_pin)

const handleOnKraChange = ({ file, fileList, event }) => {
  setDocuments({ ...documents, kra_pin: fileList });

};

const uploadKra = async options => {
  const { onSuccess, onError, file } = options;

  const fmData = new FormData();
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiI3IiwidXNlcl9pZCI6MjY1LCJyb2xlX2NvZGUiOiJJTl9BRE1fUkxfMDAxIiwidXNlcl90eXBlIjoiSU5URVJNRURJQVJZIiwiaWF0IjoxNTg3MDI2OTc5LCJleHAiOjE1ODk2MTg5NzksImF1ZCI6IkNsaWVudF9JZGVudGl0eSIsImlzcyI6Ik5leHVzIiwic3ViIjoiaW5mb0BuZXh1cy5rZSJ9.BK2Rs61mEoeaplDVU_kK0wokfGPwZ5m2j0S_lGXwiYOjQCawwrwbiCD-B3of3mmw0si8MG5Gcgl34Z8fg3G1QwQe9SO2YREdeyB9caWkS75gYvf9HxOeIKZXJ4KXkvXrwcV2Vic0pyCUDZpXxFqz5C2yuFqPEPvNSr-36trBGyepC8l35I36A45GBD5dseBD0PC_SxCDI751OGQbxvi01oUv8_KtJwPoI7qo0yKpx1V4XFM4BpKREk9gsyjAaqCNpJzSD4bu3-BwqaIYsho2H5Zi32Iv8pmzHJGtRl68GZQM4xeyENKjkA5vNlJGPaiySXOOybrLMsdJn3T2NXyjMQ"
   
   },
  };
  fmData.append("Kra", file);
  try {
    const res = await axios.post(
      "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
      fmData,
      config
    );

    onSuccess("Ok");
    console.log("server res: ", res);
  } catch (err) {
    console.log("Error: ", err);
    
    onError({ err });
  }
};


    return (
        <div>
        <h3 className="upload-title text-center mt-5">Upload Documents</h3>
        <h6 className="text-center">Please upload the documents below documents to proceed.</h6>
        <p className="font-weight-bold py-3 text-center">* Click on <Icon.UploadCloud size ={12} /> to upload respective document</p>
        <div className="passport offset-md-2">
        <ol>
          <div className="row">
         
            <div className="col-md-6">
            <h4>
             
              <li className="py-2 ">Company KRA Pin
              <span className="pl-2">
              <Upload 
              onChange={handleOnKraChange}
              accept="docx,doc,png"
              customRequest={uploadKra}
             
             >
              <Icon.UploadCloud size={18}/>               
              </Upload>
              </span>
              </li> 
              <li className="py-2">CR 12 Document
              <span className="pl-2">
              <Upload
              onChange={handleCR_12Upload}
              beforeUpload={()=>false}
              > <Icon.UploadCloud size={18}/>               
              </Upload>
              </span>
            </li>
            <li className="py-2">Incorporation Certificate
            <span className="pl-2">
              <Upload
              onChange={handleIncorporation_LicenseUpload}
              beforeUpload={()=>false}
              > <Icon.UploadCloud size={18}/>               
              </Upload>
              </span>
              </li> 
             
            </h4>
            </div>
            <div className="col-md-6">
              <h4>
             
            <li className="py-2">Practicing License
            <span className="pl-2">
              <Upload
              onChange={handlePractising_LicenseUpload}
              beforeUpload={()=>false}
              > <Icon.UploadCloud size={18}/>               
              </Upload>
              </span>
            </li>
            <li className="py-2">License Certificate
            <span className="pl-2">
              <Upload
              onChange={handleLicense_CertificateUpload}
              beforeUpload={()=>false}
              > <Icon.UploadCloud size={18}/>               
              </Upload>
              </span>
            </li>
            <li className="py-2">MoU
            <span className="pl-2">
              <Upload
              onChange={handleMoUUpload}
              beforeUpload={()=>false}
              > <Icon.UploadCloud size={18}/>               
              </Upload>
              </span>
            </li>
          
            </h4> 
       
            </div>
        
          </div>
          </ol>
          {/* <MdCheckmarkCircleOutline className="don_icon" color="#5cb85c"  /> */}
        </div>
     
        {/* <div className="input-group"> 
          <div className="upload-file">
            <input type="file" className="upload-file-input" id="upload" required multiple  />
            <label className="upload-file-label pt-1" htmlFor="upload"><span className="ion-android-cloud-outline pr-2"><IosCloudOutline  /></span>Choose file</label>
          </div>
        </div> */}
      
        <ul className="file_added">
          <li>File Added:</li>
         

        {/* {documents.map((document)=>document.map((fileObj)=>{
          return(
            
            <li className="ion-paperclip" ><IosAttach color="#5cb85c" />{fileObj.name}</li>

          )
        }))} */}
         

        </ul>
        <button onClick={upload}>upload</button>
      </div>
  
     
    )
}
