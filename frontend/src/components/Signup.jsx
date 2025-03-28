
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  // useRef() bhi use kar sakte ho, lekin UI update nahi hogi jab values change hogi
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const bcrypt=require("bcrypt") 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log(data);

      if (response.status == 200) {
        alert(data.message);
        navigate("/Login");
      } else {
        setError(data.message || "Failed to sign up");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };
  // rgb(8,8,8)
  return (
    <div className="flex justify-center items-center min-h-screen ">
      {/* <div className=" p-17  shadow-lg rounded-lg  h-290 bg-[rgb(33,33,33)] w-400">
      <div className="w-1/2 flex justify-center padding-5">
    <img
      className="h-[900px] w-[1600px] object-cover rounded-4xl cursor-pointer"
      src="/eveman5.jpg"
      alt="Event"
      onClick={() => navigate("/about")}
    />
  </div>
        <h2 className="text-6xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-12">
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div>
            <label className="block text-2xl font-medium">Full Name</label>
            <input
              type="text"
              className=" px-4 w-[4] py-5 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder ="Enter your name"
            />
          </div>
          <div>
            <label className="block text-2xl font-medium">Email</label>
            <input
              type="email"
              className="w-[4] px-3 py-6 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder ="Enter your Email"
            />
          </div>
          <div>
            <label className="block text-2xl font-medium">Password</label>
            <input
              type="password"
              className="w-[4] px-3 py-6 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder ="Password"
            />
          </div>
          <button
            type="submit"
            className="w-[17%] text-2xl  bg-blue-600 text-white py-6 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        
        <p className="text-2xl text-center mt-4 mr-280 ">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div> */}








<div className="flex items-center justify-between p-17 shadow-lg rounded-4xl h-150 mt-19 bg-[rgb(22,16,16)] w-200">
  {/* Left - Sign Up Form */}
  <div className="w-1/2 p-10">
    <h2 className="text-6xl font-semibold text-center mb-6">Sign Up</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-500 text-center">{error}</p>}
      
      <div>
        <label className="block text-2xl font-medium">Full Name</label>
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
        <label className="block text-2xl font-medium">Email</label>
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
        <label className="block text-2xl font-medium">Password</label>
        <input
          type="password"
          className="w-full px-4 py-3 border focus:outline-none focus:ring focus:ring-blue-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        className="w-full text-2xl bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
      >
        Sign Up
      </button>
    </form>

    <p className="text-1xl text-center mt-4">
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
  <div className="w-1/2 flex justify-center">
    <img
      className="h-[300px] w-[1600px] object-cover rounded-4xl cursor-pointer"
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
