import { Route, Routes, useNavigate } from "react-router-dom";
import AuthRoutes from "./Auth.route";
import { Suspense, useEffect } from "react";
import ProtectedRoutes from "./Private.route";
import PublicRoutes from "./Public.route";
import AppLayout from "../components/layout/AppLayout";

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    scrollTo(0, 0);
  }, [navigate]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route element={<AppLayout />}>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/user/*" element={<ProtectedRoutes />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
