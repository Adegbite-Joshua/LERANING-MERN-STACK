import React, { useEffect, useState } from 'react'

const Chat = ({socket}) => {
    useEffect(() => {
        if (socket.current) {
            socket.current.on("broadcast", (response)=>{
                console.log(response);
                setallMessages([...allMessages, response])
            });
        }
    }, [])
    const [allMessages, setallMessages] = useState([])
    const [message, setmessage] = useState('')    
    const sendmessage =()=>{
        console.log(message);
        // console.log(socket.current.emit);
        socket.current.emit("sendMsg", message)
    }
  return (
    <>
        <div>Chat</div>
        <input type="text" onChange={(e)=>setmessage(e.target.value)}/>
        <button onClick={sendmessage}>Send</button>
        <div>
            {allMessages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
        </div>
    </>
  )
}

export default Chat