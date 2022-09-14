import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import IconLogo from "../../assets/icons/IconLogo";
import IconDashboard from "../../assets/icons/IconDashboard";
import IconUsersList from "../../assets/icons/IconUsersList";
import IconProperties from "../../assets/icons/IconProperties";
import IconAdd from "../../assets/icons/IconAdd";
import IconNotification from "../../assets/icons/IconNotification";
import DesignProfile from "../../assets/svgs/DesignProfile.svg";
import IconMenu from "../../assets/icons/IconMenu";

export default function AgentNavbar({}) {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [active, setActive] = useState(window.location.pathname);

  useEffect(() => {
    function handleResize() {
      window.innerWidth > 768 ? setOpenNavbar(true) : null;
    }

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    function handleLoad() {
      window.innerWidth > 768 ? setOpenNavbar(true) : setOpenNavbar(false);
    }

    window.addEventListener("load", handleLoad);
  });

  const changeSelectedText = (state, selected) => {
    const style = "flex h-full items-center gap-2 ";

    if (state === selected) return style + "text-BtnPrimary-end";
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

          <nav className="flex flex-col gap-10 text-xl font-black lg:flex-row lg:items-center">
            <Link
              to="/agent"
              onClick={() => setActive("/agent")}
              className={changeSelectedText(active, "/agent")}
            >
              <IconDashboard />
              Dashboard
            </Link>

            <Link
              to="clients"
              onClick={() => setActive("/agent/clients")}
              className={changeSelectedText(active, "/agent/clients")}
            >
              <IconUsersList width="26" height="26" fill="fill-TextTertiary" />
              Clients
            </Link>

            <Link
              to="properties"
              onClick={() => setActive("/agent/properties")}
              className={changeSelectedText(active, "/agent/properties")}
            >
              <IconProperties width="26" height="26" fill="fill-TextTertiary" />
              Properties
            </Link>

            <Link
              to="add-property"
              onClick={() => setActive("/agent/add-property")}
              className={changeSelectedText(active, "/agent/add-property")}
            >
              <IconAdd />
              Add Property
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <IconNotification />
            <img src={DesignProfile} className="h-8 w-8" />
          </div>
        </div>
      </nav>
    </div>
  );
}
