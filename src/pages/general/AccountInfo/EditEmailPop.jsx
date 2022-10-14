import Button from "../../../components/general/Button";
import Textfield from "../../../components/general/Textfield";
import { UpdateUser } from "../../../api/ApiUsers";
import { useState } from "react";
export default function EditEmailPop({
  action,
  showEditEmailPop,
  setUserEmail,
  useremail,
  setShowSuccessAlert,
  setShowErrorAlert
}) {

  const [email, setEmail] = useState("");

  const UpdateEmail = async () => {
    const api_request = await UpdateUser({
      email: email,
    });

    if (!api_request.error) {
      setUserEmail(email);
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
    } else {
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
    }
  };

  return showEditEmailPop ?(
    <div className="fixed inset-0 z-20 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div className="relative mx-auto w-full max-w-sm rounded-md bg-TextOnDark p-8 shadow-lg">
          <div className=" sm:flex">
            <div className="w-full text-TextPrimary">
                <div className="text-lg text-center mb-4 font-bold">
                Edit Email
                </div>
              

           <div className="flex flex-col gap-3 ">
           <div className="flex flex-col gap-3">
            <label className="font-semibold">Email</label>
              <Textfield
                type="email"
                placeholder={useremail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                    UpdateEmail();
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

