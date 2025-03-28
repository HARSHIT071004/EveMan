// // // import { useNavigate } from "react-router-dom";
// // // import React, { useState } from "react";
// // // import EventOverview from "./EventOverview";
// // // import ManagerCatalog from "./ManagerCatalog";

// // // const Dashboard = () => {
// // //   const navigate = useNavigate();
// // //   const [selectedServices, setSelectedServices] = useState([]);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     navigate("/allevents");
// // //   //   try {
// // //   //     const response = await fetch("http://localhost:5000/api/createevent", {
// // //   //       method: "POST",
// // //   //       headers: {
// // //   //         "Content-Type": "application/json",
// // //   //       },
// // //   //       body: JSON.stringify({ name, description, date }),
// // //   //     });

// // //   //     const data = await response.json();

// // //   //     if (response.status === 200) {
// // //   //       alert(data.message);
// // //   //       navigate("/Clientform");
// // //   //     } else {
// // //   //       setError(data.message || "Failed to create event");
// // //   //     }
// // //   //   } catch (error) {
// // //   //     setError("An error occurred. Please try again.");
// // //   //   } 
// // //   // };




// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     navigate("/home");
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-8">
// // //       <div className="bg-white p-10 shadow-xl rounded-2xl w-full max-w-5xl text-center">
// // //         <h2 className="text-4xl font-bold text-gray-800 mb-6">🎉 Welcome to Your Dashboard</h2>
// // //         <p className="text-lg text-gray-600">Manage and track your events seamlessly.</p>

// // //         <div className="mt-8">
// // //           <EventOverview />
// // //         </div>

// // //         <ManagerCatalog selectedServices={selectedServices} setSelectedServices={setSelectedServices} />



// // //         <button
// // //           onClick={handleSubmit}
// // //           className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
// // //         >
// // //           Submit karo
// // //         </button>
// // //         <br/>
// // //         <button
// // //           onClick={handleLogout}
// // //           className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
// // //         >
// // //           Logout 🚪
// // //         </button>
// // //         {/* <button
// // //           onClick={()=>{navigate("/CreateEvent")}} 
// // //           className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
// // //         >
// // //           createevent
// // //         </button>
// // //         <button
// // //           onClick={()=>{navigate("/")}} 
// // //           className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
// // //         >
// // //           home
// // //         </button> */}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;









// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import EventOverview from "./EventOverview";
// import ManagerCatalog from "./ManagerCatalog";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/allevents", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ selectedServices }),
//       });

//       const data = await response.json();

//       if (response.status === 200) {
//         alert(data.message);
//         navigate("/allevents");
//       } else {
//         setError(data.message || "Failed to create event");
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again.");
//     } 
//   };
//     // alert("humare paas aapki details aahuki hai!");
//     // // setTimeout(() => {
//     //   navigate("/allevents");
//     // }, 3000);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/home");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-8">
//       <div className="bg-white p-10 shadow-xl rounded-2xl w-full max-w-5xl text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-6">🎉 Welcome to Your Dashboard</h2>
//         <p className="text-lg text-gray-600">Manage and track your events seamlessly.</p>

//         <div className="mt-8">
//           <EventOverview />
//         </div>

//         <ManagerCatalog selectedServices={selectedServices} setSelectedServices={setSelectedServices} />

//         {successMessage && (
//           <div className="text-green-500 font-semibold mb-4">
//             {successMessage}
//           </div>
//         )}

//         <button
//           onClick={handleSubmit}
//           className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
//         >
//           Submit karo
//         </button>
//         <br />
//         <button
//           onClick={handleLogout}
//           className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
//         >
//           Logout 🚪
//         </button>
//       </div>
//     </div>
//   );
// // };

// export default Dashboard;


import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import EventOverview from "./EventOverview";
import ManagerCatalog from "./ManagerCatalog";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/allevents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedServices }),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(data.message);
        navigate("/thankyou");
      } else {
        setSuccessMessage(data.message || "Failed to create event");
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
      <div className=" bg-gradient-to-b from-[rgb(33,33,33)] to-[rgb(8,8,8)] p-10 shadow-xl rounded-4xl w-[75%] h-450 text-center">
        <h2 className="text-5xl font-bold text-[rgb(231,183,80)] mb-6"> Welcome to Your Dashboard</h2>
        <p className="text-2xl text-gray-400">Manage and track your events seamlessly.</p>

        <div className="mt-8">
          <EventOverview />
        </div>
<br/><br/>
        <ManagerCatalog selectedServices={selectedServices} setSelectedServices={setSelectedServices} />

        {successMessage && (
          <div className="text-green-500 font-semibold mb-4">
            {successMessage}
          </div>
        )}

        {/* <button
          onClick={handleSubmit}
          className="mt-8 px-9 py-7 bg-[#12279e] text-white rounded-lg text-2xl font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
        >
          Submit Details
        </button>
        <br />
        <button
          onClick={handleLogout}
          className="mt-8 px-11 py-7 bg-red-600 text-white rounded-lg text-2xl font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
        >
          Logout 
        </button> */}
        <div className="ml-370 mt-8 gap-3 flex  w-full px-4">
  <button
    onClick={handleLogout}
    className="px-11 py-7 bg-red-600 text-white rounded-lg text-2xl font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
  >
    Logout
  </button>

  <button
    onClick={handleSubmit}
    className="px-9 py-7 bg-[#12279e] text-white rounded-lg text-2xl font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition"
  >
    Submit Details
  </button>
</div>

        <br/><br/><br/>
      </div>
    </div>
  );
};

export default Dashboard;
























































