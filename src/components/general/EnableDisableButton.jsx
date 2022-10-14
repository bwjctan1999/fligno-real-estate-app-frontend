import { useState } from "react";
import { DisableUser, RestoreUser } from "../../api/ApiUsers";

export default function EnableDisableButton({
  fontsize = "text-base",
  padding = "p-3",
  textcolor = "text-TextOnDark",
  icon,
  custom,
  enableFunction,
  disableFunction,
  responsive,
  initialState,
  id,
}) {
  const [enabled, setEnabled] = useState(initialState);

  const disableUserHandler = async (id) => {
    const api_request = await DisableUser(id);

    !api_request.error
      ? console.log(api_request.response)
      : console.log(api_request.error);
  };

  const restoreUserHandler = async (id) => {
    const api_request = await RestoreUser(id);

    !api_request.error
      ? console.log(api_request.response)
      : console.log(api_request.error);
  };

  const clickHandler = async () => {
    enabled ? await disableUserHandler(id) : await restoreUserHandler(id);
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
