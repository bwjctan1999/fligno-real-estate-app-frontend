import Textfield from "../../components/general/Textfield";
import TextArea from "../../components/general/TextArea";
import Button from "../../components/general/Button";

import {
  ValidEmpty,
  ValidNoEmojis,
  ValidNumbersOnly,
} from "../../scripts/validations";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { UpdateSubscription } from "../../api/ApiSubscription";
import PopUpProcessing from "../../components/popups/PopUpProcessing";

export default function AdminEditSubscription() {
  const location = useLocation();

  const id = location.state.id;
  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);
  const [price, setPrice] = useState(location.state.price);
  const [showPopup, setShowPopup] = useState(false);

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

    if (!ValidNoEmojis(title)) tempValidator.title = "Emojis are not allowed";
    if (!ValidNumbersOnly(price)) tempValidator.price = "Invalid Number";
    if (!ValidEmpty(title)) tempValidator.title = "Required";
    if (!ValidEmpty(description)) tempValidator.description = "Required";
    if (!ValidEmpty(price)) tempValidator.price = "Required";

    setValidator(tempValidator);

    const pass = Object.values(tempValidator).every((value) => value === "");
    if (pass) setShowPopup(true);
  };

  const editSubscription = async () => {
    const api_request = await UpdateSubscription(id, {
      title: title,
      description: description,
      price: price,
    });

    console.log(api_request.response);
    if (!api_request.error) {
      return true;
    } else {
      console.log(api_request.error);
      return false;
    }
  };

  return (
    <div className="bg-BGSecondary">
      <PopUpProcessing
        show={showPopup}
        text="Subscription Successfully updated."
        okayFunction={() => setShowPopup(false)}
        actionFunction={editSubscription}
      />
      <div className="flex flex-col gap-4  px-4 pt-16 md:px-20 lg:px-60 lg:pt-28">
        <div className="flex h-screen  flex-col gap-4">
          <h1 className="mb-6 w-full text-4xl font-bold text-TextTertiary">
            Edit Subscription
          </h1>

          <div className="w-full lg:w-8/12">
            <span className=" font-black text-TextTertiary ">
              Property Title
            </span>
            <Textfield
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              invalidError={validator.price}
            />
          </div>
          <div className="mt-8  w-full lg:w-1/4">
            <Button text="Save" onClick={() => Validation()} />
          </div>
        </div>
      </div>
    </div>
  );
}
