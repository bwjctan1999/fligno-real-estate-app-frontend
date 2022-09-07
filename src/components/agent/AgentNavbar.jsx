import IconLogo from "../../assets/icons/IconLogo";
import IconDashboard from "../../assets/icons/IconDashboard";
import IconUsersList from "../../assets/icons/IconUsersList";
import IconProperties from "../../assets/icons/IconProperties";
import IconAdd from "../../assets/icons/IconAdd";
import IconNotification from "../../assets/icons/IconNotification";
import DesignProfile from "../../assets/svgs/DesignProfile.svg";

export default function AgentNavbar({}) {
  return (
    <nav className="flex flex-wrap shadow p-1">
      <div className=" flex flex-wrap mt-4  mb-2 mx-8">
        <div className="flex gap-x-64">
          <div className="flex gap-4">
            <IconLogo />
            <label className="text-BtnPrimary-end font-black text-2xl">
              Turnkey
            </label>
          </div>
          <ul className="flex gap-10 font-black text-TextTertiary">
            <li className="flex gap-2">
              <IconDashboard />
              <a> Dashboard</a>
            </li>
            <li className="flex gap-2">
              <IconUsersList />
              <a> Clients</a>
            </li>
            <li className="flex gap-2">
              <IconProperties />
              <a> Properties</a>
            </li>
            <li className="flex gap-2">
              <IconAdd />
              <a> Add Property</a>
            </li>
          </ul>
          <div className="flex gap-4">
            <IconNotification />
            <img src={DesignProfile} className="w-8 h-8" />
          </div>
        </div>
      </div>
    </nav>
  );
}
