import React,{useState} from 'react'
import Steps from './index'


export default function Card() {

    return (
        <div>
               <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-8 col-sm-offset-2">
                {/* Wizard container */}
                <div className="wizard-container">
                  <div className="card wizard-card" data-color="red" id="wizard">
                    <form action method>
                      {/*  You can switch " data-color="blue" "  with one of the next bright colors: "green", "orange", "red", "purple"             */}
                      <div className="wizard-header">
                        <h3 className="wizard-title">
                          Know Your Customer
                        </h3>
                        <h5>This information will let us know more about you.</h5>
                      </div>
                      <Steps />
                     
                    </form>
                  </div>
                </div>
                {/* wizard container */}
              </div>
            </div>
            {/* row */}
          </div>
        </div>
    )
}
