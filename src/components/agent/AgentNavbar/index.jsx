import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import IconLogo from "../../../assets/icons/IconLogo";
import IconDashboard from "../../../assets/icons/IconDashboard";
import IconUsersList from "../../../assets/icons/IconUsersList";
import IconProperties from "../../../assets/icons/IconProperties";
import IconMenu from "../../../assets/icons/IconMenu";
import AgentLogger from "./AgentLogger";
import PopUp from "../../popups/PopUp";

export default function AgentNavbar({}) {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [active, setActive] = useState(window.location.pathname);

  const navigate = useNavigate();

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

    if (state === selected) {
      return style + "text-BtnPrimary-end";
    }
    return style + "text-TextTertiary";
  };

  return (
    <div>
      <PopUp
        text="Are you sure you want to log out?"
        state={showPopup}
        cancelFunction={() => setShowPopup(false)}
        okayFunction={() => {
          localStorage.clear();
          navigate("/login");
          setShowPopup(false);
        }}
      />

      <button
        onClick={() => setOpenNavbar(true)}
        className="fixed left-4 top-4 rounded-lg bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end p-2 text-BGPrimary lg:hidden"
      >
        <IconMenu width="30" height="30" />
      </button>
      <nav
        className={`${
          openNavbar === true ? "" : "-translate-x-full lg:-translate-x-0"
        } fixed top-0 left-0 z-10 h-full w-3/4 items-center bg-BGPrimary p-4 shadow-md duration-300 ease-out lg:h-auto lg:w-full lg:flex-row`}
      >
        <div className="flex h-full w-full flex-col justify-between lg:flex-row">
          <div className="flex gap-4">
            <button
              onClick={() => setOpenNavbar(false)}
              className="px-2 lg:hidden"
            >
              <IconMenu width="30" height="30" />
            </button>
            <Link
              to="/"
              className="flex gap-4 text-2xl font-black text-BtnPrimary-end"
            >
              <IconLogo />
              Turnkey
            </Link>
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
              <IconUsersList width="26" height="26" />
              Clients
            </Link>

            <Link
              to="properties"
              onClick={() => setActive("/agent/properties")}
              className={changeSelectedText(active, "/agent/properties")}
            >
              <IconProperties width="26" height="26" />
              Properties
            </Link>
          </nav>

          <AgentLogger logoutFunction={() => setShowPopup(true)} />
        </div>
      </nav>
    </div>
  );
}
