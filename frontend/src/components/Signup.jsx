import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");  // Added error state
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const data = { email, password };  // Corrected: added the correct data structure
      const response = await axios.post("/api/signup");
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

  const isSignupActive = location.pathname === "/signup";

  return (
    <div className="min-h-screen bg-[#000] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] mt-12 bg-gradient-to-br from-[#1E2A2D] to-[#2B383B] rounded-2xl shadow-2xl flex flex-col lg:flex-row" style={{ minHeight: "80vh" }}>
        
        <div className="w-full lg:w-[35%] bg-gradient-to-br from-[#1A1A1A] to-[#1E2527] rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-6 flex flex-col justify-between text-white">
          <div className="space-y-10">
            <div className="flex items-center mb-6"></div>
            <div className="space-y-5">
              <Link to="/login" className={`flex items-center gap-2 text-lg font-serif font-medium text-gray-300 hover:text-amber-400 transition-all duration-300 relative group ${!isSignupActive ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-amber-400 after:to-amber-600 after:rounded-full" : ""}`}>
                <FaArrowRight className="w-4 h-4" />
                <span className="relative z-10">Log In</span>
              </Link>
              <Link to="/signup" className={`flex items-center gap-2 text-lg font-serif font-medium text-gray-300 hover:text-amber-400 transition-all duration-300 relative group ${isSignupActive ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-amber-400 after:to-amber-600 after:rounded-full" : ""}`}>
                <FaArrowRight className="w-4 h-4" />
                <span className="relative z-10">Sign Up</span>
              </Link>
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-6 border-t border-gray-600 pt-4 opacity-80 hover:opacity-100 transition-opacity duration-300">Terms of Use & Contradictions</div>
        </div>

        <div className="w-full lg:w-[75%] bg-[rgb(20,19,19)] rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none p-8 flex items-center justify-center">
          <div className="w-full max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-amber-400 mb-6 text-center drop-shadow-md">Join US</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-400 transition-colors" />
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-[rgb(47,57,65)] border border-[#2D3A3E] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all duration-300" placeholder="Enter your email" required />
              </div>
              <div className="relative group">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-400 transition-colors" />
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-[rgb(47,57,65)] border border-[#2D3A3E] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all duration-300" placeholder="Create a password" required />
              </div>
              <div className="relative group">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-400 transition-colors" />
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-[rgb(47,57,65)] border border-[#2D3A3E] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all duration-300" placeholder="Confirm your password" required />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-[#2D3A3E] font-semibold py-2 px-4 rounded-md hover:from-amber-500 hover:to-amber-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                Sign Up
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            {error && <p className="text-center text-red-500 text-sm mt-4">{error}</p>} {/* Display error message */}
            <p className="text-center text-gray-400 text-sm mt-4">Already have an account? <Link to="/login" className="text-amber-400 hover:text-amber-300 transition-colors duration-200">Log In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
