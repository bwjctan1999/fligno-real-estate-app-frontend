import Textfield from "../../components/general/Textfield";
import TextArea from "../../components/general/TextArea";
import Button from "../../components/general/Button";

import {
  ValidNoEmojis,
  ValidNumbersOnly,
  ValidEmpty,
} from "../../scripts/validations";

import { CreateSubscription } from "../../api/ApiSubscription";
import { useState } from "react";
import PopUpProcessing from "../../components/popups/PopUpProcessing";
import { useNavigate } from "react-router-dom";

export default function AdminAddSubscription() {
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [validator, setValidator] = useState({
    title: "",
    description: "",
    price: "",
  });

  const Validation = () => {
    const tempValidator = {
      title: "",
      description: "",
      price: "",
    };

    if (!ValidNoEmojis(formValues.title))
      tempValidator.title = "Emojis are not allowed";
    if (!ValidNumbersOnly(formValues.price))
      tempValidator.price = "Invalid Number";
    if (!ValidEmpty(formValues.title)) tempValidator.title = "Required";
    if (!ValidEmpty(formValues.description))
      tempValidator.description = "Required";
    if (!ValidEmpty(formValues.price)) tempValidator.price = "Required";

    setValidator(tempValidator);

    const pass = Object.values(tempValidator).every((value) => value === "");
    if (pass) setShowPopUp(true);
  };

  const addSubscriptionHandler = async () => {
    const api_request = await CreateSubscription(formValues);

    if (!api_request.error) {
      console.log(api_request.response);
    } else {
      console.log(api_request.error);
    }
  };

  return (
    <div className="bg-BGSecondary">
      <PopUpProcessing
        show={showPopUp}
        text="Subscription added"
        actionFunction={() => addSubscriptionHandler}
        okayFunction={() => {
          setShowPopUp(false);
          navigate("/admin/subscription");
        }}
      />
      <div className="flex flex-col gap-4  px-4 pt-16 md:px-20 lg:px-60 lg:pt-28">
        <div className="flex h-screen  flex-col gap-4">
          <h1 className="mb-6 w-full text-4xl font-bold text-TextTertiary">
            Add Subscription
          </h1>

          <div className="w-full lg:w-8/12">
            <span className=" font-black text-TextTertiary ">
              Property Title
            </span>
            <Textfield
              placeholder="Title"
              value={formValues.title}
              onChange={(e) =>
                setFormValues((oldValues) => ({
                  ...oldValues,
                  title: e.target.value,
                }))
              }
              invalidError={validator.title}
            />
          </div>

          <div className="w-full lg:w-8/12">
            <label className=" font-black text-TextTertiary" htmlFor="desc">
              Description
            </label>
            <TextArea
              id="desc"
              placeholder="Description"
              onChange={(e) =>
                setFormValues((oldValues) => ({
                  ...oldValues,
                  description: e.target.value,
                }))
              }
              invalidError={validator.description}
            />
          </div>

          <div className="w-full lg:w-8/12">
            <label className="font-black text-TextTertiary" htmlFor="price">
              Price
            </label>
            <Textfield
              id="price "
              placeholder="₱"
              type="number"
              value={formValues.price}
              onChange={(e) =>
                setFormValues((oldValues) => ({
                  ...oldValues,
                  price: e.target.value,
                }))
              }
              invalidError={validator.price}
            />
          </div>
          <div className="mt-8  w-full lg:w-1/4">
            <Button text="Add" onClick={() => Validation()} />
          </div>
        </div>
      </div>
    </div>
  );
}
