import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import IconLogo from "../../assets/icons/IconLogo";
import IconDashboard from "../../assets/icons/IconDashboard";
import IconUsersList from "../../assets/icons/IconUsersList";
import IconProperties from "../../assets/icons/IconProperties";
import IconNotification from "../../assets/icons/IconNotification";
import IconMenu from "../../assets/icons/IconMenu";
import IconKey from "../../assets/icons/IconKey";

import Button from "../general/Button";
import IconSubscription from "../../assets/icons/IconSubscription";

export default function AdminNavbar({}) {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    function handleResize() {
      window.innerWidth > 768 ? setOpenNavbar(true) : null;
    }

    function handleLoad() {
      window.innerWidth > 768 ? setOpenNavbar(true) : setOpenNavbar(false);
    }

    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleResize);
  });

  const changeSelectedText = (state, selected) => {
    const style = "flex h-full items-center gap-2 ";

    if (state === selected) {
      return style + "text-BtnPrimary-end";
    }
    return style + "text-TextTertiary";
  };

  return (
    <div>
      <button
        onClick={() => setOpenNavbar(true)}
        className="fixed left-0 top-0 p-4 lg:hidden"
      >
        <IconMenu width="30" height="30" />
      </button>
      <nav
        className={`${
          openNavbar === true ? "" : "-translate-x-full lg:-translate-x-0"
        } fixed top-0 left-0 z-10 h-full w-3/4 items-center bg-BGPrimary p-4 shadow-lg duration-300 ease-out lg:h-auto lg:w-full lg:flex-row`}
      >
        <div className="flex h-full w-full flex-col justify-between lg:flex-row">
          <div className="flex gap-4">
            <button onClick={() => setOpenNavbar(false)} className="lg:hidden">
              <IconMenu width="30" height="30" />
            </button>
            <IconLogo />
            <label className="text-2xl font-black text-BtnPrimary-end">
              Turnkey
            </label>
          </div>
          <nav className="flex flex-col gap-10 text-xl font-black text-TextTertiary lg:flex-row lg:items-center">
            <Link
              to="/admin"
              onClick={() => {
                setActive("/admin");
              }}
              className={changeSelectedText(active, "/admin")}
            >
              <IconDashboard />
              Dashboard
            </Link>

            <Link
              to="/admin/properties"
              onClick={() => {
                setActive("/admin/properties");
              }}
              className={changeSelectedText(active, "/admin/properties")}
            >
              <IconProperties />
              Properties
            </Link>

            <Link
              to="/admin/users"
              onClick={() => {
                setActive("/admin/users");
              }}
              className={changeSelectedText(active, "/admin/users")}
            >
              <IconUsersList />
              Users
            </Link>

            <Link
              to="/admin/roles"
              onClick={() => {
                setActive("/admin/roles");
              }}
              className={changeSelectedText(active, "/admin/roles")}
            >
              <IconKey />
              Roles
            </Link>

            <Link
              to="/admin/subscription"
              onClick={() => {
                setActive("/admin/subscription");
              }}
              className={changeSelectedText(active, "/admin/subscription")}
            >
              <IconSubscription />
              Subscription
            </Link>

          </nav>
          <div className="flex items-center gap-4 ">
            <IconNotification />
            <div className="w-24">
              <Button text="Logout" fontsize="text-basic" padding="p-2" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
