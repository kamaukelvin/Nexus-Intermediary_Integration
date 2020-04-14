import React, { Component } from 'react';
import Selection from './Selection';
import Finish from './Finish';


export class UserForm extends Component {
  state = {
    step: 1
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };



  render() {
    const { step } = this.state;

    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          
       
          <Selection
            nextStep={this.nextStep}
            prevStep={this.prevStep}
      
         
          />
        );
      case 2:
        return (
          <Finish
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          
          />
        );

    }
  }
}

export default UserForm;