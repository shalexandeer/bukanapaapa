import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const AppLayout = () => {
  return (
    <div className="bg-bgPrimaryDark font-['Poppins']">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
