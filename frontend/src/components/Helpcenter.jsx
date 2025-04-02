// import LiveChat from "./Livechat";
// import React from "react";
// const HelpCenter = () => {
//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">Help Center</h1>
//       <LiveChat />
//     </div>
//   );
// };

// export default HelpCenter;






import React from "react";
import LiveChat from "./Livechat";

const HelpCenter = () => {
  return (
    <div className="p-4 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
        Help Center
      </h1>
      <LiveChat />
    </div>
  );
};

export default HelpCenter;
