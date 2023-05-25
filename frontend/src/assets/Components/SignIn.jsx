import React, { useState } from 'react'

const SignIn = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitForm =()=>{
        // e.preventDefault()
        let details = {
            email,
            password
        }
    }
  return (
    <div>
        <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4"  onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4"  onChange={(e)=>setpassword(e.target.value)} />
        </div>
    </div>
  )
}

export default SignIn