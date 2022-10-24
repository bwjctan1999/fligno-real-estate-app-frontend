import React, { useState, useEffect } from "react";
import { GetUser } from "../../../api/ApiUsers";
import {
  GetUserSubscriptionInfo,
  ChangeUserSubscription,
  GetSubscriptionForClient,
} from "../../../api/ApiSubscription";

import DummyPic from "../../../assets/imgs/AgentPic.webp";

import PopUp from "../../../components/popups/PopUp";
import ErrorAlert from "../../../components/general/ErrorAlert";
import SuccessAlert from "../../../components/general/SuccessAlert";
import EditNamePop from "./EditNamePop";
import EditEmailPop from "./EditEmailPop";
import EditPhoneNumPop from "./EditPhoneNumPop";
import ChangePassPop from "./ChangePassPop";
import Button from "../../../components/general/Button";

export default function Index() {
  const [showEditNamePop, setShowEditNamePop] = useState(false);
  const [showEditEmailPop, setShowEditEmailPop] = useState(false);
  const [showEditPhoneNumPop, setShowEditPhoneNumPop] = useState(false);
  const [showChangePassPop, setShowChangePassPop] = useState(false);

  const [showWarning, setShowWarning] = useState(false);

  const [first_name, setFirstName] = useState(false);
  const [last_name, setLastName] = useState(false);
  const [email, setEmail] = useState(false);
  const [phone_number, setPhoneNumber] = useState(false);
  const [subscription, setSubscription] = useState(null);

  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    getUser();
    getSubscription();
  }, []);

  const getUser = async () => {
    const api_request = await GetUser(localStorage.getItem("user_id"));
    if (!api_request.error) {
      setFirstName(api_request.response.data.first_name);
      setLastName(api_request.response.data.last_name);
      setEmail(api_request.response.data.email);
      setPhoneNumber(api_request.response.data.phone_number);
    } else {
      console.log(api_request.error);
    }
  };

  const getSubscription = async () => {
    const api_request = await GetUserSubscriptionInfo();

    if (!api_request.error) {
      setSubscription(api_request.response.data[0].subscription_type);
    } else {
      console.log(api_request.error);
      alert(api_request.error);
    }
  };

  const changeSubcription = async () => {
    const api_request = await GetSubscriptionForClient();

    if (!api_request.error) {
      const free_subscription = api_request.response.data.data.filter(
        (x) => x.price === 0
      );

      const api_request_change = await ChangeUserSubscription(
        free_subscription[0].id
      );

      if (!api_request_change.error) {
        console.log(api_request_change.response);
      } else {
        console.log(api_request_change.error);
      }
    } else {
      console.log(api_request.error);
      alert(api_request.error);
    }
  };

  const changeFirstName = (name) => {
    setFirstName(name);
  };

  const changeLastName = (name) => {
    setLastName(name);
  };

  const changeEmail = (name) => {
    setEmail(name);
  };
  const changePhoneNumber = (name) => {
    setPhoneNumber(name);
  };

  return (
    <div className="mt-20">
      <PopUp
        text="Are you sure you would want to Cancel your Subscription? This cannot be reversed."
        cancelFunction={() => setShowWarning(false)}
        okayFunction={() => {
          setShowWarning(false);
          changeSubcription();
        }}
        state={showWarning}
      />

      <div className="mx-3 mb-14 flex flex-col gap-2">
        <ErrorAlert
          text="Failed to save profile changes."
          showErrorAlert={showErrorAlert}
          setShowErrorAlert={setShowErrorAlert}
        />
        <SuccessAlert
          text="Successfully saved profile changes."
          showSuccessAlert={showSuccessAlert}
          setShowSuccessAlert={setShowSuccessAlert}
        />
      </div>

      <div className=" flex h-auto flex-col items-center justify-center pt-4">
        <ChangePassPop />

        <EditNamePop
          showEditNamePop={showEditNamePop}
          action={() => setShowEditNamePop(false)}
          setFirst={changeFirstName}
          setLast={changeLastName}
          firstname={first_name}
          lastname={last_name}
          setShowErrorAlert={setShowErrorAlert}
          setShowSuccessAlert={setShowSuccessAlert}
        />

        <EditEmailPop
          showEditEmailPop={showEditEmailPop}
          action={() => setShowEditEmailPop(false)}
          setUserEmail={changeEmail}
          useremail={email}
          setShowErrorAlert={setShowErrorAlert}
          setShowSuccessAlert={setShowSuccessAlert}
        />
        <EditPhoneNumPop
          showEditPhoneNumPop={showEditPhoneNumPop}
          action={() => setShowEditPhoneNumPop(false)}
          setPNumber={changePhoneNumber}
          phonenumber={phone_number}
          setShowErrorAlert={setShowErrorAlert}
          setShowSuccessAlert={setShowSuccessAlert}
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
              <Button padding="py-2 px-5" text="Edit Profile" />
            </div>
          </div>
          <hr className=" h-px border-0 bg-BtnSecondary opacity-10 " />

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-between gap-3">
              <div className="w-1/2">
                <h1 className="font-semibold">Name</h1>
                <span className=" text-TextSecondary">
                  {first_name} {last_name}
                </span>
              </div>
              <div className="flex  items-center ">
                <Button
                  padding="py-2  px-8"
                  text="Edit"
                  onClick={() => setShowEditNamePop(true)}
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="w-1/2">
                <h1 className="font-semibold">Email</h1>
                <span className=" text-TextSecondary">{email}</span>
              </div>
              <div className="flex  items-center ">
                <Button
                  padding="py-2 px-8"
                  text="Edit"
                  onClick={() => setShowEditEmailPop(true)}
                />
              </div>
            </div>
            <div className="flex  flex-wrap justify-between gap-3">
              <div className="w-1/2">
                <h1 className="font-semibold">Phone Number</h1>
                <span className=" text-TextSecondary">{phone_number}</span>
              </div>
              <div className="flex items-center ">
                <Button
                  padding="py-2  px-8"
                  text="Edit"
                  onClick={() => setShowEditPhoneNumPop(true)}
                />
              </div>
            </div>

            <div className="flex  flex-wrap justify-between gap-3 ">
              <div>
                <h1 className="font-semibold">Subscription</h1>
                <span className=" text-TextSecondary">{subscription}</span>
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
                  <Button
                    padding="py-2 px-5"
                    text="Change"
                    onClick={() => setShowWarning(true)}
                  />
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
                <Button
                  padding="py-2 px-5"
                  text="Change Password"
                  onClick={() => setShowChangePassPop(true)}
                />
              </div>
            </div>
          </div>
          <hr className=" h-px border-0 bg-BtnSecondary opacity-20 " />

          <div className="flex  flex-col gap-4">
            <div>
              <h1 className="font-semibold">Account Removal</h1>
              <p className="text-base text-BtnSecondary">
                Disabling your account means you can recover it at any time
                after taking this action
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
    </div>
  );
}
