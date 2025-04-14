// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from '../utils/axios';

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = { name, email, password };
//       const response = await axios.post("/api/signup", data);
//       console.log(response.data);
//       if (response.status === 200) {
//         alert(response.data.message);
//         navigate("/Login");
//       } else {
//         setError(response.data.message || "Failed to sign up");
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   const handleGoogleLogin = () => {
//     console.log("Google login clicked");
//   };

//   const handleAppleLogin = () => {
//     console.log("Apple login clicked");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen  bg-[rgb(22,16,16)] p-4">
//       <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col md:flex-row items-center justify-between bg-black shadow-2xl rounded-3xl overflow-hidden border border-gray-700">
//         {/* Left - Sign Up Form */}
//         <div className="w-full md:w-1/2 p-6 text-white">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//             Create Account
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {error && (
//               <p className="text-red-400 text-center bg-red-900/20 p-2 rounded-lg text-sm">
//                 {error}
//               </p>
//             )}

//             <div>
//               <label className="block text-base font-medium text-gray-300">Full Name</label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label className="block text-base font-medium text-gray-300">Email</label>
//               <input
//                 type="email"
//                 className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="Enter your Email"
//               />
//             </div>

//             <div>
//               <label className="block text-base font-medium text-gray-300">Password</label>
//               <input
//                 type="password"
//                 className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="Password"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
//             >
//               Sign Up
//             </button>

//             {/* Social Login Buttons */}
//             <div className="flex flex-col gap-2">
//               <button
//                 type="button"
//                 onClick={handleGoogleLogin}
//                 className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 py-2 rounded-lg hover:bg-gray-500 transition-all duration-300 text-sm"
//               >
//                 <svg className="w-4 h-4" viewBox="0 0 24 24">
//                   <path
//                     fill="#4285F4"
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   />
//                   <path
//                     fill="#34A853"
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.04.69-2.36 1.1-3.71 1.1-2.85 0-5.27-1.92-6.13-4.5H2.18v2.84C4.01 20.36 7.68 23 12 23z"
//                   />
//                   <path
//                     fill="#FBBC05"
//                     d="M5.87 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.54 1 10.22 1 12s.43 3.46 1.18 4.93l3.69-2.84z"
//                   />
//                   <path
//                     fill="#EA4335"
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.68 1 4.01 3.64 2.18 7.07l3.69 2.84C6.73 7.33 9.15 5.38 12 5.38z"
//                   />
//                 </svg>
//                 Sign up with Google
//               </button>

//               <button
//                 type="button"
//                 onClick={handleAppleLogin}
//                 className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm"
//               >
//                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
//                   <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .78-3.36.81-1.32-.03-2.17-1.25-2.97-2.47-.81-1.96-2.06-4.96-2.11-5.01-.02-.04 1.56.08 2.86 1.04 1.29.96 2.96 2.7 4.79 2.73 1.82-.02 3.47-1.73 4.27-2.68.81-.96 1.97-2.68 3.42-2.71.02-.01 2.06.01 2.3 2.61zM12.36 7.09c-.96 0-1.86-.55-2.32-1.41-.55-.96-.49-2.18.16-3.06C10.85 1.74 11.95 1 13.06 1c.96 0 1.86.55 2.32 1.41.55.96.49 2.18-.16 3.06-.65.88-1.75 1.62-2.86 1.62z"/>
//                 </svg>
//                 Sign up with Apple
//               </button>
//             </div>
//           </form>

//           <p className="text-xs text-center mt-4 text-gray-400">
//             Already have an account?{" "}
//             <span
//               className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </span>
//           </p>
//         </div>

//         {/* Right - Image */}
//         <div className="w-full md:w-1/2 flex justify-center items-center relative ">
//           <img
//             className="w-[290px] h-[130px] sm:h-[350px] object-cover rounded-3xl cursor-pointer "
//             src="/eveman6.jpg"
//             alt="Event"
//             onClick={() => navigate("/about")}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;





import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaLock, FaArrowRight, FaShieldAlt } from "react-icons/fa";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5004/api/auth/signup", {
        name: email.split("@")[0],
        email,
        password,
      });
      if (res.status === 201) {
        alert("Signup successful! Please login.");
        navigate("/login");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed. Try again.");
    }
  };

  const isSignupActive = location.pathname === "/signup";

  return (
    <div className="min-h-screen bg-[#000] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div
        className="w-full sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] mt-8 bg-gradient-to-br from-[#1E2A2D] to-[#2B383B] rounded-2xl shadow-2xl flex flex-col lg:flex-row"
        style={{ minHeight: "65vh" }}
      >
        {/* Left Sidebar */}
        <div className="w-full lg:w-[35%] bg-gradient-to-br from-[#1A1A1A] to-[#1E2527] rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-6 flex flex-col justify-between text-white">
          <div className="space-y-8">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="w-8 h-8 mr-2 text-amber-400" />
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                SecureSync
              </span>
            </div>
            <div className="space-y-4">
              <Link
                to="/login"
                className={`flex items-center gap-2 text-lg font-serif font-medium text-gray-300 hover:text-amber-400 transition-all duration-300 relative group ${
                  !isSignupActive
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-amber-400 after:to-amber-600 after:rounded-full"
                    : ""
                }`}
              >
                <FaArrowRight className="w-4 h-4" />
                <span className="relative z-10">Log In</span>
              </Link>
              <Link
                to="/signup"
                className={`flex items-center gap-2 text-lg font-serif font-medium text-gray-300 hover:text-amber-400 transition-all duration-300 relative group ${
                  isSignupActive
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-amber-400 after:to-amber-600 after:rounded-full"
                    : ""
                }`}
              >
                <FaArrowRight className="w-4 h-4" />
                <span className="relative z-10">Sign Up</span>
              </Link>
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-4 border-t border-gray-600 pt-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
            Terms of Use & Contradictions
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-[65%] bg-[rgb(20,19,19)] rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none p-8 flex items-center justify-center">
          <div className="w-full max-w-md space-y-5">
            <h2 className="text-3xl font-bold text-amber-400 mb-4 text-center drop-shadow-md">
              Join US
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative group">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-400 transition-colors" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[rgb(47,57,65)] border border-[#2D3A3E] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="relative group">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-400 transition-colors" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[rgb(47,57,65)] border border-[#2D3A3E] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all duration-300"
                  placeholder="Create a password"
                  required
                />
              </div>
              <div className="relative group">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-400 transition-colors" />
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[rgb(47,57,65)] border border-[#2D3A3E] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all duration-300"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-[#2D3A3E] font-semibold py-2 px-4 rounded-md hover:from-amber-500 hover:to-amber-700 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Sign Up
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="text-center text-gray-400 text-sm mt-3">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;