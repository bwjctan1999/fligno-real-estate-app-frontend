import axios from "axios";
import { useState } from "react";

import Textfield from "../../components/general/Textfield";
import DropDown from "../../components/general/DropDown";
import TextArea from "../../components/general/TextArea";
import ImageUploader from "../../components/general/ImageUploader";
import Button from "../../components/general/Button";

export default function AddProperty() {
  const [formValues, setFormValues] = useState({
    p_title: null,
    price: null,
    p_type: null,
    bedroom: null,
    bathroom: null,
    p_info: null,
    loc_a: null,
    loc_b: null,
    area: null,
    z_code: null,
    city: null,
    p_img: null,
  });

  const setValue = (e, name) => {
    setFormValues((oldValues) => ({
      ...oldValues,
      [name]: e.target.value,
    }));
  };

  const saveFormData = async () => {
    await axios
      .post("", propertyData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-BGSecondary p-4 pt-16 lg:p-20">
      <h1 className="mb-10 text-4xl font-bold text-TextTertiary">
        Add Property
      </h1>
      <div className="flex w-full flex-col gap-5 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-5 lg:w-1/2 ">
          <div className="flex w-full flex-col gap-x-2 gap-y-5 lg:flex-row lg:gap-y-0">
            <div className="w-full lg:w-2/4">
              <span className=" font-black text-TextTertiary ">
                Property Title
              </span>
              <Textfield
                placeholder="Title"
                onChange={(e) => setValue(e, "p_title")}
              />
            </div>

            <div className="w-full lg:w-1/4">
              <label className="font-black text-TextTertiary" for="price">
                Price
              </label>
              <Textfield
                id="price "
                placeholder="Price"
                type="number"
                onChange={(e) => setValue(e, "price")}
              />
            </div>

            <div className="w-full lg:w-1/4">
              <label className="font-black text-TextTertiary" for="ptype">
                Property Type
              </label>
              <DropDown
                id="ptype"
                options={["For Rent", "For Sale"]}
                onChange={(e) => setValue(e, "p_type")}
              />
            </div>
          </div>

          <div className="">
            <label className=" font-black text-TextTertiary" for="desc">
              Description
            </label>
            <TextArea
              id="desc"
              placeholder="Description"
              onChange={(e) => setValue(e, "p_info")}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="font-black text-TextTertiary">Location</p>
            <div className="flex gap-x-2">
              <div className="w-3/5">
                <Textfield
                  placeholder="Address 1"
                  onChange={(e) => setValue(e, "loc_a")}
                />
              </div>
              <div className="w-2/5">
                <Textfield
                  placeholder="City"
                  onChange={(e) => setValue(e, "city")}
                />
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="w-3/5">
                <Textfield
                  placeholder="Address 2"
                  onChange={(e) => setValue(e, "loc_b")}
                />
              </div>
              <div className="w-2/5">
                <Textfield
                  placeholder="Zip Code"
                  onChange={(e) => setValue(e, "z_code")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:w-1/2">
          <div className="flex flex-col">
            <p className="font-black text-TextTertiary">Location</p>
            <div className="flex w-full flex-row gap-x-2">
              <div className="w-2/6">
                <Textfield
                  placeholder="Area (sqft)"
                  onChange={(e) => setValue(e, "area")}
                />
              </div>

              <div className="w-2/6">
                <Textfield
                  placeholder="No. Bedroom"
                  onChange={(e) => setValue(e, "bedroom")}
                />
              </div>

              <div className="w-2/6">
                <Textfield
                  placeholder="No. Bathroom"
                  onChange={(e) => setValue(e, "bathroom")}
                />
              </div>
            </div>
          </div>

          <ImageUploader />
        </div>
      </div>
      <div className=" ml-auto flex w-full items-center justify-between pt-5 lg:w-1/2 lg:pl-10">
        <div className="w-1/2 lg:w-3/6">
          <Button text="Save" onClick={saveFormData} />
        </div>
      </div>
    </div>
  );
}
