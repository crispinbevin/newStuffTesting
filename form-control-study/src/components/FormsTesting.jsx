import React, { useState } from 'react'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';

function FormsTesting() {
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

  return (
    <Fragment>
        <div className="form-section">
            <div className="form-wrapper">
                <h1>ENTER YOUR DEETS</h1>
                <form className='login'>    
                    <div className="input-field">
                        <input type="text" placeholder='Email' />
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder='Password'/>
                    </div>

                    <button type='submit' className='btn btn-primary'>Submit</button>

                </form>
            </div>
        </div>
        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
        />
    </Fragment>
  )
}

export default FormsTesting