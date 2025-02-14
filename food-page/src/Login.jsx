import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

  return (
    <div className="login-section">
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
                {/* <Link to='/'><button>Login</button></Link> */}
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login