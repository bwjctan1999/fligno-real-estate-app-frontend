import Button from "../../../components/general/Button";
import Textfield from "../../../components/general/Textfield";

import { UpdateUser } from "../../../api/ApiUsers";
import { useState } from "react";

export default function EditNamePop({
  action,
  showEditNamePop,
  setFirst,
  setLast,
  firstname,
  lastname
}) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const UpdateName = async () => {
    const api_request = await UpdateUser({
      first_name: first_name,
      last_name: last_name,
    });

    if (!api_request.error) {
      setFirst(first_name);
      setLast(last_name);
      console.log(api_request.response);
    } else {
      console.log(api_request.error);
    }
  };

  return showEditNamePop ? (
    <div className="fixed inset-0 z-20 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div className="relative mx-auto w-full max-w-sm rounded-md bg-TextOnDark p-8 shadow-lg">
          <div className=" sm:flex">
            <div className="w-full text-TextPrimary">
              <div className="mb-4 text-center text-lg font-bold">
                Edit Name
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <label className="font-semibold">First Name</label>
                  <Textfield
                  placeholder={firstname}
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-semibold">Last Name</label>
                  <Textfield
                    placeholder={lastname}
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-5 ">
                <Button
                  onClick={action}
                  text="Cancel"
                  bgcolor="bg-BGPrimary"
                  textcolor="text-TextSecondary"
                  custom=" shadow-border shadow-TextSecondary opacity-60"
                />
                <Button
                  text="Save"
                  onClick={() => {
                    UpdateName();
                    action();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
