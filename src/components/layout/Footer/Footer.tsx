import SocialMediaFooter from "../../templates/SocialMediaFooter";
import SEALogo from "../../../assets/SEALogo.png";

import { NavLink } from "react-router-dom";
import { MenuLinkFooter } from "../../../constants/navigation";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-bgSecondaryBlack">
        <SocialMediaFooter />
      </div>
      <footer className="space-y-20 bg-bgPrimaryDark py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex justify-center text-teal-600">
            <img src={SEALogo} alt="Logo" className="max-w-[234px]" />
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {MenuLinkFooter.map((menu) => (
              <li key={menu.title}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-primary"
                      : "font-normal text-white"
                  }
                  to={menu.path}
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="container-layout text-center text-sm text-white">
          <div className="divider" />
          <div className="flex justify-between font-normal">
            <p>&copy; 2021 SEA - All Rights Reserved</p>
            <div className="flex space-x-4 underline">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
