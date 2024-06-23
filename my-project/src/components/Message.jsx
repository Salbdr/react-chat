// src/Message.js
import React from "react";

function Message({ message, sender }) {
  const isSenderAhmed = message.sender === "Ahmed";
 
  const isCurrentWindowAhmed = sender === "Ahmed";
  
  const messageStyle = (isSenderAhmed && isCurrentWindowAhmed) || (!isSenderAhmed && !isCurrentWindowAhmed)
    ? "bg-blue-500 text-white self-start "
    : "bg-gray-300 text-black self-end ml-20 ";

  return (
    <div className={`flex items-center my-2 p-2 max-w-[70%] break-words rounded-lg ${messageStyle}`}>
      <p className="text-sm word-break-all overflow-hidden">{message.text}</p>
    </div>
  );
}

export default Message;

