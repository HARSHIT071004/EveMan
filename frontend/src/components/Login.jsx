// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from '../utils/axios'

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); 
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = { email, password };
//       const response = await axios.post("/api/login", data,{
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.status === 200) {
//         alert(response.data.message);
//         localStorage.setItem("token", response.data.token);
//         navigate("/createevent");
//       } else {
//         setError(response.data.message || "Failed to login"); 
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r">
//       <div className="bg-[rgb(22,16,16)] backdrop-blur-lg shadow-lg rounded-2xl p-5 sm:w-[90%] md:w-[450px] lg:w-[500px] h-auto">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-white mb-6">
//           Welcome Back
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <div>
//             <label className="block text-white text-xl font-medium">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 text-xl border border-gray-300 rounded-lg bg-white/40 backdrop-blur-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="Enter Email"
//             />
//           </div>
//           <div>
//             <label className="block text-white text-xl">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 text-xl border border-gray-300 rounded-lg bg-white/40 backdrop-blur-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="Enter password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="text-xl w-full bg-blue-600 text-white py-3 mt-5 rounded-lg font-semibold shadow-lg transition hover:bg-blue-700 hover:scale-105"
//           >
//             Login
//           </button>
//         </form>
//         {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//         <p className="text-xl text-center text-white mt-4">
//           Don't have an account?{" "}
//           <span
//             className="text-blue-600 cursor-pointer"
//             onClick={() => navigate("/signup")}
//           >
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      const response = await axios.post("https://evemanbackend.vercel.app/api/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        navigate("/createevent");
      } else {
        setError(response.data.message || "Failed to login");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleAppleLogin = () => {
    console.log("Apple login clicked");
  };

  return (
    <div className="flex items-center justify-center mt-18 min-h-screen bg-[rgb(9,8,7)] p-4">
      <div className="w-full max-w-5xl h-[85vh] flex flex-col md:flex-row items-center justify-between bg-black/40 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-gray-700">
        
        {/* Left - Login Form */}
        <div className="w-full md:w-1/2 h-full p-8 text-white bg-[rgb(24,30,35)] border-white flex flex-col justify-between">
          <div>
            <h2 className="text-2xl text-[#ffb300]  md:text-3xl lg:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text ">
              Manage It
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <p className="text-red-400 text-center bg-red-900/20 p-2 rounded-lg text-sm">
                  {error}
                </p>
              )}

              <div>
                <label className="block text-base font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter Email"
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-300">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-100 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter password"
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Login
              </button>
            </form>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-row gap-3 mt-6">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 py-2.5 rounded-xl hover:bg-gray-200 transition-all duration-300 text-sm font-medium shadow-md"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h6.64c-.28 1.27-.89 2.35-1.93 3.06l3.2 2.48c1.99-1.83 3.13-4.53 3.13-7.55z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.2-2.48c-.89.6-2.03.95-3.08.95-2.35 0-4.34-1.58-5.05-3.7H3.36v2.33A9.99 9.99 0 0012 23z"
                  fill="#34A853"
                />
                <path
                  d="M6.95 15.3c-.47-1.38-1.19-2.54-2.15-3.36V9.67H3.36v2.33c-.93 1.86-.93 3.88 0 5.74l2.59-2.03z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.76c1.33 0 2.52.45 3.46 1.36l2.59-2.59C16.46 2.94 14.47 2 12 2 8.03 2 4.68 4.23 3.36 7.33l2.59 2.03c.71-2.12 2.7-3.6 5.05-3.6z"
                  fill="#EA4335"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleAppleLogin}
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2.5 rounded-xl hover:bg-gray-800 transition-all duration-300 text-sm font-medium shadow-md"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.06-7.44 7-7.93v15.86zm2-.07V2.07c4.34.58 7.63 4.24 7.63 8.46 0 4.22-3.29 7.88-7.63 8.43z"
                  fill="#FFFFFF"
                />
              </svg>
            </button>
          </div>

          <p className="text-xs text-center text-gray-400 mt-4">
            Don't have an account?{" "}
            <span
              className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>

        {/* Right - Image Section */}
        <div className="w-full md:w-1/2 h-full bg-cover bg-center p-4 bg-gray-800/90" style={{ backgroundImage: `url(/eve23.jpg)` }}>
          {/* <div className="flex justify-center gap-6 pt-4">
            <span
              className="text-cyan-300 text-lg font-semibold cursor-pointer hover:underline hover:text-cyan-100 transition-colors"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
            <span
              className="text-emerald-300 text-lg font-semibold cursor-pointer hover:underline hover:text-emerald-100 transition-colors"
              onClick={() => navigate("/signup")}
            >
              Signup
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;