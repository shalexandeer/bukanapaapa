import React, { lazy, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import UserLayout from "../components/layout/UserLayout";
import UserInformation from "../pages/Protected/UserInformation";

const ProtectedRoutes: React.FC = () => {
  // const location = useLocation();
  // const { token } = useAuth();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, [location]);

  // if (!token) {
  //   return <Navigate replace to="/auth/login" />;
  // }

  return (
    <Routes>
      <Route element={<UserLayout />}>
        {/* Add your protected routes here */}
        <Route path="/*" element={<UserInformation />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
