import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="login-section">
        <div className="login-box">
          <form className='login-form' action="">
            <input placeholder='Name' type="text" />
            <input placeholder='Password' type="text" />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App