import React from "react";
import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../provider/AuthProvider";
import { useAdminLogout } from "../../../service/Auth/Auth.query";
import toast from "react-hot-toast";

interface UserDropdownProps {
  userName: string;
  userRole: string;
  avatarText: string;
  className?: string;
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  userName,
  userRole,
  avatarText,
  className,
}) => {
  const { logout } = useAuth();

  const {
    mutate: adminLogout,
    isPending,
    isSuccess,
  } = useAdminLogout({
    onSuccess: () => {
      toast.success("Berhasil keluar");
      setTimeout(() => {
        logout();
      }, 1000);
    },
    onError: (err) => {
      toast.error("Gagal keluar");
      console.log(err);
    },
  });

  const dropdownItems = [
    {
      label: "Change Password",
      navigate: "/admin/change-password",
    },
    { label: "Edit Profile", navigate: "/admin/profile/edit" },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <BellIcon className="h-6 w-6 text-gray-500" />
      <div className="dropdown dropdown-end dropdown-bottom">
        <div
          tabIndex={0}
          role="button"
          className="flex cursor-pointer items-center gap-2"
        >
          <div className="avatar placeholder">
            <div className="w-9 rounded-full bg-neutral text-neutral-content">
              <span className="text-base">{avatarText}</span>
            </div>
          </div>
          <div>
            <h1 className="text-sm">{userName}</h1>
            <p className="text-xs font-normal text-textGrayColor">{userRole}</p>
          </div>
          <ChevronDownIcon className="h-6 w-6 text-gray-500" />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
        >
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? "bg-slate-200" : "")}
                to={item.navigate}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li key={"logout"}>
            <button onClick={() => adminLogout()} className="text-red-700">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
