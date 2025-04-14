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

  return (
    <div className="flex items-center justify-center mt-17 min-h-[90vh] p-6">
      <div className="flex w-full max-w-6xl h-[600px] bg-[rgba(27,35,41,0.8)] backdrop-blur-md shadow-2xl rounded-3xl border-2 border-gray-800/60 overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-1/3 bg-[#11191f] p-6 flex flex-col items-center justify-center gap-6 border-r border-gray-800">
          {/* <h2 className="text-3xl font-bold text-[#f39c12] drop-shadow-lg">Welcome!</h2> */}
          <p
            onClick={() => navigate("/login")}
            className="text-[#f39c12] text-sm font-semibold cursor-pointer hover:underline decoration-2 underline-offset-4 hover:decoration-double"
          >
            Login
          </p>
          <p
            onClick={() => navigate("/signup")}
            className="text-[#f39c12] text-sm font-semibold cursor-pointer hover:underline decoration-2 underline-offset-4 hover:decoration-double"
          >
            Signup
          </p>
        </div>

        {/* Main Form */}
        <div className="w-2/3 p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f39c12] mb-6 text-center">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
            {error && (
              <p className="text-red-400 text-center bg-red-900/20 p-2 rounded-lg text-sm">
                {error}
              </p>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-[#1b2329] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f39c12]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-[#1b2329] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f39c12]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full px-4 py-2 bg-[#1b2329] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f39c12]"
              />
            </div>

            <button
              type="submit"
              className="w-full text-lg bg-gradient-to-r from-[#f39c12] to-[#9e3c51] text-white py-2.5 rounded-xl hover:from-[#e08e0d] hover:to-[#8a2a3c] transition-all duration-300 shadow-md"
            >
              Sign Up
            </button>

            <p className="text-xs text-center mt-5 text-gray-400">
              Already have an account?{" "}
              <span
                className="text-[#f39c12] cursor-pointer hover:text-[#e08e0d] transition-colors"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
// isko ui sab same rkhn bss login aur sgnup ke underline aani chahiye 