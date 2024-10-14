import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));

const AuthRoutes: React.FC = () => {
  const { token } = useAuth();

  if (token) {
    return <Navigate to="/user/information" replace />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AuthRoutes;
