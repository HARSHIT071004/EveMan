
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    budget: "",
    category: "",
    // location: "",
    requirements: "",
  });
  // const [loading, setLoading] = useState(false);
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

    // setLoading(true);
    // setError("");

    try {
      const response = await fetch("http://localhost:5000/api/clientevent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(data.message);
        navigate("/Dashboard");
      } else {
        setError(data.message || "Failed to submit request");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } 
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[rgb(33,33,33)] mt-19 p-8 rounded-2xl shadow-lg h-140 w-[65%]">
        <h2 className="text-4xl font-bold text-center text-[rgb(255,255,255)] mb-6">
          Plan Your Event
        </h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="number"
            name="budget"
            placeholder="Enter your budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full py-3 text-1xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full py-3 text-1xl border rounded-lg focus:outline-none bg-[rgb(33,33,33)] focus:ring-2 focus:ring-blue-400"
          >
            <option  className="text-white "value="">Select Category</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate</option>
            <option value="party">Party</option>
          </select>
          <textarea
            name="requirements"
            placeholder="Any specific requirements?"
            value={formData.requirements}
            onChange={handleChange}
            className="w-full py-3 text-1xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-3xl text-white font-semibold px-4 py-7 rounded-lg hover:bg-blue-700 transition-all duration-300"
            // disabled={loading}
          >
           Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
