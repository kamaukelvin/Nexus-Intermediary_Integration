import React, {useState, useEffect} from 'react'
import { Link,Redirect } from 'react-router-dom'
// import { notify } from 'react-notify-toast'
// import Spinner from '../../components/widgets/loader'
import { useToasts } from 'react-toast-notifications'
import axios from 'axios'
import queryString from 'query-string'
import Spinner from '../../components/widgets/loader'
import '../../assets/css/custom.css'



export default function VerifyEmail(props)  {
   
const values = queryString.parse(props.location.search)

    const { history } = props;
    
  const { addToast } = useToasts()
  
const [confirming, setConfirming] = useState(true)
const [id, setId]=useState('')


const styles={
    "height":'70px',
    "width": '70px'
}
  useEffect(() => {
    // const { id } = props.match.params
    // console.log("this is params" + props.match.params)
    
    // body
    const body ={
        "resource":"registration",
          "action":"validation",
        "data": {
          "email_token": `${values.token}`,
         
        }
      }
      // headers
      const config = {
        header: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
        },
      };



    axios.post('http://api.nexus.ke/api/web/v1/intermediary',body,config)
 
     
      .then(res => {
          console.log("this is response" + JSON.stringify(res))
        setConfirming(false)
        setId(res.data.results.registration_setup_id)
        localStorage.setItem('myid', `${id}`)
        addToast(res.data.result.status, { appearance: 'success',autoDismiss: true, } )
        history.push('/credentials')
      })
      .catch(err => {
        setConfirming(false)
        addToast(err.response.data.err_msg, { appearance: 'error',autoDismiss: true, } )
          console.log("error in verifying" + JSON.stringify(err.response))})
          history.push('/signup')
  },[])
  console.log("my token is this"+ values.token + "my reg id is"+ id)


   return(
    <div className='centerdiv'>

    
    {confirming
      ? <><p>Redirecting...</p><Spinner style={styles} /> </>
      : <Redirect to='/credentials'/>
  
    
    }
     </div>
    )}

  

