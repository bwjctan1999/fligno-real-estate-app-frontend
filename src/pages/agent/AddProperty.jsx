import axios from "axios";
import { useState } from "react";

import Textfield from "../../components/general/Textfield";
import DropDown from "../../components/general/DropDown";
import TextArea from "../../components/general/TextArea";
import ImageUploader from "../../components/general/ImageUploader";
import Button from "../../components/general/Button";

import {
  ValidEmail,
  ValidEmpty,
  ValidName,
  ValidMobileNumber,
} from "../../scripts/Validations";

export default function AddProperty() {
  const [formValues, setFormValues] = useState({
    title: "",
    price: "",
    type: "",
    bedroom: "",
    bathroom: "",
    description: "",
    address_1: "",
    address_2: "",
    area: "",
    zip_code: "",
    city: "",
  });

  const [validations, setValidations] = useState({
    title: "",
    price: "",
    type: "",
    bedroom: "",
    bathroom: "",
    description: "",
    address_1: "",
    address_2: "",
    area: "",
    zip_code: "",
    city: "",
  });

  const Validation = () => {
    let tempValidations = {
      title: "",
      price: "",
      type: "",
      bedroom: "",
      bathroom: "",
      description: "",
      address_1: "",
      address_2: "",
      area: "",
      zip_code: "",
      city: "",
    };

    if (!ValidEmpty(formValues.title)) tempValidations.title = "Required";
    if (!ValidEmpty(formValues.price)) tempValidations.price = "Required";
    if (!ValidEmpty(formValues.type)) tempValidations.type = "Required";
    if (!ValidEmpty(formValues.bedroom)) tempValidations.bedroom = "Required";
    if (!ValidEmpty(formValues.bathroom)) tempValidations.bathroom = "Required";
    if (!ValidEmpty(formValues.description))
      tempValidations.description = "Required";
    if (!ValidEmpty(formValues.address_1))
      tempValidations.address_1 = "Required";
    if (!ValidEmpty(formValues.address_2))
      tempValidations.address_2 = "Required";
    if (!ValidEmpty(formValues.area)) tempValidations.area = "Required";
    if (!ValidEmpty(formValues.zip_code)) tempValidations.city = "Required";
    if (!ValidEmpty(formValues.zip_code)) tempValidations.zip_code = "Required";

    setValidations(tempValidations);

    const pass = Object.values(tempValidations).every((value) => value === "");
    if (pass) saveFormData();
  };

  const setValue = (e, name) => {
    setFormValues((oldValues) => ({
      ...oldValues,
      [name]: e.target.value,
    }));
  };

  const saveFormData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/property",
        formValues
      );
    } catch (error) {
      console.log(error);
      alert(`Add Property Failed! ${error.message}`);
    }
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
                onChange={(e) => setValue(e, "title")}
                invalidError={validations.title}
              />
            </div>

            <div className="w-full lg:w-1/4">
              <label className="font-black text-TextTertiary" htmlFor="price">
                Price 
              </label>
              <Textfield
                id="price "
                placeholder="₱"
                type="number"
                onChange={(e) => setValue(e, "price")}
                invalidError={validations.price}
              />
            </div>

            <div className="w-full lg:w-1/4">
              <label className="font-black text-TextTertiary" htmlFor="type">
                Property Type
              </label>
              <DropDown
                id="type"
                options={["For Rent", "For Sale"]}
                values={[1, 2]}
                onChange={(e) => setValue(e, "type")}
                invalidError={validations.type}
              />
            </div>
          </div>

          <div className="">
            <label className=" font-black text-TextTertiary" htmlFor="desc">
              Description
            </label>
            <TextArea
              id="desc"
              placeholder="Description"
              onChange={(e) => setValue(e, "description")}
              invalidError={validations.description}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="font-black text-TextTertiary">Location</p>
            <div className="flex gap-x-2">
              <div className="w-3/5">
                <Textfield
                  placeholder="Address 1"
                  onChange={(e) => setValue(e, "address_1")}
                  invalidError={validations.address_1}
                />
              </div>
              <div className="w-2/5">
                <Textfield
                  placeholder="City"
                  onChange={(e) => setValue(e, "city")}
                  invalidError={validations.city}
                />
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="w-3/5">
                <Textfield
                  placeholder="Address 2"
                  onChange={(e) => setValue(e, "address_2")}
                  invalidError={validations.address_2}
                />
              </div>
              <div className="w-2/5">
                <Textfield
                  type="number"
                  placeholder="Zip Code"
                  onChange={(e) => setValue(e, "zip_code")}
                  invalidError={validations.zip_code}
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
                  type="number"
                  placeholder="Area (sqft)"
                  onChange={(e) => setValue(e, "area")}
                  invalidError={validations.area}
                />
              </div>

              <div className="w-2/6">
                <Textfield
                  type="number"
                  placeholder="No. Bedroom"
                  onChange={(e) => setValue(e, "bedroom")}
                  invalidError={validations.bedroom}
                />
              </div>

              <div className="w-2/6">
                <Textfield
                  type="number"
                  placeholder="No. Bathroom"
                  onChange={(e) => setValue(e, "bathroom")}
                  invalidError={validations.bathroom}
                />
              </div>
            </div>
          </div>

          <ImageUploader imageStorage={setFormValues} />
        </div>
      </div>
      <div className=" ml-auto flex w-full justify-end pt-5 lg:w-1/2 lg:pl-10">
        <div className="w-1/2 lg:w-3/6">
          <Button text="Save" onClick={Validation} />
        </div>
      </div>
    </div>
  );
}
