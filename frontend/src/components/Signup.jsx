// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from '../utils/axios'

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
//       const response = await axios.post("/api/signup",data);
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

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[rgb(22,16,16)] p-6">
//       <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col md:flex-row items-center justify-between bg-[rgb(33,33,33)] shadow-lg rounded-4xl">
//         {/* Left - Sign Up Form */}
//         <div className="w-full md:w-1/2 p-10 text-white">
//           <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6">Sign Up</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {error && <p className="text-red-500 text-center">{error}</p>}

//             <div>
//               <label className="block text-xl font-medium">Full Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label className="block text-xl font-medium">Email</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="Enter your Email"
//               />
//             </div>

//             <div>
//               <label className="block text-xl font-medium">Password</label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="Password"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full text-xl bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
//             >
//               Sign Up
//             </button>
//           </form>

//           <p className="text-base text-center mt-4">
//             Already have an account?{" "}
//             <span
//               className="text-blue-600 cursor-pointer"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </span>
//           </p>
//         </div>

//         {/* Right - Image */}
//         <div className="w-full md:w-1/2 flex justify-center items-center">
//           <img
//             className="w-full h-[300px] sm:h-[500px] object-cover rounded-4xl cursor-pointer"
//             src="/eveman6.jpg"
//             alt="Event"
//             onClick={() => navigate("/about")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;








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
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your signup logic here
    console.log({ name, email, password });
    setError(""); // Clear errors
  };

  const handleGoogleLogin = () => {
    // Google login logic
    console.log("Google login clicked");
  };

  const handleAppleLogin = () => {
    // Apple login logic
    console.log("Apple login clicked");
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-18 bg-[rgb(9,8,7)] p-4">
      <div className="w-full max-w-5xl h-[85vh] flex flex-col md:flex-row items-center justify-between bg-[rgb(5,4,3)] backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-gray-700">
        
        {/* Left - Sign Up Form */}
        <div className="w-full md:w-1/2 h-full p-8 text-white bg-[rgb(24,30,35)]">
          <h2 className="text-[#ffb300] text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight">
            Join Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <p className="text-red-400 text-center bg-red-900/30 p-3 rounded-xl text-sm font-medium">
                {error}
              </p>
            )}
            <div>
              <label className="block text-base font-medium text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-200">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sign Up
            </button>
            {/* Social Logins */}
            <div className="flex flex-row gap-3">
  <button
    type="button"
    onClick={handleGoogleLogin}
    className="w-[20vh] flex items-center justify-center gap-4 bg-gray-400 text-gray-800 py-2.5 rounded-xl hover:bg-gray-200 transition-all duration-300 text-sm font-medium shadow-md"
  >
    {/* Google SVG Logo */}
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
    className="w-[20vh] flex items-center justify-center gap-2 bg-gray-900 text-white py-2.5 rounded-xl hover:bg-gray-800 transition-all duration-300 text-sm font-medium shadow-md"
  >
    {/* Apple SVG Logo */}
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.06-7.44 7-7.93v15.86zm2-.07V2.07c4.34.58 7.63 4.24 7.63 8.46 0 4.22-3.29 7.88-7.63 8.43z"
        fill="#FFFFFF"
      />
    </svg>
  </button>
</div>
          </form>
          <p className="text-xs text-center mt-5 text-gray-400">
            Already have an account?{" "}
            <span
              className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 h-full bg-cover bg-center p-4 bg-gray-800/90" style={{ backgroundImage: `url(/eve23.jpg)` }}>
  {/* <div className="flex justify-center gap-6 pt-4">
    <span
      className="text-[#ffb300] text-lg font-semibold cursor-pointer hover:underline hover:text-cyan-100 transition-colors"
      onClick={() => navigate("/login")}
    >
      Login
    </span>
    <span
      className="text-[#ffb300] text-lg font-semibold cursor-pointer hover:underline hover:text-emerald-100 transition-colors"
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

export default Signup;