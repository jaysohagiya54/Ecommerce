import { Navigate, Outlet } from 'react-router-dom';
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const AdminWrapper =({isAdmin}) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <Fragment>
       
//     </Fragment>
//   )
  

  return (isAdmin === true && user.role !== "admin") ? <Navigate to="/login" /> : <Outlet/>;
};
export default AdminWrapper;
