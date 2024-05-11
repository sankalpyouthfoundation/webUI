import axios from 'axios'
import React, { useEffect } from 'react'
import { getConfig } from '../../env_config/activeConfig';
import LoginWelcome from '../utils/LoginWelcome';
import toast from 'react-hot-toast';

function ContactView() {
    useEffect(()=>{
        const config = getConfig();
        axios.get(config.contact_endpoint)
        .then((res)=>{
            toast.success("Successfully fetched!")
        console.log(res);
      })
      }, []) 
    
  return (<>
    <LoginWelcome/>
    <div>ContactView</div>
    </>
  )
}

export default ContactView