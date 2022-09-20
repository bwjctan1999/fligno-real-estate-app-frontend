import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import IconLogo from "../../assets/icons/IconLogo";
import IconNotification from "../../assets/icons/IconNotification";
import DesignProfile from "../../assets/svgs/DesignProfile.svg";
import IconMenu from "../../assets/icons/IconMenu";
import Button from "../general/Button";

export default function ClientNavbar({}) {
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

          <div className="stroke border- flex items-center gap-2 lg:w-1/6">
            <Button
              text="Sign Up"
              bgcolor="bg-BGPrimary"
              textcolor="text-BtnPrimary-end"
              custom="border-BtnPrimary-end border-solid border-2 box-border"
              padding="p-2"
            />
            <Button text="Log In" padding="p-2" />
            {/* <IconNotification />
            <img src={DesignProfile} className="h-8 w-8" /> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
