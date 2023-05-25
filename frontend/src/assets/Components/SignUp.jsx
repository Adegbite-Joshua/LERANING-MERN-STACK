import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [response, setresponse] = useState([])
    let uri = 'http://localhost:5000/'
    useEffect(() => {
      axios.get(uri)
      .then((res)=>{
            setresponse([res])
            console.log(res);
      })
      .catch((err)=>{
            console.log(err);
      })
    }, [])
    
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitForm =()=>{
        // e.preventDefault()
        let details = {
            firstName: firstname,
            lastName: lastname,
            email,
            password
        }
        // console.log(details);
        const endpoint = 'http://localhost:5000/post'
        axios.post(endpoint, details)
        .then((res)=>{
            console.log(res.data);
            if (res.status == 200) {
                navigate('/signin')
            } else{
                alert('error')
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <>
            <div class="row g-3 w-50 mx-auto">
            <div class="col-12">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstname" placeholder="First Name" onChange={(e)=>setfirstname(e.target.value)} />
                </div>
                <div class="col-12">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Last Name"  onChange={(e)=>setlastname(e.target.value)}/>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"  onChange={(e)=>setemail(e.target.value)} />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4"  onChange={(e)=>setpassword(e.target.value)} />
                </div>
                
                {/* <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
                </div> */}
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                    </div>
                </div>
                <div class="col-12">
                    <button onClick={(e)=>submitForm()} class="btn btn-primary">Sign in</button>
                </div>
            </div>
        </>
    )
}

export default SignUp