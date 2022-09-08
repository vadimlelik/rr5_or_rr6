import React from "react";
import { Route, Redirect, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../store/authSlice";
function ProtectedRoute({ children }) {
  const location = useLocation();
  const isLoggedIn = useSelector(isLoggedInSelector());
  if (!isLoggedIn)
    return <Navigate to="/auth/login" state={{ referrer: location }} />;
  return children;

  // return (
  //   <Route element={isLoggedIn ? element : <Navigate to="/" />} {...rest}>
  //     {children}
  //   </Route>
  // );

  // return (
  //   <Route
  //     {...rest}
  //     render={(props) => {
  //       if (!isLoggedIn) {
  //         return (
  //           <Redirect
  //             to={{
  //               pathname: "/auth/login",
  //               state: {
  //                 referrer: props.location,
  //               },
  //             }}
  //           />
  //         );
  //       }
  //       return Component ? <Component {...props} /> : children;
  //     }}
  //   />
  // );
}
export default ProtectedRoute;
