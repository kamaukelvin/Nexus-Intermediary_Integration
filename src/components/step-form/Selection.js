import React, {useContext} from 'react'
import broker from "../../assets/images/broker.png"
import agent from "../../assets/images/agent.png"
import { Radio } from 'antd'
import {KycContext} from '../../context/KycContext'



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

    const  nextStep = e => {
        e.preventDefault();
        props.nextStep();
      };
  
    return (
        <>
        <div className="wizard-navigation">
            <ul>
            <li>
                <div  data-toggle="tab">Intermediary</div>
            </li>
            <li>
                <div  onClick={nextStep} data-toggle="tab">Finish up</div>
            </li>
            </ul>
        </div>
        <div className="tab-pane" id="details">
            <h4 className="info-text">
                What type of intermediary are you?
            </h4>
           
 
          <Radio.Group className="row justify-content-center" value={kyc.intermediary} onChange={handleChange}>
         
            <div className="col-sm-4  ">
              <Radio className="choice"  name="radio" value={1} rel="tooltip" title="You offer, negotiate, and sells policies">
             
                <input 
                  type="radio" 
                  // checked={radio ==='broker'}
                  name="radio"
                  
                   
                 
                  />
                  <div className="icon">
                    <img src={broker} alt="" className="choice-icon-image" />
                  </div>
                  <h6>Broker</h6>
           
              </Radio>
            </div>
      
          
            <div className="col-sm-4">
              <Radio className="choice" name="radio" value={2} rel="tooltip" title="Select this if you identify risk management strategies, handle policy renewals, and track claims">
                <input 
                  type="radio" 
                  // checked={()=>setRadio('agent')}
                  name="radio"
                 
                    
                    
                  />
                <div className="icon">
                  <img src={agent} alt="" className="choice-icon-image" />
                </div>
                <h6>Agent</h6>
              
              </Radio>
            </div>

          </Radio.Group>
 

    
    <div className="wizard-footer"> 
            <div className="pull-right">
            <input type="button" className="btn btn-next btn-fill btn-danger btn-wd" name="next" defaultValue="Next" onClick={nextStep} />
        </div>
        <div className="pull-left">
            <div className="footer-checkbox">
            <div className="col-sm-12">
                <div className="checkbox">
                <label>
                    <input 
                    type="checkbox" 
                    name="subscribed"
                    />
                </label>
                Subscribe to our newsletter
                </div>
            </div>
            </div>
        </div>
        <div className="clearfix" />
        </div> 
      </div>
      </>
     
           
       
    )
}
