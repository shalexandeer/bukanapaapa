import { Link, NavLink } from "react-router-dom";
import Button from "../../elements/Button/Button";
import SealLogo from "../../../assets/SEALogo.png";
import { useAuth } from "../../../provider/AuthProvider";
import {
  ExclamationTriangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { MenuLinkNavbar } from "../../../constants/navigation";

const Navbar = () => {
  const { token, logout } = useAuth();

  const handleClickDropdown = () => {
    const elem = document.activeElement;
    if (elem) {
      (elem as HTMLElement)?.blur();
    }
  };

  return (
    <div className="relative z-30 w-full border-b border-borderPrimaryDark bg-bgSecondaryBlack">
      <div className="navbar top-0 z-10 mx-auto h-[72px] max-w-[1440px] px-5 lg:px-16">
        <NavLink to={"/"}>
          <img src={SealLogo} alt="" className="h-auto w-[134px]" />
        </NavLink>
        <div className="navbar-end w-full space-x-12">
          <ul className="menu menu-horizontal hidden capitalize tracking-wide lg:flex">
            {MenuLinkNavbar.map((item, index) => (
              <li key={index}>
                {item.subMenu ? (
                  <div className="dropdown relative w-full">
                    <NavLink
                      to={item.path}
                      className={({ isPending }) =>
                        isPending
                          ? "text-primaryText font-semibold"
                          : "font-normal text-white"
                      }
                    >
                      <p className="flex w-full items-center text-sm">
                        {item.title}
                        <span>
                          <ChevronDownIcon className={"size-5"} />
                        </span>
                      </p>
                    </NavLink>
                    <div
                      tabIndex={0}
                      role="button"
                      className="absolute h-full w-full"
                    ></div>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content z-[1] mt-52 w-52 rounded-md border border-borderPrimaryDark bg-bgSecondaryBlack p-2 shadow"
                    >
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} onClick={handleClickDropdown}>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              isActive
                                ? "font-semibold text-primary"
                                : "font-normal text-white"
                            }
                          >
                            {subItem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavLink
                    end
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-primary"
                        : "font-normal text-white"
                    }
                  >
                    {item.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* {user.id > 0 ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2"
              >
                <div className="flex items-center gap-3">
                  <div className="text-end">
                    <p className="min-w-24 text-sm font-bold">
                      {user.fullName}
                    </p>
                    <p className="text-secondaryText text-xs capitalize">
                      student
                    </p>
                  </div>
                  <div className="avatar placeholder">
                    <div
                      className="w-8 rounded-full bg-slate-500 text-neutral-content lg:w-12"
                      style={{
                        backgroundImage: `url(${user.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {user.image ? null : (
                        <span className="lg:text-3xl">{user.fullName[0]}</span>
                      )}
                    </div>
                  </div>
                </div>
                <ChevronDownOutline className={"hidden size-7 lg:flex"} />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] mt-4 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <Link to={`/user/student/profile`}>
                  <li>
                    <div className="flex">
                      <UserCircleIcon className="size-5" />
                      <p>Setting Profile</p>
                    </div>
                  </li>
                </Link>
                <Link to={`/user/student/my-certification/certificate`}>
                  <li>
                    <div className="flex">
                      <CertificateIcon className="size-5" />
                      <p>My Certification</p>
                    </div>
                  </li>
                </Link>
                <Link to={`/user/student/payment-history`}>
                  <li>
                    <div className="flex">
                      <CreditCardIcon className="size-5" />
                      <p>Payment History</p>
                    </div>
                  </li>
                </Link>
                <hr />
                <li>
                  <div
                    className="flex text-primary"
                    onClick={() =>
                      document.getElementById("modal-logout").showModal()
                    }
                  >
                    <LogoutIcon className="size-5" />
                    <a>Log Out</a>
                  </div>
                </li>
              </ul>
            </div>
          </>
        ) : null} */}

        {!token ? (
          <div className="space-x-4">
            <Link to={"/auth/register"}>
              <Button
                variant="outline"
                className={
                  "hidden bg-transparent capitalize hover:bg-bgSecondaryBlack lg:flex"
                }
              >
                Register
              </Button>
            </Link>
            <Link to={"/auth/login"}>
              <Button className={"hidden capitalize lg:flex"}>Login</Button>
            </Link>
          </div>
        ) : null}

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* <NavbarHamburger /> */}
            |||
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[20] mt-3 rounded-md bg-base-100 p-2 uppercase shadow lg:w-52"
          >
            {/* {MenuLinkNavbar.map((item, index) => (
              <li key={index}>
                {item.subMenu ? (
                  <>
                    <NavLink
                      className={({ isPending }) =>
                        isPending ? "text-secondaryText font-normal" : ""
                      }
                    >
                      <p className="flex w-full items-center p-2 text-sm">
                        {item.title}
                      </p>
                    </NavLink>
                    <ul className="p-2">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} onClick={handleClickDropdown}>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              isActive
                                ? "text-primaryText"
                                : "text-secondaryText"
                            }
                          >
                            {subItem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryText bg-base-200"
                        : "text-secondaryText"
                    }
                  >
                    <p className="p-2">{item.title}</p>
                  </NavLink>
                )}
              </li>
            ))}
            {user.id < 0 ? (
              <Link to={"/auth/signup"}>
                <Button className={"mt-4 w-full"}>Sign In</Button>
              </Link>
            ) : null} */}
          </ul>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="modal-logout" className="modal">
        <div className="modal-box max-w-lg !p-12 text-center">
          <div className="flex flex-col items-center space-y-5">
            <div className="bg-primaryPassive w-fit rounded-full p-4">
              <ExclamationTriangleIcon className="size-10 text-primary" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">
                You&apos;re leaving... Are you sure?
              </h3>
              <p className="">
                This action will make you logged out from the system. You have
                to login before you can access the system again.
              </p>
            </div>
          </div>
          <div className="modal-action grid grid-cols-2">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Button variant={"outline"} className="w-full border">
                Close
              </Button>
            </form>
            <Button onClick={() => logout()}>Yes</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Navbar;
