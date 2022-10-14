import { useLayoutEffect } from "react";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import IconLogo from "../../../assets/icons/IconLogo";
import IconMenu from "../../../assets/icons/IconMenu";
import PopUp from "../../popups/PopUp";
import Logger from "./ClientLogger";

export default function ClientNavbar({}) {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [active, setActive] = useState(window.location.pathname);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") !== null
      ? setLoggedIn(true)
      : setLoggedIn(false);
  });

  useEffect(() => {
    function handleResize() {
      window.innerWidth > 768 ? setOpenNavbar(true) : null;
    }
    window.addEventListener("resize", handleResize);
  });

  const changeSelectedText = (state, selected) => {
    const style = "flex h-full items-center gap-2 ";
    if (state === selected) return style + "text-BtnPrimary-end";
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
          setLoggedIn(false);
          navigate("/login");
          setShowPopup(false);
        }}
      />
      <button
        onClick={() => setOpenNavbar(true)}
        className="fixed left-0 top-0 p-4 lg:hidden"
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
              to="/"
              onClick={() => setActive("/")}
              className={changeSelectedText(active, "/")}
            >
              Home
            </Link>

            <Link
              to="about"
              onClick={() => setActive("/about")}
              className={changeSelectedText(active, "/about")}
            >
              About
            </Link>

            <Link
              to="properties"
              onClick={() => setActive("/properties")}
              className={changeSelectedText(active, "/properties")}
            >
              Properties
            </Link>

            <Link
              to="agents"
              onClick={() => setActive("/agents")}
              className={changeSelectedText(active, "/agents")}
            >
              Agents
            </Link>
          </nav>
          <Logger
            loggedIn={loggedIn}
            logoutFunction={() => setShowPopup(true)}
          />
        </div>
      </nav>
    </div>
  );
}
