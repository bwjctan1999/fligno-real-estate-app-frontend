import AgentNavbar from "../components/AgentNavbar";
import Textfield from "../../components/Textfield";
import DropDown from "../../components/DropDown";
import TextArea from "../../components/TextArea";

export default function AddProperty() {
  return (
    <div className="h-screen">
      <h1 className="text-2xl font-black text-TextTertiary">Add Property</h1>
      <div className="flex h-full w-full">
        <div className="flex w-1/2 flex-col p-20">
          <div className="flex w-full flex-row gap-x-2">
            <div className="w-2/4">
              <span className=" font-black text-TextTertiary ">
                Property Title
              </span>
              <Textfield placeholder="Title" />
            </div>

            <div className="w-1/4">
              <label className="font-black text-TextTertiary" for="price">
                Price
              </label>
              <Textfield id="price " placeholder="Price" />
            </div>

            <div className="w-1/4">
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
                <Textfield placeholder="Address 1" />
              </div>
              <div className="w-2/5">
                <Textfield placeholder="City" />
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="w-3/5">
                <Textfield placeholder="Address 2" />
              </div>
              <div className="w-2/5">
                <Textfield placeholder="Zip Code" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-1/2 flex-col p-20">
          <div className="flex flex-col">
            <p className="font-black text-TextTertiary">Location</p>
            <div className="flex w-full flex-row gap-x-2">
              <div className="w-2/6">
                <Textfield placeholder="Area (sqft)" />
              </div>

              <div className="w-2/6">
                <Textfield placeholder="No. Bedroom" />
              </div>

              <div className="w-2/6">
                <Textfield placeholder="No. Bathroom" />
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
