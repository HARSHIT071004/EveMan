// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Contacts from "./components/Contacts";
// import Navbar from "./components/NavBar";
// import EvemanInsights from "./components/EvemanInsights";
// import Dashboard from "./components/Dashboard";
// import CreateEvent from "./components/CreateEvent";
// import ExploreEvents from "./components/ExploreEvent";
// import EventCard from "./components/EventCard";
// import EventOverview from "./components/EventOverview";
// import Call from "./components/call";
// import About from "./components/About";
// import Email from "./components/Email";
// import FAQ from "./components/Faqs";
// import Services from "./components/Services";

// function App() {
//   const [message, setMessage] = useState("");
//   document.title = "EveMan";

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/test") 
//       .then((res) => setMessage(res.data.message))
//       .catch((err) => console.log("Error:", err));
//   }, []);

//   return (
//     <Router>
//       <Navbar /> 
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/contacts" element={<EvemanInsights />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/createevent" element={<CreateEvent />} />
//         <Route path="/exploreevent" element={<ExploreEvents />} />
//         <Route path="/eventcard" element={<EventCard />} />
//         <Route path="/eventoverview" element={<EventOverview />} />
//         <Route path="/eventoverview" element={<Contacts />} />
//         <Route path="/call" element={<Call />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/email" element={<Email />} />
//         <Route path="/faqs" element={<FAQ />} />
//         <Route path="/services" element={<Services />} />

//       </Routes>
//       <div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contacts from "./components/Contacts";
import Navbar from "./components/NavBar";
import EvemanInsights from "./components/EvemanInsights";
import Dashboard from "./components/Dashboard";
import CreateEvent from "./components/CreateEvent";
import ExploreEvents from "./components/ExploreEvent";
import EventCard from "./components/EventCard";
import EventOverview from "./components/EventOverview";
import Call from "./components/call";
import About from "./components/About";
import Email from "./components/Email";
import FAQ from "./components/Faqs";
import Services from "./components/Services";
// import EventsList from "./components/EventsList";  
import ClientForm from "./components/ClientForm";
import PrivateRoute from "./components/PrivateRoute";
import ThankYou from "./components/Thankyou";
import LiveChat from "./components/Livechat";
import { FaHelicopter } from "react-icons/fa";
import HelpCenter from "./components/Helpcenter";
function App() {
  const [message, setMessage] = useState("");
  document.title = "EveMan";

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/test") 
  //     .then((res) => setMessage(res.data.message))
  //     .catch((err) => console.log("Error:", err));
  // }, []);

  return (

    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/exploreevent" element={<ExploreEvents />} />
        <Route path="/eventcard" element={<EventCard />} />
        <Route path="/eventoverview" element={<EventOverview />} />
        <Route path="/call" element={<Call />} />
        <Route path="/about" element={<About />} />
        <Route path="/email" element={<Email />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/events" element={<EventsList />} />  */}
        <Route path="/clientform" element={<ClientForm />} />
        <Route path="/create-event" element={<PrivateRoute><CreateEvent /></PrivateRoute>} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/helpcenter" element={<HelpCenter />} />


        {/* <Route path="/explore-event" element={<PrivateRoute ></PrivateRoute>} /> */}


      </Routes>

    </Router>

  );
}

export default App;
