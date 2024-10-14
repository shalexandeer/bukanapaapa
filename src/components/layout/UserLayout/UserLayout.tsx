import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Card, CardBody } from "../../elements/Card/Card";
import Button from "../../elements/Button";
import {
  BanknotesIcon,
  ListBulletIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const sidebarLinks = [
  {
    name: "Edit Profile",
    link: "/user/edit-profile",
    icon: <UserIcon className="size-6" />,
  },
  {
    name: "Keranjang mu",
    link: "/user/my-cart",
    icon: <ShoppingCartIcon className="size-6" />,
  },
  {
    name: "Item mu",
    link: "/user/my-item",
    icon: <ListBulletIcon className="size-6" />,
  },
  {
    name: "Payment history",
    link: "/user/payment-history",
    icon: <BanknotesIcon className="size-6" />,
  },
];

const UserLayout = () => {
  // const {} = useAuth();
  const location = useLocation();

  // Find the current sidebar link based on the current location
  const currentLink = sidebarLinks.find((link) =>
    location.pathname.includes(link.link),
  );

  return (
    <div className="container-layout flex flex-col gap-8 py-12 lg:flex-row">
      <div className="w-full space-y-8 lg:max-w-[392px]">
        <Card className="box-shadow-no-blur bg-bgSecondaryBlack p-8">
          <CardBody className="">
            <div className="flex items-center gap-4 lg:gap-8">
              <div className="avatar">
                <div className="w-10 rounded-full lg:w-[74px]">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="text-textPrimaryDark">
                <h1 className="font-bold lg:text-2xl">Shalexander</h1>
                <p className="text-sm lg:text-base">Shalexander09@gmai.com</p>
              </div>
            </div>
            <div className="divider" />
          </CardBody>
        </Card>
        <Card className="box-shadow-no-blur bg-bgSecondaryBlack">
          <CardBody className="grid space-y-4">
            {sidebarLinks.map((link) => (
              <NavLink key={link.link} to={link.link}>
                <Button
                  variant={"outline"}
                  className={`w-full ${currentLink?.link === link.link ? "border border-primary" : "border-none"} justify-start gap-4 bg-transparent text-base text-textPrimaryDark`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Button>
              </NavLink>
            ))}
          </CardBody>
        </Card>
      </div>
      <Card className="box-shadow-no-blur w-full bg-bgSecondaryBlack md:p-5">
        <Outlet />
      </Card>
    </div>
  );
};

export default UserLayout;
