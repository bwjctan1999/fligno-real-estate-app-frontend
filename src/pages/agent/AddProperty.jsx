import Textfield from "../../components/general/Textfield";
import DropDown from "../../components/general/DropDown";
import TextArea from "../../components/general/TextArea";
import ImageUploader from "../../components/general/ImageUploader";
import Button from "../../components/general/Button";
import { useState } from "react";
import axios from "axios";

export default function AddProperty() {
  const [p_title, setPTitle] = useState("");
  const [price, setPrice] = useState("");
  const [p_type, setPType] = useState("");
  const [p_info, setPInfo] = useState("");
  const [loc_a, setLocA] = useState("");
  const [loc_b, setLocB] = useState("");
  const [city, setCity] = useState("");
  const [z_code, setZCode] = useState("");
  const [area, setArea] = useState("");
  const [bedroom, setBedRoom] = useState("");
  const [bathroom, setBathroom] = useState("");

  const postProperty = () => {
    const configuration = {
      method: "post",
      url: "http://localhost:8000/api/add_property",
      data: {
        p_title,
        price,
        p_type,
        p_info,
        loc_a,
        lob_b,
        city,
        z_code,
        area,
        bedroom,
        bathroom,
      },
    };
    axios(configuration)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen bg-BGSecondary p-4 lg:p-20">
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
                onChange={(e) => setPTitle(e.target.value)}
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
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="w-full lg:w-1/4">
              <label className="font-black text-TextTertiary" for="ptype">
                Property Type
              </label>
              <DropDown id="ptype" />
            </div>
          </div>

          <div className="">
            <label className=" font-black text-TextTertiary" for="desc">
              Description
            </label>
            <TextArea id="desc" />
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="font-black text-TextTertiary">Location</p>
            <div className="flex gap-x-2">
              <div className="w-3/5">
                <Textfield
                  placeholder="Address 1"
                  onChange={(e) => setLocA(e.target.value)}
                />
              </div>
              <div className="w-2/5">
                <Textfield
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="w-3/5">
                <Textfield
                  placeholder="Address 2"
                  onChange={(e) => setLocB(e.target.value)}
                />
              </div>
              <div className="w-2/5">
                <Textfield
                  placeholder="Zip Code"
                  onChange={(e) => setZCode(e.target.value)}
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
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>

              <div className="w-2/6">
                <Textfield
                  placeholder="No. Bedroom"
                  onChange={(e) => setBedRoom(e.target.value)}
                />
              </div>

              <div className="w-2/6">
                <Textfield
                  placeholder="No. Bathroom"
                  onChange={(e) => setBathroom(e.target.value)}
                />
              </div>
            </div>
          </div>

          <ImageUploader />
        </div>
      </div>
      <div className=" ml-auto flex w-full items-center justify-between pt-5 lg:w-1/2 lg:pl-10">
        <div className="my-auto flex gap-4">
          <label>
            <input
              type="radio"
              value="Male"
              name="propertyType"
              className="scale-150"
            />
            Reservation
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              name="propertyType"
              className="scale-150"
            />
            Rent
          </label>
        </div>
        <div className="w-1/2 lg:w-3/6">
          <Button text="Save" onClick={postProperty} />
        </div>
      </div>
    </div>
  );
}
