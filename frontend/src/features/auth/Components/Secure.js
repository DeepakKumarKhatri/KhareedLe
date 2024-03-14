import React from "react";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";

/**
 * A React component that checks if a user is logged in.
 * If the user is not logged in, it redirects them to the sign-in page.
 * If the user is logged in, it renders the children components.
 */
const Secure = ({ children }) => {
  const loggedInUser = useSelector(selectLoggedInUser);

  if (!loggedInUser) {
    return <Navigate to="/signin" replace={true} />;
  }

  return children;
};

export default Secure;
