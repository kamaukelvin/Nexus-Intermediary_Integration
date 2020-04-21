import React,{useContext} from 'react'
import {KycContext} from '../../context/KycContext'


export default function Confirm() {

    const context = useContext(KycContext)
    const {kyc, setKyc}= context
    const {documents, directors } = kyc

    return (
        <div className="row mt-5">
            <div className="col-md-6">
                <p>
                    <h6 className="font-weight-light">Intermediary Type:<span className="pl-3 font-weight-bold">{kyc.intermediary}</span></h6>
                </p>
            </div>

            <div className="col-md-6">
                        <h6 className="font-weight-light">Directors:</h6>
                            {directors.map((director)=>{
                                return(
                                    <ol>
                                        {director.name}
                                        <div className="d-flex justify-content-between">
                                            <div className="">
                                                <li>
                                                    <p>Id Number: <span>{director.id_number}</span></p> 
                                                    </li>
                                                <li>
                                                    <p>KRA Pin Number: <span>{director.director_pin}</span></p> 
                                                    </li>
                                                <li>
                                                    <p>Phone Number: <span>{director.contact}</span></p> 
                                                </li>
                                        </div>
                                        <div className="">
                                                <li>
                                                    <p>Email: <span>{director.email}</span></p> 
                                                </li>
                                                <li>
                                                    <p>Physical Address: <span>{director.address}</span></p> 
                                                </li>
                                        </div>
                                        </div>
                                </ol>
                                )
                                
                            })}
                    </div>
                </div>
  
     
    )
}
