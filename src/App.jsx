import { useState } from 'react'
import {ChatInput} from "./components/ChatInput.jsx"
import ChatMessages from './components/ChatMessages.jsx'
import './App.css'

function App () {
    const array = useState([
      {
      message:"hello chatbot",
      sender:"user",
      key : "id1"
    },
    {
     message:"Hello! How can I help you?",
      sender:"robot",
      key : "id2"
    },
    {
     message:"can you get me todays date?",
      sender:"user",
      key:"id3"
    },
    {
     message:"Today is october 22",
      sender:"robot",
      key:"id4"
    },
 ])
   const [chatMessages , setChatMessages] = array
   return (
    <div className="app-container">
       <ChatMessages chatMessages={chatMessages}/>
       <ChatInput chatMessages={chatMessages} 
       setChatMessages={setChatMessages}/>
    </div>
  )
  }

export default App
