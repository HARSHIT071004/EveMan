// import { useState, useEffect } from "react";
// import React from "react";


// const LiveChat = () => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     socket.on("receiveMessage", (data) => {
//       setMessages((prev) => [...prev, data]);
//     });

//     return () => socket.off("receiveMessage");
//   }, []);

//   const sendMessage = () => {
//     if (message.trim()) {
//       socket.emit("sendMessage", message);
//       setMessage("");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r">
//       <div className="w-full max-w-lg p-5 text-white bg-[rgb(6,6,7)] backdrop-blur-lg shadow-xl rounded-2xl border border-black">
//         <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-3">
//           💬 Live Chat
//         </h2>
//         <div className="h-64 overflow-y-auto p-3 rounded-lg shadow-inner space-y-2 bg-gray-800 hover:shadow-3xl hover:bg-gray-700">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`p-2 rounded-lg text-white shadow ${
//                 index % 2 === 0 ? "bg-blue-500 self-start" : "bg-gray-800 self-end"
//               }`}
//             >
//               {msg}
//             </div>
//           ))}
//         </div>
//         <div className="mt-4 flex items-center">
//           <input
//             type="text"
//             className="flex-1 p-3 border-none outline-none rounded-l-xl bg-gray-400 placeholder-gray-900 text-black"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type a message..."
//           />
//           <button
//             className="p-3 bg-blue-600 hover:bg-blue-700 text-black rounded-r-xl transition"
//             onClick={sendMessage}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveChat;
