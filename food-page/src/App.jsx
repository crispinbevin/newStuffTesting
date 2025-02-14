import React, { useState } from 'react'
import './App.css'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'


function App() {


  const [name, setName] = useState("")
  const [pass, setPass] = useState("")

  const [data, setData] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted",name,pass)
    toast("Form Submitted ")
    
    axios.post('https://foodpage.co.uk/v1/mobile/shop/admin/login',
      {username: "learabia@gmail.com",
      password: "e@123"}
    ).then(
      response => console.log(response)
    )
  }

  return (
    <>
      <ToastContainer 
        position='top-center'
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