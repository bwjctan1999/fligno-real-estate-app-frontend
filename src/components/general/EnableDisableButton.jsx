import { useState } from "react";
import { DisableUser, RestoreUser } from "../../api/ApiUsers";

export default function EnableDisableButton({
  fontsize = "text-base",
  padding = "p-3",
  textcolor = "text-TextOnDark",
  icon,
  custom,
  responsive,
  initialState,
  id,
  enableRequest,
  disableRequest,
}) {
  const [enabled, setEnabled] = useState(initialState);

  const disableHandler = async (id) => {
    const api_request = await disableRequest(id);

    !api_request.error ? null : console.log(api_request.error);
  };

  const restoreHandler = async (id) => {
    const api_request = await enableRequest(id);

    !api_request.error ? null : console.log(api_request.error);
  };

  const clickHandler = async () => {
    enabled ? await disableHandler(id) : await restoreHandler(id);
    setEnabled(!enabled);
  };

  return (
    <button
      className={`${padding} ${textcolor} ${fontsize} ${custom} ${
        enabled ? "bg-BtnQuanary-end" : "bg-TextSecondary"
      }  flex w-full items-center justify-center gap-2 rounded-lg bg-BGPrimary font-bold`}
      onClick={() => clickHandler()}
    >
      {icon}
      <span className={responsive === "true" ? "hidden md:block" : ""}>
        {enabled ? "Enabled" : "Disabled"}
      </span>
    </button>
  );
}
