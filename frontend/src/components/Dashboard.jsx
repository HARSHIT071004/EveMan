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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b p-8">
      <div className="bg-gradient-to-b from-[rgb(33,33,33)] to-[rgb(8,8,8)] p-8 shadow-xl rounded-4xl w-full max-w-5xl text-center">
        <h2 className="text-5xl font-bold text-[rgb(231,183,80)] mb-6">Welcome to Your Dashboard</h2>
        <p className="text-2xl text-gray-400 mb-8">Manage and track your events seamlessly.</p>

        <div className="mt-8">
          <EventOverview />
        </div>
        <br />

        <ManagerCatalog selectedServices={selectedServices} setSelectedServices={setSelectedServices} />

        {successMessage && (
          <div className="text-green-500 font-semibold mb-4">{successMessage}</div>
        )}

        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <button
            onClick={handleLogout}
            className="px-6 py-4 bg-red-600 text-white rounded-lg text-xl font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
          >
            Logout
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-4 bg-[#12279e] text-white rounded-lg text-xl font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
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























































