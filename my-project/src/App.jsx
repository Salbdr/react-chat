  // src/App.js
  import React, { useState } from 'react';
  import ChatWindow from './components/ChatWindow';
  


  function App() {
    const [messages , setMessages] = useState([]);

    const handleSendMessage = (message) => {
      setMessages([...messages,message]);
    };
   
    

    

    return (
      <div className=" flex flex-col md:flex-row justify-around ">
        <ChatWindow
          messages={messages}
          oneMessage={handleSendMessage}
          sender="Ahmed"
        />
        <ChatWindow
          messages={messages}
          oneMessage={handleSendMessage}
          sender="Mo"
        />
      </div>
    );
  }

  export default App;

  