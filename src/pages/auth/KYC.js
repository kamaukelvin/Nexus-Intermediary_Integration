import React, { useState, useContext } from 'react'
import { Steps, Button, message } from 'antd';
import 'antd/dist/antd.css';
import '../../assets/css/dashboard.css'
import {Link} from 'react-router-dom'
import pic from "../../assets/images/auth/kyc.jpg"
import Selection from '../../components/step-form/Selection'
import Directors from '../../components/step-form/Directors'
import Uploads from '../../components/step-form/Uploads'
import IosAttach from 'react-ionicons/lib/IosAttach'
import {KycContext} from '../../context/KycContext'
import { useToasts } from 'react-toast-notifications'
import _ from 'lodash'


const { Step } = Steps;



const steps = [
  {
    title: 'Select Category',
    content: <Selection/>,
  },
  {
    title: 'Upload Documents',
    content: <Uploads/>,
  },
  {
    title: 'Directors',
    content: <Directors/>,
  },

];

export default function Kyc() {

  const { addToast } = useToasts();



  const context = useContext(KycContext)
  const {upload, kyc, documents}= context

  const [current ,setCurrent]= useState(0)

  function next() {
    const current_step = current + 1;
    setCurrent(current_step);
  }

  function prev() {
    const current_step = current - 1;
    setCurrent(current_step);
  }

let doc = _.mapValues(documents)







    // const { current } = this.state;
    return (
      <div className="d-flex">
        <div className="col-md-5 d-flex " style={{backgroundImage: `url(${pic})`,backgroundSize: "cover", backgroundPosition: "center",width: "80vw",height:"100vh"}}>
          <Link to="/" className="">
            <img style={{ height: "100px",width: "100px",}}alt="Logo" />
          </Link>
          <div className=""style={{ position: "absolute", margin: "auto", bottom: "0", }} >
            <Link to="#" className="">
            Terms and conditions |
            </Link>
            <Link to="#" className=" text-white">
            &copy; 2020 Nexus
            </Link>
          </div>
        </div>
        <div className="col-md-7 px-5">
       
        <h2 className="text-center my-5">Help us know you better</h2>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title}  />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action float-right">
          { current > 0 && (
            <Button style={{ margin: 8 }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          { kyc.intermediary === '' && current ===0   ? current < steps.length - 1 && (
            <Button type="primary" onClick={() => addToast('Select category of intermediary', { appearance: 'error',autoDismiss: true, } )} >
              Next
            </Button>
          ): (doc.kra_pin.length===0 || doc.cr_12.length===0 || doc.incorporation_certificate.length===0|| doc.mou.length===0||doc.practicing_license.length===0 || doc.licence_certificate.length===0)&& current===1 ? <Button type="primary" onClick={() => addToast('Ensure you upload all documents', { appearance: 'error',autoDismiss: true, } )} >
          Next
        </Button>: current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()} >
              Next
            </Button>)}
          
           {/* {current===2?upload:current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()} >
              Next
            </Button> */}
        
           {kyc.directors.length===0 && current===2 ? <Button type="primary" onClick={()=>addToast('Add atleast one director', { appearance: 'error',autoDismiss: true, } )}>
              Done
            </Button>: current === steps.length - 1 && (
            <Button type="primary" onClick={upload} disabled={kyc.uploading}>
            {kyc.uploading && ( <i className="fa fa-circle-notch fa-spin" style={{ marginRight: "5px" }}/>)}
                    {kyc.uploading && <span className="text-capitalize">
                      Please wait...
                      </span>
                    }
                    {!kyc.uploading && (
                      <span className="text-capitalize"> Done</span>
                    )}
            </Button>
          )}
    
   
        </div>
        </div>
      </div>
   
      
    
    
    )
  
}

