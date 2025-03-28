import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(data.message);
        localStorage.setItem("token",data.token)
        navigate("/createevent");
      } else {
        setError(data.message || "Failed to login"); 
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r">
      <div className="bg-[rgb(22,16,16)] backdrop-blur-lg shadow-lg rounded-2xl mt-29 w-150 h-130 p-15">
      <h2 className="text-6xl font-semibold text-center text-white mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text- text-1xl font-medium">Email</label>
            <input
              type="email"
              className="w-full px-2 text-2xl py-1 border border-gray-300 rounded-lg bg-white/40 backdrop-blur-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label className="block text-white text-1xl">Password</label>
            <input
              type="password"
              className="w-full px-2 py-1 border border-gray-300 text-2xl rounded-lg bg-white/40 backdrop-blur-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => {
                return setPassword(e.target.value);
              }}
              required
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="text-1xl w-full bg-blue-600 text-white py-3 mt-21 rounded-lg  font-semibold shadow-lg transition hover:bg-blue-700 hover:scale-105"
          >
            Login 
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>} 
        <p className="text-1xl text-center text-white mt-4">
          Don't have an account?{" "}
          <span

  className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/signup")}          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
