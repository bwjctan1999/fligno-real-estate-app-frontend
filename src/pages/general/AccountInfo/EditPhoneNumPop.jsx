import Button from "../../../components/general/Button";
import Textfield from "../../../components/general/Textfield";
import { UpdateUser } from "../../../api/ApiUsers";
import { useState } from "react";
export default function EditPhoneNumPop({
showEditPhoneNumPop,
action,
setPNumber,
phonenumber
}) {

  const [phone_number, setPhoneNumber] = useState("");

  const UpdatePhoneNumber = async () => {
    const api_request = await UpdateUser({
      phone_number: phone_number,
    });

    if (!api_request.error) {
      setPNumber(phone_number);
      console.log(api_request.response);
    } else {
      console.log(api_request.error);
    }
  };


  return showEditPhoneNumPop ? (
    <div className="fixed inset-0 z-20 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div className="relative mx-auto w-full max-w-sm rounded-md bg-TextOnDark p-8 shadow-lg">
          <div className=" sm:flex">
            <div className="w-full text-TextPrimary">
                <div className="text-lg text-center mb-4 font-bold">
                Edit Phone Number
                </div>
              

           <div className="flex flex-col gap-3 ">
           <div className="flex flex-col gap-3">
            <label className="font-semibold">Phone Number</label>
              <Textfield
                type="number"
                placeholder={phonenumber}
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              </div>
           
           </div>
              
             

              <div className="mt-8 flex items-center gap-5 ">
                <Button    text="Cancel"
                  bgcolor="bg-BGPrimary"
                  textcolor="text-TextSecondary"
                  custom=" shadow-border shadow-TextSecondary opacity-60"  
                  onClick={action}/>
                <Button  text="Save"
                  onClick={() => {
                    UpdatePhoneNumber();
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

