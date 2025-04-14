import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import EventOverview from "./EventOverview";
import ManagerCatalog from "./ManagerCatalog";
import axios from '../utils/axios'

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/allevents",{selectedServices}, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert(response.data.message);
        navigate("/thankyou");
      } else {
        setSuccessMessage(response.data.message || "Failed to create event");
      }
    } catch (error) {
      setSuccessMessage("An error occurred. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[rgb(9,8,7)] p-8">
      <div className="bg-[rgb(24,30,35)] backdrop-blur-md p-6 shadow-xl rounded-3xl w-full max-w-6xl h-[70vh] text-center border border-gray-700">
        <h2 className="text-4xl font-bold text-[#ffb300] mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
          Welcome to Your Dashboard
        </h2>
        <p className="text-sm text-gray-400 mb-8">Manage and track your events seamlessly.</p>

        <div className="mt-6">
          <EventOverview />
        </div>
       

        <ManagerCatalog selectedServices={selectedServices} setSelectedServices={setSelectedServices} />

        {successMessage && (
          <div className="text-green-500 font-semibold mb-4">{successMessage}</div>
        )}

        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-xl font-semibold shadow-md hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition"
          >
            Logout
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-xl font-semibold shadow-md hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition"
          >
            Submit Details
          </button>
        </div>

        <br />
      </div>
    </div>
  );
};

export default Dashboard;