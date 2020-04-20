import React, {useContext} from 'react'
import broker from "../../assets/images/broker.png"
import agent from "../../assets/images/agent.png"
import { Radio } from 'antd'
import {KycContext} from '../../context/KycContext'
import '../../assets/css/custom.css'



export default function Selection(props) {

  const context = useContext(KycContext)
  const {kyc, setKyc}= context



// methods

const handleChange = (e) => {
  console.log('radio checked', e.target.value)
  setKyc({...kyc,
    intermediary: e.target.value,
  })
}


console.log(kyc)

  
    return (
        <>
     
            <h6 className="text-center mt-5 info-text">
              Select your type
            </h6>
           
 
          <Radio.Group className="mt-5 row justify-content-center" value={kyc.intermediary} onChange={handleChange}>
         
            <div className="col-sm-4 offset-md-2 ">
              <Radio className="choice"  name="radio" value={1} rel="tooltip" title="You offer, negotiate, and sells policies">
             
                  <div className="icon">
                    <img src={broker} alt="" className="choice-icon-image" />
                  </div>
                  <h6 className="text-center pt-3">Broker</h6>
           
              </Radio>
            </div>
      
          
            <div className="col-sm-4">
              <Radio className="choice" name="radio" value={2} rel="tooltip" title="Select this if you identify risk management strategies, handle policy renewals, and track claims">
              
                <div className="icon">
                  <img src={agent} alt="" className="choice-icon-image" />
                </div>
                <h6 className="text-center pt-3">Agent</h6>
              
              </Radio>
            </div>

          </Radio.Group>
 

    
  
      </>
     
           
       
    )
}
