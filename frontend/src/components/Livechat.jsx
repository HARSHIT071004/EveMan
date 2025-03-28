import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import React from "react";

const socket = io("http://localhost:5000");

const LiveChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r ">
      <div className="w-96 p-5 text-black bg-white backdrop-blur-lg shadow-xl rounded-2xl border border-black">
        <h2 className="text-xl font-bold text-black text-center mb-3">
          💬 Live Chat
        </h2>
        <div className="  hover:shadow-3xl hover:scale-105 hover:-translate-y-1 h-64 overflow-y-auto hover: bg-gray-300 p-3 rounded-lg shadow-inner space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg text-black shadow ${
                index % 2 === 0 ? "bg-blue-500 self-start" : "bg-gray-800 self-end"
              }`}
            >
              {msg}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center">
          <input
            type="text"
            className="flex-1 p-3 border-none outline-none rounded-l-xl bg-gray-400 placeholder-gray-900 text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            className="p-3 bg-blue-600 hover:bg-blue-700 text-black rounded-r-xl transition"
            onClick={sendMessage}
          >
          s
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
