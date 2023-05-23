import axios from 'axios'
import React, { useState } from 'react'

const UploadFile = () => {
    const [myFile, setmyFile] = useState('')
    const uploadFile =(e)=>{
        console.log(e.target.files[0]);
        let myImage = e.target.files[0]
        let reader = new FileReader();
        let convertedImage = reader.readAsDataURL(myImage)
        reader.onload =()=>{
            // console.log(reader.result)
            setmyFile(reader.result)
        }
    }
    const saveFile = async()=>{
        let endpoint = 'http://localhost:5000/cloud'
        try {
            const response = axios.post(endpoint, {myFile})
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        <input type="file" onChange={(e)=>uploadFile(e)} name="" id="" />
        <button onClick={saveFile}>Upload</button>
    </>
  )
}

export default UploadFile