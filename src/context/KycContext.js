import React, {useState,createContext, useEffect} from 'react'
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'


const KycContext= createContext()
const KycContextProvider =(props)=>{

  const { addToast } = useToasts();

// states

const [kyc, setKyc]= useState({
    intermediary:"",
    directors: [],
    uploading:false


})

const [image, setImage]= useState([])

const [documents, setDocuments]= useState({
    kra_pin:[],
    cr_12: [],
    incorporation_certificate: [],
    practicing_license: [],
    mou: [],
    licence_certificate: [],
  

})


 


  const upload = event => {
    // event.preventDefault();
    console.log("uploading")
  

      // addToast(err.response.data.err_msg, { appearance: 'error',autoDismiss: true, } )
      
 

 if(documents.kra_pin === undefined || documents.kra_pin.length === 0|| 
  documents.cr_12 === undefined || documents.cr_12.length === 0 ||
  documents.incorporation_certificate === undefined || documents.incorporation_certificate.length === 0 ||
  documents.practicing_license === undefined || documents.practicing_license.length === 0 ||
  documents.licence_certificate === undefined || documents.licence_certificate.length === 0 ||
  documents.mou === undefined || documents.mou.length === 0 ){
  addToast('Ensure all documents are attached', { appearance: 'error',autoDismiss: true, } ) 
 }else{

    let formData = new FormData();
    // add one or more of your files in FormData
    // again, the original file is located at the `originFileObj` key
    formData.append("file", documents.kra_pin[0].originFileObj,"Kra Pin");
    formData.append("file", documents.cr_12[0].originFileObj, "Cr_12");
    formData.append("file", documents.incorporation_certificate[0].originFileObj,"Inc_Certificate" );
    formData.append("file", documents.practicing_license[0].originFileObj,"Practicing Cert");
    formData.append("file", documents.licence_certificate[0].originFileObj,"Licence Cert");
    formData.append("file", documents.mou[0].originFileObj, "mou");
 


         // headers
         const config = {
          headers: {
             "Content-Type": "multipart/form-data",
             "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiI3IiwidXNlcl9pZCI6MjY1LCJyb2xlX2NvZGUiOiJJTl9BRE1fUkxfMDAxIiwidXNlcl90eXBlIjoiSU5URVJNRURJQVJZIiwiaWF0IjoxNTg3MDI2OTc5LCJleHAiOjE1ODk2MTg5NzksImF1ZCI6IkNsaWVudF9JZGVudGl0eSIsImlzcyI6Ik5leHVzIiwic3ViIjoiaW5mb0BuZXh1cy5rZSJ9.BK2Rs61mEoeaplDVU_kK0wokfGPwZ5m2j0S_lGXwiYOjQCawwrwbiCD-B3of3mmw0si8MG5Gcgl34Z8fg3G1QwQe9SO2YREdeyB9caWkS75gYvf9HxOeIKZXJ4KXkvXrwcV2Vic0pyCUDZpXxFqz5C2yuFqPEPvNSr-36trBGyepC8l35I36A45GBD5dseBD0PC_SxCDI751OGQbxvi01oUv8_KtJwPoI7qo0yKpx1V4XFM4BpKREk9gsyjAaqCNpJzSD4bu3-BwqaIYsho2H5Zi32Iv8pmzHJGtRl68GZQM4xeyENKjkA5vNlJGPaiySXOOybrLMsdJn3T2NXyjMQ"
          
          },
        };
          axios
          .post("http://api.nexus.ke/api/upload/v1/intermediary/kyc", formData,config,{
              onUploadProgress: ProgressEvent=>{
                  setDocuments({loaded: ProgressEvent.loaded/ProgressEvent.total*100})
              }
          })
        
          .then(res => {
            setKyc({uploading: false})
    
            console.log("res", JSON.stringify(res));
          })
          .catch(err => {
            setKyc({uploading: false})
            console.log("err", err.response);
          });
          setKyc({uploading: true})
  

   }
 
   }



return (
        <KycContext.Provider value={{setKyc,kyc, image, setImage, documents, setDocuments, upload}}>
            {props.children}
        </KycContext.Provider>
    )
 }

const KycConsumer = KycContext.Consumer;
export {KycContextProvider,KycConsumer, KycContext}