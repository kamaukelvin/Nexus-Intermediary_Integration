import React from 'react'
import Spinner from '../../../assets/images/Rolling2.svg';


const PageLoader=()=> {
    return (
        <div  className="center">
            
       <span><img src={Spinner} alt="spinner" /></span> 
        </div>
    )
}

export default PageLoader