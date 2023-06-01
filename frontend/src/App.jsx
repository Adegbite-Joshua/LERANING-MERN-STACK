import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './assets/Components/SignUp'
import UploadFile from './assets/Components/UploadFile'
import { Route, Routes } from 'react-router-dom'
import SignIn from './assets/Components/SignIn'
import Chat from './assets/Components/Chat'
import socketClient from 'socket.io-client'


function App() {
  let endpoint = 'http://localhost:5000'
  let socketRef = useRef()
  useEffect(() => {
    socketRef.current = socketClient(endpoint)
  }, [])
  
  // socketClient(endpoint)
  return (
    <>
        {/* <SignUp/> */}
        <Routes>
          <Route path='/' element={<UploadFile/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/chat' element={<Chat socket={socketRef}/>} />
          
        </Routes>
        
    </>
  )
}

export default App
