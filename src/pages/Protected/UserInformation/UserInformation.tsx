import { Route, Routes } from "react-router-dom";
import EditProfileUser from "./pages/EditProfileUser";
import PaymentHistory from "./pages/PaymentHistory";
import UserItem from "./pages/UserItem";
import UserCart from "./pages/UserCart";

const UserInformation = () => {
  return (
    <Routes>
      {/* Add your protected routes here */}
      <Route path="/edit-profile" element={<EditProfileUser />} />
      <Route path="/my-cart" element={<UserCart />} />
      <Route path="/payment-history" element={<PaymentHistory />} />
      <Route path="/my-item" element={<UserItem />} />
    </Routes>
  );
};

export default UserInformation;
