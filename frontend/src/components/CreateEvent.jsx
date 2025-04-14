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
import axios from "../utils/axios";

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
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="w-full max-w-5xl h-[85vh] flex mt-18 flex-col md:flex-row items-center justify-between bg-black/40 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-gray-700">
        
        {/* Left - Form Section */}
        <div className="w-full md:w-1/2 h-full p-8 text-white bg-[rgb(24,30,35)] flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-[#ffb300]">
              Create Event
            </h2>
            {error && (
              <p className="text-red-400 text-center bg-red-900/20 p-2 rounded-lg text-sm">
                {error}
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-base font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Event Name"
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-300">Description</label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
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
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Event"}
              </button>
            </form>
          </div>

          <p className="text-xs text-center text-gray-400 mt-4">
            Want to go back?{" "}
            <span
              className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors"
              onClick={() => navigate("/")}
            >
              Home
            </span>
          </p>
        </div>

        {/* Right - Image Section */}
        <div className="w-full md:w-1/2 h-full bg-cover bg-center p-4 bg-gray-800/90" style={{ backgroundImage: `url(/eve23.jpg)` }}>
          {/* <div className="flex justify-center gap-6 pt-4">
            <span
              className="text-cyan-300 text-lg font-semibold cursor-pointer hover:underline hover:text-cyan-100 transition-colors"
              onClick={() => navigate("/createevent")}
            >
              Create
            </span>
            <span
              className="text-emerald-300 text-lg font-semibold cursor-pointer hover:underline hover:text-emerald-100 transition-colors"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;