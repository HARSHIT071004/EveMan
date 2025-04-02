import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../utils/axios'

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
      const response = await axios.post("/api/signup",data);
      console.log(response.data);

      if (response.status === 200) {
        alert(response.data.message);
        navigate("/Login");
      } else {
        setError(response.data.message || "Failed to sign up");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(22,16,16)] p-6">
      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col md:flex-row items-center justify-between bg-[rgb(33,33,33)] shadow-lg rounded-4xl">
        {/* Left - Sign Up Form */}
        <div className="w-full md:w-1/2 p-10 text-white">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div>
              <label className="block text-xl font-medium">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-xl font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your Email"
              />
            </div>

            <div>
              <label className="block text-xl font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full text-xl bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>

          <p className="text-base text-center mt-4">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="w-full h-[300px] sm:h-[500px] object-cover rounded-4xl cursor-pointer"
            src="/eveman6.jpg"
            alt="Event"
            onClick={() => navigate("/about")}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
