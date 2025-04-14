import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, email, password };
      const response = await axios.post("/api/signup", data);
      if (response.status === 200) {
        alert(response.data.message);
        navigate("/login");
      } else {
        setError(response.data.message || "Failed to sign up");
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
    <div className="flex items-center justify-center p-4 mt-19">
      <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center justify-between bg-[rgba(27,35,41,0.8)] backdrop-blur-md shadow-2xl rounded-3xl border-2 border-gray-800/60 relative">
        <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f39c12] mb-6 tracking-wide drop-shadow-lg text-center">
            Create Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <p className="text-red-400 text-center bg-red-900/20 p-2 rounded-lg text-sm">
                {error}
              </p>
            )}

            <div>
              <label className="block text-base sm:text-lg font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-[rgb(27,35,41)]/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f39c12] transition-all duration-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-base sm:text-lg font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-[rgb(27,35,41)]/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f39c12] transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your Email"
              />
            </div>

            <div>
              <label className="block text-base sm:text-lg font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-[rgb(27,35,41)]/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f39c12] transition-all duration-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full text-lg bg-gradient-to-r from-[#f39c12] to-[#9e3c51] text-white py-2.5 rounded-xl hover:from-[#e08e0d] hover:to-[#8a2a3c] transition-all duration-300 shadow-md"
            >
              Sign Up
            </button>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 bg-white/10 text-gray-200 py-2 rounded-xl hover:bg-gray-700/20 transition-all duration-300 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.04.69-2.36 1.1-3.71 1.1-2.85 0-5.27-1.92-6.13-4.5H2.18v2.84C4.01 20.36 7.68 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.87 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.54 1 10.22 1 12s.43 3.46 1.18 4.93l3.69-2.84z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.68 1 4.01 3.64 2.18 7.07l3.69 2.84C6.73 7.33 9.15 5.38 12 5.38z"
                  />
                </svg>
                Sign up with Google
              </button>

              <button
                type="button"
                onClick={handleAppleLogin}
                className="w-full flex items-center justify-center gap-2 bg-black/10 text-gray-200 py-2 rounded-xl hover:bg-gray-700/20 transition-all duration-300 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .78-3.36.81-1.32-.03-2.17-1.25-2.97-2.47-.81-1.96-2.06-4.96-2.11-5.01-.02-.04 1.56.08 2.86 1.04 1.29.96 2.96 2.7 4.79 2.73 1.82-.02 3.47-1.73 4.27-2.68.81-.96 1.97-2.68 3.42-2.71.02-.01 2.06.01 2.3 2.61zM12.36 7.09c-.96 0-1.86-.55-2.32-1.41-.55-.96-.49-2.18.16-3.06C10.85 1.74 11.95 1 13.06 1c.96 0 1.86.55 2.32 1.41.55.96.49 2.18-.16 3.06-.65.88-1.75 1.62-2.86 1.62z" />
                </svg>
                Sign up with Apple
              </button>
            </div>
          </form>

          <p className="text-xs text-center mt-5 text-gray-400">
            Already have an account?{" "}
            <span
              className="text-[#f39c12] cursor-pointer hover:text-[#e08e0d] transition-colors"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>

        {/* <div className="w-full md:w-1/2 flex justify-center items-center relative"> */}
          <img
            className="h-[230px] sm:h-[370px] object-cover rounded-3xl mr-9 cursor-pointer w-[400px]"
            src="/eve21.jpg"
            alt="Event"
            onClick={() => navigate("/about")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
        </div>
      </div>
    // </div>
  );
};

export default Signup; 
