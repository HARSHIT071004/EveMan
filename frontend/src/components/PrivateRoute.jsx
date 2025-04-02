// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("token"); 
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };
// export default PrivateRoute;



import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check if token exists in localStorage
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
