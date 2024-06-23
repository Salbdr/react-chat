import React, { useState } from "react";
import Message from "./Message";
import { IoIosSend } from "react-icons/io";



function ChatWindow(props) {
  const [input, setInput] = useState("");


const handleSendClick = () =>{
    if(input !== ""){
        props.oneMessage({text:input,sender:props.sender})
        setInput("");
        
    }
}
  return (
    <div className="  flex flex-col items-center   w-[600px] h-[600px] md:h-[100vh]  md:w-full bg-[url('../src/assets/sam.png')]   bg-cover">
      <div className="h-full  w-[35%] mt-24 ml-0 md:ml-20 overflow-y-scroll  bg-[url('../src/assets/i.jpg')] bg-cover bg-center ">
        {props.messages.map((message,index) => (
          <Message key={index}  message={message} sender={props.sender} />
        ))}
      </div>
      <div className="flex flex-row  bg-white h-[50px] w-[120px] md:w-[240px] justify-between rounded-t-[20px] rounded-b-[20px]  gap-1 md:gap-12 mb-[90px] mt-2 ">
        <input
          className="  h-[20px] w-[120px] md:w-[210px] text-xs md:text-sm  rounded-md -ml-6 md:ml-4  border border-1 p-4  border-gray-300"
          type="text"
          placeholder="Enter Your Message"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-[30px] rounded-md bg-transparent"
          onClick={handleSendClick}
        >
        <IoIosSend />
          
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;


