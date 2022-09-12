import IconLogo from "../../assets/icons/IconLogo";
import IconDashboard from "../../assets/icons/IconDashboard";
import IconUsersList from "../../assets/icons/IconUsersList";
import IconProperties from "../../assets/icons/IconProperties";
import IconAdd from "../../assets/icons/IconAdd";
import IconNotification from "../../assets/icons/IconNotification";
import DesignProfile from "../../assets/svgs/DesignProfile.svg";
import { useState } from "react";
import IconMenu from "../../assets/icons/IconMenu";
import { useEffect } from "react";

export default function AgentNavbar({}) {
  const [openNavbar, setOpenNavbar] = useState(false);

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
          openNavbar === true ? "" : "-translate-x-full"
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
          <ul className="flex flex-col gap-10 text-xl font-black text-TextTertiary lg:flex-row lg:items-center">
            <li className="flex h-full items-center gap-2">
              <IconDashboard />
              <a> Dashboard</a>
            </li>
            <li className="flex h-full items-center gap-2">
              <IconUsersList width="26" height="26" fill="fill-TextTertiary" />
              <a> Clients</a>
            </li>
            <li className="flex h-full items-center gap-2 fill-TextTertiary">
              <IconProperties width="26" height="26" fill="fill-TextTertiary" />
              <a> Properties</a>
            </li>
            <li className="flex h-full items-center gap-2">
              <IconAdd />
              <a> Add Property</a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <IconNotification />
            <img src={DesignProfile} className="h-8 w-8" />
          </div>
        </div>
      </nav>
    </div>
  );
}
