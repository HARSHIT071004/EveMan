





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !date) {
      setError("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");  
      


      const response = await fetch("http://localhost:5000/api/createevent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          // "Authorization": `token`,

        },
        body: JSON.stringify({ name, description, date }),
      });


      const data = await response.json();
      setLoading(false);

      if (response.status === 200) {
        alert(data.message);
        navigate("/Clientform");
      } else {
        setError(data.message || "Failed to create event");
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className=" mt-70 bg-gradient-to-br p-6 flex items-center justify-center">
      <div className=" w-[40%] h-140   bg-[rgb(22,16,16)] backdrop-blur-xl p-3 rounded-2xl shadow-xl">
        <h2 className="text-5xl text-[rgb(255,255,255)] font-bold mt-7 text-center  mb-3">Create Event</h2>
        {error && <div className=" text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="ml-29 space-y-4">
          <div>
            <label className="block text-1xl font-medium">Name</label>
            <input
              type="text"
              className="w-[79%] px-2 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-1xl font-medium">Description</label>
            <textarea
              className="w-[79%] px-2 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-1xl font-medium"> Date</label>
            <input
              type="date"
              className="w-[79%] px-2 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className=" w-[79%] px-2 py-3 mt-10 text-2xl bg-blue-600 text-white  rounded-2xl hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Event"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;

























