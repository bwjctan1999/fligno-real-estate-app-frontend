import Button from "../../../components/general/Button";
import Textfield from "../../../components/general/Textfield";

import { ValidMobileNumber } from "../../../scripts/validations";
import { UpdateUser } from "../../../api/ApiUsers";
import { useState } from "react";
import { useEffect } from "react";
export default function EditPhoneNumPop({
  showEditPhoneNumPop,
  action,
  setPNumber,
  phonenumber,
  setShowSuccessAlert,
  setShowErrorAlert,
}) {
  const [phone_number, setPhoneNumber] = useState("");
  const [numberValidator, setNumberValidator] = useState("");

  useEffect(() => setPhoneNumber(phonenumber), [phonenumber]);

  const Validation = () => {
    if (!ValidMobileNumber(phone_number)) {
      setNumberValidator("Invalid Phone Number");
    } else {
      UpdatePhoneNumber();
    }
  };

  const UpdatePhoneNumber = async () => {
    const api_request = await UpdateUser({
      phone_number: phone_number,
    });

    action();
    if (!api_request.error) {
      setPNumber(phone_number);
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
    } else {
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
    }
  };

  return showEditPhoneNumPop ? (
    <div className="fixed inset-0 z-20 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div className="relative mx-auto w-full max-w-sm rounded-md bg-TextOnDark p-8 shadow-lg">
          <div className=" sm:flex">
            <div className="w-full text-TextPrimary">
              <div className="mb-4 text-center text-lg font-bold">
                Edit Phone Number
              </div>

              <div className="flex flex-col gap-3 ">
                <div className="flex flex-col gap-3">
                  <label className="font-semibold">Phone Number</label>
                  <Textfield
                    placeholder={phonenumber}
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    invalidError={numberValidator}
                  />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-5 ">
                <Button
                  text="Cancel"
                  bgcolor="bg-BGPrimary"
                  textcolor="text-TextSecondary"
                  custom=" shadow-border shadow-TextSecondary opacity-60"
                  onClick={() => {
                    setNumberValidator("");
                    action();
                  }}
                />
                <Button text="Save" onClick={() => Validation()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
