import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const onSubmit = async(e) => {
        e.preventDefault()

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!regex.test(email)){
        toast.error('Invalid email')
        }

        if(pass==""){
        toast.error('Enter a password')
        }

        const response = await axios.post("https://foodpage.co.uk/development/v2/shop/user/login",
            {
                "shopID": 1,
                "user": email,
                "password": pass
            }
        ).then(
            response => {
                console.log(response)
                    if(response.status===200 || response.status===201){
                      toast.success('User Created')
                      const loginToken = response.data.data.token
                      localStorage.setItem("authToken", loginToken)
                    }
            }
        )
    }

  return (
    <div className="login-section">
        <ToastContainer />
        <div className="login-box">
          <form className='login-form' action="" onSubmit={onSubmit}>
          <input
              placeholder='email'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder='password'
              type="text"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <div className="button-list">
                <button type='submit'>Submit</button>
                <Link to='/'><button>Register</button></Link>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login