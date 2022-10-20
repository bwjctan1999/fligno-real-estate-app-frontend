import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconInfo from "../../../assets/icons/IconInfo";
import IconLogout from "../../../assets/icons/IconLogout";
import IconBriefcase from "../../../assets/icons/IconsBriefcase";
import IconUser from "../../../assets/icons/IconUser";
import Button from "../../general/Button";

export default function ClientLogger({ loggedIn, logoutFunction }) {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lg:w-1/6">
      {loggedIn ? (
        <div className="flex items-center justify-end gap-2">
          <button
            className="w-fit rounded-full bg-Skeleton-start p-1 text-TextOnDark"
            onClick={() => setShowDropMenu(!showDropMenu)}
          >
            <IconUser width="30" height="30" />
          </button>

          {showDropMenu ? (
            <div className="offset absolute bottom-14 flex flex-col gap-3 rounded-lg bg-BGPrimary p-4 font-bold drop-shadow-lg lg:-bottom-40">
              <button
                onClick={() => navigate("/agent")}
                className="flex items-center gap-3 rounded-full pr-3 hover:bg-LineSecondary"
              >
                <div className="w-fit rounded-full bg-LineSecondary p-2">
                  <IconBriefcase />
                </div>
                <p>Switch to Agent</p>
              </button>
              <button
                className="flex items-center gap-3 rounded-full pr-3 hover:bg-LineSecondary"
                onClick={() => navigate("/account-info")}
              >
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
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            text="Sign Up"
            bgcolor="bg-BGPrimary"
            textcolor="text-BtnPrimary-end"
            custom=" shadow-border shadow-BtnPrimary-end"
            padding="p-2"
            onClick={() => navigate("/signup")}
          />
          <Button
            text="Log In"
            padding="p-2"
            onClick={() => navigate("/login")}
          />
        </div>
      )}
    </div>
  );
}
