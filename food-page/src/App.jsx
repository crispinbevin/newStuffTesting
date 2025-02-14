import React, { useState } from 'react'
import './App.css'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'


function App() {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")

  
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log("Form Submitted",name,pass)

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!regex.test(name)){
      toast.error('Invalid email')
    }

    if(pass==""){
      toast.error('Enter a password')
    }
    
    const response = await axios.post('https://foodpage.co.uk/v1/mobile/shop/admin/login',
      {
        username: name,
        password: pass,
        deviceId: "",
        type: "",
        model: "",
        appVersion: "",
        token: "",
        tokenUpdate: "No",
      }
    


    ).then(
      response => {
        console.log(response)
        if(response.status===200 || response.status===201){
          toast.success('Logged In')
        }
      }
    )
  }

  return (
    <>
      <ToastContainer 
        // position='top-center'
        // hideProgressBar={true}
        // transition={slide}
      />

      <div className="login-section">
        <div className="login-box">
          <form className='login-form' action="" onSubmit={onSubmit}>

            <input
              placeholder='Name'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder='Password'
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App