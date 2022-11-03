import Button from "../../../components/general/Button";
import Textfield from "../../../components/general/Textfield";

import { ValidEmpty, ValidName } from "../../../scripts/validations";
import { UpdateUser } from "../../../api/ApiUsers";
import { useState } from "react";
import { useEffect } from "react";

export default function EditNamePop({
  action,
  showEditNamePop,
  setFirst,
  setLast,
  firstname,
  lastname,
  setShowSuccessAlert,
  setShowErrorAlert,
}) {
  const [first_name, setFirstName] = useState(" ");
  const [last_name, setLastName] = useState(" ");

  const [first_name_validator, setFirstNameValidator] = useState("");
  const [last_name_validator, setLastNameValidator] = useState("");

  useEffect(() => {
    setFirstName(firstname);
    setLastName(lastname);
  }, [firstname, lastname]);

  const Validation = async () => {
    let pass = true;

    if (!ValidEmpty(first_name)) {
      setFirstNameValidator("Required");
      pass = false;
    }
    if (!ValidEmpty(last_name)) {
      setLastNameValidator("Required");
      pass = false;
    }
    if (!ValidName(first_name)) {
      setFirstNameValidator("Invalid Name");
      pass = false;
    }
    if (!ValidName(last_name)) {
      setLastNameValidator("Invalid Name");
      pass = false;
    }

    if (pass) {
      UpdateName();
      setFirstNameValidator("");
      setLastNameValidator("");
    }
  };

  const UpdateName = async () => {
    const api_request = await UpdateUser({
      first_name: first_name,
      last_name: last_name,
    });

    action();
    if (!api_request.error) {
      setFirst(first_name);
      setLast(last_name);
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
    } else {
      console.log(api_request.error);
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
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
                    invalidError={first_name_validator}
                  />
                </div>
                <div>
                  <label className="font-semibold">Last Name</label>
                  <Textfield
                    placeholder={lastname}
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    invalidError={last_name_validator}
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
                    Validation();
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
