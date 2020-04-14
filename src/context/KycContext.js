import React, {useState,createContext} from 'react'


const KycContext= createContext()
const KycContextProvider =(props)=>{

// states

const [kyc, setKyc]= useState({
    intermediary:"",
    certificate:null,
    subscribed: false,
    pin:"",
    directors: [],
 

})
 

return (
        <KycContext.Provider value={{setKyc,kyc}}>
            {props.children}
        </KycContext.Provider>
    )
 }

const KycConsumer = KycContext.Consumer;
export {KycContextProvider,KycConsumer, KycContext}