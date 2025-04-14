import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
const ClientForm = () => {
  const [formData, setFormData] = useState({
    budget: "",
    category: "",
    requirements: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.budget || !formData.category || !formData.requirements) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("/api/clientevent", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert(response.data.message);
        navigate("/Dashboard");
      } else {
        setError(response.data.message || "Failed to submit request");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center mt-18 justify-center min-h-screen bg-[rgb(9,8,7)] p-4">
      <div className="w-full max-w-5xl h-[85vh] flex flex-col md:flex-row items-center justify-between bg-black/40 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-gray-700">
        
        {/* Left - Form Section */}
        <div className="w-full md:w-1/2 h-full p-8 text-white bg-[rgb(24,30,35)] flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 bg-[#ffb300] bg-clip-text text-[#ffb300] ">
              Plan Your Event
            </h2>
            {error && (
              <p className="text-red-400 text-center bg-red-900/20 p-2 rounded-lg text-sm">
                {error}
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-base font-medium text-gray-300">Budget</label>
                <input
                  type="number"
                  name="budget"
                  placeholder="Enter your budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-300">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                >
                  <option value="">Select Category</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate</option>
                  <option value="party">Party</option>
                </select>
              </div>

              <div>
                <label className="block text-base font-medium text-gray-300">Requirements</label>
                <textarea
                  name="requirements"
                  placeholder="Any specific requirements?"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit Request
              </button>
            </form>
          </div>

          <p className="text-xs text-center text-gray-400 mt-4">
            Want to go back?{" "}
            <span
              className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors"
              onClick={() => navigate("/createevent")}
            >
              Create Event
            </span>
          </p>
        </div>

        {/* Right - Image Section */}
        <div className="w-full md:w-1/2 h-full bg-cover bg-center p-4 bg-gray-800/90" style={{ backgroundImage: `url(/eve23.jpg)` }}>
          <div className="flex justify-center gap-6 pt-4">
            <span
              className="text-cyan-300 text-lg font-semibold cursor-pointer hover:underline hover:text-cyan-100 transition-colors"
              onClick={() => navigate("/clientform")}
            >
              Plan
            </span>
            <span
              className="text-emerald-300 text-lg font-semibold cursor-pointer hover:underline hover:text-emerald-100 transition-colors"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;