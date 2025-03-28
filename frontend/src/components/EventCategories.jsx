








// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // const categories = [
// //   {
// //     title: "Personal & Social Events",
// //     subcategories: ["Weddings", "Birthdays", "Anniversaries", "Baby Showers", "Housewarming"],
// //     bgColor: "bg-[rgb(24,90,57)]",
// //     textColor: "text-gray-100",
// //   },
// //   {
// //     title: "Corporate & Business Events",
// //     subcategories: ["Conferences", "Product Launches", "Awards", "Team Building", "Dinners"],
// //     bgColor: "bg-[rgb(24,90,57)]",
// //     textColor: "text-gray-100",
// //   },
// //   {
// //     title: "Cultural & Community Events",
// //     subcategories: ["Festivals", "Charity", "Religious", "Art Shows", "Food Festivals"],
// //     bgColor: "bg-[rgb(24,90,57)]",
// //     textColor: "text-gray-100",
// //   },
// //   {
// //     title: "Educational & Training Events",
// //     subcategories: ["Workshops", "Webinars", "Career Fairs", "Graduations", "Exhibitions"],
// //     bgColor: "bg-[rgb(24,90,57)]",
// //     textColor: "text-gray-100",
// //   },
// //   {
// //     title: "Entertainment & Public Events",
// //     subcategories: ["Concerts", "Sports", "Premieres", "Comedy Shows", "Fashion Shows"],
// //     bgColor: "bg-[rgb(24,90,57)]",
// //     textColor: "text-gray-100",
// //   },
// // ];

// // const EventCategories = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="w-full  flex items-center relative">
// //       {/* Left Section - Image */}
// //       <div className="w-1/2 mr-80 flex justify-end">
// //         <img
// //           className="mt-10 w-[60%] h-[60vh] object-cover rounded-lg shadow-lg"
// //           src="/eve12.jpeg"
// //           alt="Event"
// //         />
// //       </div>

// //       {/* Right Section - Event Categories */}
// //       <div className="w-1/2 ml-8">
// //         <h2 className="text-5xl text-gray-100 font-semibold mb-6 drop-shadow-md">
// //           Event Categories
// //         </h2>

// //         <div className="flex flex-wrap gap-4 justify-between">
// //           {categories.map((category, index) => (
// //             <div
// //               key={index}
// //               onClick={() => navigate(`/ExploreEvent?category=${encodeURIComponent(category.title)}`)}
// //               className={`${category.bgColor} shadow-lg p-4 rounded-2xl transition duration-300 w-[48%] h-[280px] cursor-pointer border border-gray-900 hover:shadow-2xl hover:scale-105`}
// //             >
// //               <h3 className={`text-lg font-semibold mb-2 ${category.textColor}`}>
// //                 {category.title}
// //               </h3>
// //               <ul className="text-sm opacity-80 space-y-1">
// //                 {category.subcategories.map((item, i) => (
// //                   <li key={i} className="text-gray-200 px-1 py-0.5 rounded-lg">
// //                     {item}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EventCategories;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const categories = [
//   {
//     title: "Personal & Social Events",
//     subcategories: ["Weddings", "Birthdays", "Anniversaries", "Baby Showers", "Housewarming"],
//     bgColor: "bg-gray-800",
//     textColor: "text-gray-100",
//   },
//   {
//     title: "Corporate & Business Events",
//     subcategories: ["Conferences", "Product Launches", "Awards", "Team Building", "Dinners"],
//     bgColor: "bg-gray-800",
//     textColor: "text-gray-100",
//   },
//   {
//     title: "Cultural & Community Events",
//     subcategories: ["Festivals", "Charity", "Religious", "Art Shows", "Food Festivals"],
//     bgColor: "bg-gray-800",
//     textColor: "text-gray-100",
//   },
//   {
//     title: "Educational & Training Events",
//     subcategories: ["Workshops", "Webinars", "Career Fairs", "Graduations", "Exhibitions"],
//     bgColor: "bg-gray-800",
//     textColor: "text-gray-100",
//   },
//   {
//     title: "Entertainment & Public Events",
//     subcategories: ["Concerts", "Sports", "Premieres", "Comedy Shows", "Fashion Shows"],
//     bgColor: "bg-gray-800",
//     textColor: "text-gray-100",
//   },
// ];

