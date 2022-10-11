import { useState } from "react";
import PopUp from "../../popups/PopUp";
import IconInfo from "../../../assets/icons/IconInfo";
import IconLogout from "../../../assets/icons/IconLogout";
import IconUser from "../../../assets/icons/IconUser";
import IconNotification from "../../../assets/icons/IconNotification";
import { useNavigate } from "react-router-dom";

export default function AgentLogger({ logoutFunction }) {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="relative lg:w-1/6">
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => {
            setShowDropMenu(false);
            setShowNotifications(!showNotifications);
          }}
        >
          <IconNotification />
        </button>
        <button
          className="w-fit rounded-full bg-Skeleton-start p-1 text-TextOnDark"
          onClick={() => {
            setShowNotifications(false);
            setShowDropMenu(!showDropMenu);
          }}
        >
          <IconUser width="30" height="30" />
        </button>

        {showDropMenu ? (
          <div className="absolute flex flex-col gap-3 rounded-lg bg-BGPrimary p-4 font-bold drop-shadow-lg lg:top-10">
            <button className="flex items-center gap-3 rounded-full pr-3 hover:bg-LineSecondary">
              <div className="w-fit rounded-full bg-LineSecondary p-2">
                <IconInfo width="22" height="22" />
              </div>
              <p>Account Info</p>
            </button>
            <button
              onClick={logoutFunction}
              className="flex items-center gap-3 rounded-full pr-3 hover:bg-LineSecondary"
            >
              <div className="w-fit rounded-full bg-LineSecondary p-2">
                <IconLogout width="20" height="20" />
              </div>
              <p>Log Out</p>
            </button>
          </div>
        ) : null}

        {showNotifications ? (
          <div className="absolute right-10 flex flex-col gap-3 rounded-lg bg-BGPrimary p-4 font-bold drop-shadow-lg lg:top-10">
            <button className="flex items-center gap-3 rounded-full pr-3 hover:bg-LineSecondary">
              <div className="w-fit rounded-full bg-LineSecondary p-2">
                <IconInfo width="22" height="22" />
              </div>
              <p>Account Info</p>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
