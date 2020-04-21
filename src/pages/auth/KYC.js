import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import 'antd/dist/antd.css';
import '../../assets/css/dashboard.css'
import {Link} from 'react-router-dom'
import pic from "../../assets/images/auth/kyc.jpg"
import Selection from '../../components/step-form/Selection'
import Setup from '../../components/step-form/Setup'
import Confirm from '../../components/step-form/Confirm'


const { Step } = Steps;

const steps = [
  {
    title: 'Select Category',
    content: <Selection/>,
  },
  {
    title: 'Set Up Credentials',
    content: <Setup/>,
  },
  {
    title: 'Confirm',
    content: <Confirm/>,
  },

];

export default class Kyc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
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
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action float-right">
          {current > 0 && (
            <Button style={{ margin: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
           {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
           {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
    
   
        </div>
        </div>
      </div>
   
      
    
    
    )
  }
}

