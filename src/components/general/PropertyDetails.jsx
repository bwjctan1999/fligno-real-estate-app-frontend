import { useEffect, useState } from "react";
import { GetProperty } from "../../api/ApiProperty";
import { ContactAgent } from "../../api/ApiContactAgent";
import Button from "./Button";

import PDimg2 from "../../assets/imgs/PDimg2.png";
import PDimg3 from "../../assets/imgs/PDimg3.png";
import PDimg4 from "../../assets/imgs/PDimg4.png";
import PDimg5 from "../../assets/imgs/PDimg5.png";

import IconArea from "../../assets/icons/IconArea";
import IconBed from "../../assets/icons/IconBed";
import IconBathroom from "../../assets/icons/IconBathroom";
import IconTag from "../../assets/icons/IconTag";

import PopUpContactUs from "../../components/popups/PopUpContactUs";

export default function PropertyDetails({ setSelectedId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [formValues, setFormValues] = useState({
    id: "",
    user_id: "",
    title: "",
    price: "",
    type: "",
    address_1: "",
    address_2: "",
    area: "",
    bathroom: "",
    bedroom: "",
    city: "",
    description: "",
    zip_code: "",
    img: "",
  });

  useEffect(() => {
    fillProperty();
  }, []);

  const contactAgentHandler = async () => {
    const api_request = await ContactAgent(formValues.id);

    if (!api_request.error) {
      setName(api_request.response.data.agent_name);
      setEmail(api_request.response.data.agent_email);
      setNumber(api_request.response.data.agent_phone_number);
    } else {
      console.log(api_request.error);
      alert(api_request.error);
    }
  };

  const fillProperty = async () => {
    const url = window.location.href.split("/");
    const id = url[url.length - 1];

    const property = await GetProperty(`${id}`, "property");
    if (!property.error) {
      setFormValues(property.response.data.data);
      if (setSelectedId) {
        setSelectedId(property.response.data.data.id);
      }
    } else {
      console.log(property.error);
      alert(property.error);
    }
  };

  return (
    <div className="flex flex-col gap-14 lg:flex-row">
      <PopUpContactUs
        showPopUp={showPopUp}
        onClick={() => setShowPopUp(false)}
        name={name}
        email={email}
        number={number}
      />

      <div className="w-full lg:w-7/12">
        <img
          src={`${formValues.img}`}
          alt="image"
          className="aspect-video w-full rounded-lg object-cover"
        />
        <div className="mt-3 grid grid-cols-4 gap-3">
          <img
            src={PDimg2}
            alt="image"
            className="aspect-video w-full rounded-lg object-cover"
          />
          <img
            src={PDimg3}
            alt="image"
            className="aspect-video w-full rounded-lg object-cover"
          />
          <img
            src={PDimg4}
            alt="image"
            className="aspect-video w-full rounded-lg object-cover"
          />
          <img
            src={PDimg5}
            alt="image"
            className="aspect-video w-full rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="w-full lg:w-5/12">
        <div className="mb-4 w-full">
          <div>
            <h1 className="text-4xl font-bold ">{formValues.title}</h1>
            <span className="text-lg font-medium text-TextTertiary underline underline-offset-1 ">
              {formValues.address_1}
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold">Property Description</h1>
          <p className="mt-2 text-justify text-TextTertiary">
            {formValues.description}
          </p>
        </div>

        <div>
          <h1 className="mt-4 pb-4 text-lg font-bold">Property Info</h1>
          <div>
            <div className="flex justify-between gap-3 font-bold text-TextTertiary">
              <div className="flex flex-col items-center gap-1 ">
                <div className="flex gap-4">
                  <IconArea />
                  {formValues.area}
                </div>
                Area (sqft)
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-4">
                  <IconBed />
                  {formValues.bedroom}
                </div>
                No. Bedroom
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-4">
                  <IconBathroom />
                  {formValues.bathroom}
                </div>
                No. Bathroom
              </div>
            </div>

            <div className="mt-10 flex w-full flex-col gap-4 md:flex-row">
              <div className="flex w-full items-center justify-center gap-3 rounded-lg border-2 border-solid p-2 text-2xl font-bold md:w-7/12">
                <IconTag />
                <h1>{`₱${formValues.price}`}</h1>
              </div>
              <div className="flex h-auto w-full md:w-5/12">
                <Button
                  padding="p-3"
                  text="Contact Agent"
                  onClick={() => {
                    contactAgentHandler();
                    setShowPopUp(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
