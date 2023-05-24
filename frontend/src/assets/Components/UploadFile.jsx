import axios from 'axios'
import React, { useState } from 'react'

const UploadFile = () => {
    const [myFile, setmyFile] = useState('')
    const [image, setimage] = useState('')
    let myImage;
    const [fileName, setfileName] = useState('')
    const uploadFile =(e)=>{
        console.log(e.target.files[0]);
        myImage = e.target.files[0]
        setfileName(e.target.files[0].name)
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
            const response = await axios.post(endpoint, {myFile, fileName})
            console.log(response);
            setimage(response.data.link)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        <input type="file" onChange={(e)=>uploadFile(e)} name="" id="" />
        <button onClick={saveFile}>Upload</button>
        <img src={image} alt="" />
    </>
  )
}

export default UploadFile