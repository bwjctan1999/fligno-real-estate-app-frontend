import Textfield from "../../components/general/Textfield";
import TextArea from "../../components/general/TextArea";
import Button from "../../components/general/Button";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function AdminEditSubscription() {
  const location = useLocation();

  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);
  const [price, setPrice] = useState(location.state.price);

  const editSubscription = () => {};

  return (
    <div className="bg-BGSecondary">
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
            />
          </div>
          <div className="mt-8  w-full lg:w-1/4">
            <Button text="Save" />
          </div>
        </div>
      </div>
    </div>
  );
}