// const EventCategories = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full flex items-center relative bg-gray-900 py-12 px-10">
//       {/* Left Section - Image */}
//       <div className="w-1/2 flex justify-center">
//         <img
//           className="w-[70%] h-[60vh] object-cover rounded-3xl shadow-2xl border border-gray-700 transform hover:scale-105 transition-transform duration-500"
//           src="/eve12.jpeg"
//           alt="Event"
//         />
//       </div>

//       {/* Right Section - Event Categories */}
//       <div className="w-1/2 ml-8">
//         <h2 className="text-5xl text-gray-100 font-semibold mb-8 drop-shadow-lg">
//           Event Categories
//         </h2>

//         <div className="flex gap-4 w-full">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/ExploreEvent?category=${encodeURIComponent(category.title)}`)}
//               className={`${category.bgColor} shadow-xl p-5 rounded-2xl transition duration-300 flex-1 h-[280px] min-w-0 cursor-pointer border border-gray-700 hover:shadow-2xl hover:scale-105 hover:bg-gray-700`}
//             >
//               <h3 className={`text-lg font-semibold mb-3 ${category.textColor}`}>
//                 {category.title}
//               </h3>
//               <ul className="text-sm opacity-80 space-y-2">
//                 {category.subcategories.map((item, i) => (
//                   <li key={i} className="text-gray-300 px-2 py-1 rounded-lg hover:bg-gray-600 transition-colors duration-200">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCategories;


import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Personal & Social Events",
    subcategories: ["Weddings", "Birthdays", "Anniversaries", "Baby Showers", "Housewarming"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[rgb(255,255,255)]",
  },
  {
    title: "Corporate & Business Events",
    subcategories: ["Conferences", "Products", "Awards", "Team Building", "Dinners"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[rgb(255,255,255)]",
  },
  {
    title: "Cultural & Community Events",
    subcategories: ["Festivals", "Charity", "Religious", "Art Shows", "Food Festivals"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[rgb(255,255,255)]",
  },
  {
    title: "Educational & Training Events",
    subcategories: ["Workshops", "Webinars", "Career Fairs", "Graduations", "Exhibitions"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[rgb(255,255,255)]",
  },
  {
    title: "Entertainment & Public Events",
    subcategories: ["Concerts", "Sports", "Premieres", "Comedy Shows", "Fashion Shows"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[rgb(255,255,255)]",
  },
];

const EventCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center relative border-blue bg-[rgb(224,231,171)] py-12 px-10">
      {/* Left Section - Image */}
      <div className="w-[40%] flex justify-center">
{/* 
      <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="md:w-1/2 relative overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] shadow-xl hover:shadow-purple-700 transition-all duration-500 ease-in-out"
    >
      <img
          className="w-full h-[60vh] object-cover rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-500"
          src="/eve12.jpeg"
          alt="Event"
          onClick={() => navigate("/about")}

        />
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex items-center justify-center z-10 animate-fade-in-fast">
          <h1
            onClick={() => navigate("/about")}
            className="text-4xl md:text-6xl font-bold text-gray-100 hover:text-purple-400 cursor-pointer transition-colors duration-300 drop-shadow-md"
          >
            About Us
          </h1>
        </div>
      )}
    </div>
  </div> */}
{/* </div> */}
        <img
          className="w-full h-[60vh] object-cover rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-500"
          src="/eve12.jpeg"
          alt="Event"
          onClick={() => navigate("/about")}

        />
      // </div>

      {/* Right Section - Event Categories */}
      <div className="w-[60%] ml-8">
        <h2 className="text-5xl text-[#000000] font-bold mb-8 drop-shadow-lg">
          Event Categories
        </h2>

        <div className="flex gap-4 w-full">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/ExploreEvent?category=${encodeURIComponent(category.title)}`)}
              className={`${category.bgColor} shadow-xl p-5 rounded-2xl transition duration-300 flex-1 min-w-0 cursor-pointer border border-gray-700 hover:shadow-2xl hover:scale-105 `}
            >
              <h3 className={`text-lg font-semibold mb-3 ${category.textColor}`}>
                {category.title}
              </h3>
              <ul className="text-sm opacity-80 space-y-2">
                {category.subcategories.map((item, i) => (
                  <li key={i} className="text-[rgb(212,252,255)] px-2 py-1 rounded-lg  transition-colors duration-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCategories;