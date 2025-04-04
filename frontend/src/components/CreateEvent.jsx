// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from '../utils/axios'

// const CreateEvent = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !description || !date) {
//       setError("All fields are required!");
//       return;
//     }

//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const data = { name, description, date };
//       const response = await axios.post("/api/createevent", data,{
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         }
//       });

//       setLoading(false);

//       if (response.status === 200) {
//         alert(response.data.message);
//         navigate("/Clientform");
//       } else {
//         setError(response.data.message || "Failed to create event");
//       }
//     } catch (error) {
//       setLoading(false);
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="mt-20 bg-gradient-to-br p-6 flex items-center justify-center">
//       <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] bg-[rgb(22,16,16)] backdrop-blur-xl p-6 rounded-2xl shadow-xl">
//         <h2 className="text-4xl sm:text-5xl text-white font-bold text-center mb-6">
//           Create Event
//         </h2>
//         {error && <div className="text-red-500 text-center mb-4">{error}</div>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-xl font-medium text-white">Name</label>
//             <input
//               type="text"
//               className="w-full px-3 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-xl font-medium text-white">Description</label>
//             <textarea
//               className="w-full px-3 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-xl font-medium text-white">Date</label>
//             <input
//               type="date"
//               className="w-full px-3 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-3 mt-6 text-xl bg-blue-600 text-white rounded-2xl hover:bg-blue-700"
//             disabled={loading}
//           >
//             {loading ? "Creating..." : "Create Event"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateEvent;









import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../utils/axios';

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !date) {
      setError("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const data = { name, description, date };
      const response = await axios.post("/api/createevent", data, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      setLoading(false);

      if (response.status === 200) {
        alert(response.data.message);
        navigate("/Clientform");
      } else {
        setError(response.data.message || "Failed to create event");
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
      <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] bg-gray-800 shadow-2xl rounded-3xl p-6 border border-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Create Event
        </h2>
        {error && (
          <div className="text-red-400 text-center bg-red-900/20 p-2 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-base font-medium text-gray-300">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Event Name"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-300">Description</label>
            <textarea
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Event Description"
              rows="4"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-300">Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Event"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;