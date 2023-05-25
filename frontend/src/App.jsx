import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './assets/Components/SignUp'
import UploadFile from './assets/Components/UploadFile'
import { Route, Routes } from 'react-router-dom'
import SignIn from './assets/Components/SignIn'

function App() {

  return (
    <>
        {/* <SignUp/> */}
        <Routes>
          <Route path='/' element={<UploadFile/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          
        </Routes>
        
    </>
  )
}

export default App
