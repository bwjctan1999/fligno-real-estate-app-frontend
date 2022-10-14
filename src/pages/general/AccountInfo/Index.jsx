import DummyPic from "../../../assets/imgs/DummyPic.jpg";
import Button from "../../../components/general/Button";
import { GetUser } from "../../../api/ApiUsers";

import React, {useState} from "react";
import EditNamePop from "./EditNamePop";
import EditEmailPop from "./EditEmailPop";
import EditPhoneNumPop from "./EditPhoneNumPop";
import ChangePassPop from "./ChangePassPop";
import { useEffect } from "react";

export default function Index(  ) {
  const [showEditNamePop, setShowEditNamePop] = useState(false);
  const [showEditEmailPop, setShowEditEmailPop] = useState(false);
  const [showEditPhoneNumPop, setShowEditPhoneNumPop] = useState(false);

  const [showChangePassPop, setShowChangePassPop] = useState(false);
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  useEffect (() => {
    getUser()
  },[]) 

  const getUser = async () => {
    const api_request = await GetUser (localStorage.getItem("user_id"));
    if (!api_request.error) {
      setFormValues(api_request.response.data);
    }
    else {
      console.log(api_request.error);
    }
  }


  return (
    
    <div className="mt-28 flex h-auto flex-col items-center justify-center">
      <ChangePassPop/>

      <EditNamePop
       showEditNamePop={showEditNamePop}
       onClick={() => setShowEditNamePop(false)}
      />

      <EditEmailPop
       showEditEmailPop={showEditEmailPop}
       onClick={() => setShowEditEmailPop(false)}
      />
        <EditPhoneNumPop
       showEditPhoneNumPop={showEditPhoneNumPop}
       onClick={() => setShowEditPhoneNumPop(false)}
      />

         <ChangePassPop
       showChangePassPop={showChangePassPop}
       onClick={() => setShowChangePassPop(false)}
      />

      <div className="flex w-10/12 pb-8 ">
        <h1 className=" text-2xl font-bold text-TextPrimary"> My Account</h1>
      </div>

      <div className="flex w-10/12 flex-col gap-y-10 rounded-lg  border border-TextSecondary border-opacity-20 p-10 shadow-sm">
        <div className="flex w-full flex-wrap justify-between gap-6">
          <div className="relative h-24 w-24">
            <img
              className="rounded-full  shadow-md"
              src={DummyPic}
              alt="user image"
            />
          </div>
          <div className="flex  items-center ">
            <Button  padding="py-2 px-5" text="Edit Profile"/>
          </div>
        </div>
        <hr className=" h-px border-0 bg-BtnSecondary opacity-10 " />

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="w-1/2">
              <h1 className="font-semibold">Name</h1>
              <span className=" text-TextSecondary" > 
              {formValues.first_name} {formValues.last_name}
              </span>
            </div>
            <div className="flex  items-center ">
              <Button  padding="py-2  px-8" text="Edit" onClick={() => setShowEditNamePop(true)}/>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3">
            <div className="w-1/2">
              <h1 className="font-semibold">Email</h1>
              <span className=" text-TextSecondary">{formValues.email}</span>
            </div>
            <div className="flex  items-center ">
              <Button  padding="py-2 px-8" text="Edit" onClick={() => setShowEditEmailPop(true)}/>
            </div>
          </div>
          <div className="flex  flex-wrap justify-between gap-3">
            <div className="w-1/2">
              <h1 className="font-semibold">Phone Number</h1>
              <span className=" text-TextSecondary">{formValues.phone_number}</span>
            </div>
            <div className="flex items-center ">
              <Button  padding="py-2  px-8" text="Edit" onClick={() => setShowEditPhoneNumPop(true)} />
            </div>
          </div>

          <div className="flex  flex-wrap justify-between gap-3 ">
            <div>
              <h1 className="font-semibold">Subscription</h1>
              <span className=" text-TextSecondary">Starter</span>
            </div>

            <div className="wrap flex flex-col-reverse gap-2 md:flex-row lg:flex-row ">
              <div className="flex items-center  ">
                <Button
                  text="Cancel"
                  bgcolor="bg-BGPrimary"
                  textcolor="text-TextSecondary"
                  custom=" shadow-border shadow-TextSecondary"
                  padding="py-2 px-5"
                />
              </div>
              <div className="flex items-center ">
                <Button  padding="py-2 px-5" text="Change" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-28 flex w-10/12 flex-col gap-8 p-10">
        <hr className=" h-px border-0 bg-BtnSecondary opacity-20 " />
        <div className="flex  flex-col gap-4">
          <div>
            <h1 className="text-lg font-semibold">
              Password and Authentication
            </h1>
          </div>

          <div className="flex  flex-wrap gap-3">
            <div>
              <Button padding="py-2 px-5" text="Change Password" onClick={() => setShowChangePassPop(true)}/>
            </div>
          </div>
        </div>
        <hr className=" h-px border-0 bg-BtnSecondary opacity-20 " />

        <div className="flex  flex-col gap-4">
          <div>
            <h1 className="font-semibold">Account Removal</h1>
            <p className="text-base text-BtnSecondary">
              Disabling your account means you can recover it at any time after
              taking this action
            </p>
          </div>

          <div className="flex  flex-wrap gap-3">
            <div>
              <Button
                padding="py-2 px-5"
                bgcolor="bg-BtnTertiary-end"
                text="Disable Account"
              />
            </div>
            <div>
              <Button
                text="Delete Account"
                bgcolor="bg-BGPrimary"
                textcolor="text-BtnTertiary-end"
                custom=" shadow-border shadow-BtnTertiary-end"
                padding="py-2 px-5"
              />
            </div>
          </div>
        </div>
        <hr className=" h-px border-0 bg-BtnSecondary opacity-20 " />
      </div>
    </div>
  );
}
