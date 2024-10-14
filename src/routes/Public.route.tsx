import React, { lazy, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CommonLayout from "../components/layout/UserLayout";
import { useAuth } from "../provider/AuthProvider";

const Home = lazy(() => import("../pages/PublicPage/Home"));
const DownloadPage = lazy(
  () => import("../pages/PublicPage/Download/DownloadPage"),
);
const Events = lazy(() => import("../pages/PublicPage/Events"));
const Faq = lazy(() => import("../pages/PublicPage/Info/Faq"));
const Rules = lazy(() => import("../pages/PublicPage/Info/Rules"));
const Shop = lazy(() => import("../pages/PublicPage/Shop"));
const ShopItem = lazy(() => import("../pages/PublicPage/Shop/pages/ShopItem"));
const ComponentsLab = lazy(
  () => import("./../pages/ComponentsLab/ComponentsLab"),
);

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/info">
        <Route path="faq" element={<Faq />} />
        <Route path="rules" element={<Rules />} />
      </Route>
      <Route path="/shop">
        <Route index element={<Shop />} />
        <Route path=":id" element={<ShopItem />} />
      </Route>
      <Route path="/componentsLab" element={<ComponentsLab />} />
    </Routes>
  );
};

export default PublicRoutes;
