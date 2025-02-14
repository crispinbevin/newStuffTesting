import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import './App.css'

function App() {

  
    
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [postcode, setPostcode] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const[pass,setPass] = useState("")
  const[address1, setAddress1] = useState("")
  const[address2, setAddress2] = useState("")
  const[town, setTown] = useState("")
  const[postalcode, setPostalcode] = useState("")
  const[county, setCounty] = useState("")
  const[landmark, setLandmark] = useState("")

  
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log("Form Submitted",email)

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!regex.test(email)){
      toast.error('Invalid email')
    }

    if(pass==""){
      toast.error('Enter a password')
    }
    
    const response = await axios.post('https://foodpage.co.uk/development/v2/shop/user/registration',
      {
        "shopID": 1,
        "userFirstName": fname,
        "userLastName": lname,
        "userPostCode": postcode,
        "userMobile": mobile,
        "userEmail": email,
        "userPassword": pass,
        "userAddress": {
          "line1": address1,
          "line2": address2,
          "town": town,
          "postalcode": postalcode,
          "county": county,
          "landmark": landmark
        }
      }
    


    ).then(
      response => {
        console.log(response)
        if(response.status===200 || response.status===201){
          toast.success('User Created')
        }
      }
    ).catch(
      console.log("Error occured")
    )
  }

  return (
    <>
      
      <ToastContainer />
      <div className="login-section">
        <div className="login-box">
          <form className='login-form' action="" onSubmit={onSubmit}>

            <input
              placeholder='First Name'
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />

            <input
              placeholder='Last Name'
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <input
              placeholder='Postal Code'
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
            <input
              placeholder='Mobile'
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              placeholder='Email'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder='Password'
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <input
              placeholder='Address Line 1'
              type="text"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
            <input
              placeholder='Address Line 2'
              type="text"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
            <input
              placeholder='Postal Code'
              type="text"
              value={postalcode}
              onChange={(e) => setPostalcode(e.target.value)}
            />
            <input
              placeholder='Town'
              type="text"
              value={town}
              onChange={(e) => setTown(e.target.value)}
            />
            <input
              placeholder='County'
              type="text"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
            />
            <input
              placeholder='Landmark'
              type="text"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
            <div className="button-list">
                <button type='submit'>Submit</button>
                <Link to='/login'><button> To Login</button></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
  
}

export default App