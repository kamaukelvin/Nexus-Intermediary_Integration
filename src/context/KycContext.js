import React, {useState,createContext} from 'react'
import axios from 'axios'


const KycContext= createContext()
const KycContextProvider =(props)=>{

// states

const [kyc, setKyc]= useState({
    intermediary:"",
    documents:[],
    directors: [],
    fileList:[],
    previewVisible: false,
    previewImage:''

})

const [image, setImage]= useState({
    previewVisible: false,
    previewImage: "",
    fileList: []
  })


return (
        <KycContext.Provider value={{setKyc,kyc, image, setImage}}>
            {props.children}
        </KycContext.Provider>
    )
 }

const KycConsumer = KycContext.Consumer;
export {KycContextProvider,KycConsumer, KycContext}