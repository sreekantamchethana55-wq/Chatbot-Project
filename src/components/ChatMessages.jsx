import { useRef, useEffect } from 'react'
import {ChatMessage} from "./ChatMessage"
import "./ChatMessages.css" ;
 function ChatMessages ({chatMessages}) { 
   const chatMessagesRef = 
    useRef(null);
    useEffect(() => {
          const containerElem = chatMessagesRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight
          }
    },[chatMessages]);
 return (
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chat)=>{
          return (
            <ChatMessage 
            message={chat.message} 
            sender = {chat.sender}
            key = {chat.key}
            />             
          )
        })}
      </div>
   )  
  }
  export default ChatMessages