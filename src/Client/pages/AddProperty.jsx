import AgentNavbar from "../components/AgentNavbar";
import Textfield from "../../components/Textfield";
import DropDown from "../../components/DropDown";
import TextArea from "../../components/TextArea";

export default function AddProperty() {
  return (
    <div className="h-screen">
      <h1 className="text-TextTertiary font-black text-2xl">Add Property</h1>

      <div className="flex h-full items-center">
        <div className="flex">
          <div className="w-4/5 flex flex-col justify-evenly">
            <div className="flex flex-row gap-x-2 w-full  ">
              <div className="w-2/4">
                <span className=" font-black text-TextTertiary ">
                  Property Title
                </span>
                <Textfield placeholder="Title" />
              </div>

              <div className="w-1/4">
                <span className=" font-black text-TextTertiary ">Price</span>
                <Textfield placeholder="Price" />
              </div>

              <div className="w-1/4">
                <span className=" font-black text-TextTertiary ">
                  Property Type
                </span>
                <DropDown />
              </div>
            </div>

            <div className="">
              <label>
                <span className=" font-black text-TextTertiary">
                  Description
                </span>
                <TextArea />
              </label>
            </div>

            <div className="flex flex-row gap-x-2 w-full  ">
              <div className="w-2/3">
                <span className=" font-black text-TextTertiary ">Location</span>
                <Textfield placeholder="Address 1" />
              </div>
              <div className="w-2/5">
                <span className=" font-black text-BGPrimary ">City</span>
                <Textfield placeholder="City" />
              </div>
            </div>

            <div className="flex flex-row gap-x-2 w-full">
              <div className="w-2/3">
                <Textfield placeholder="Address 2" />
              </div>
              <div className="w-2/5">
                <Textfield placeholder="Zip Code" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-4/5 flex flex-col justify-evenly">
            <div className="flex flex-row gap-x-2 w-full  ">
              <div className="w-2/4">
                <span className=" font-black text-TextTertiary ">
                  Property Title
                </span>
                <Textfield placeholder="Title" />
              </div>

              <div className="w-1/4">
                <span className=" font-black text-TextTertiary ">Price</span>
                <Textfield placeholder="Price" />
              </div>

              <div className="w-1/4">
                <span className=" font-black text-TextTertiary ">
                  Property Type
                </span>
                <DropDown />
              </div>
            </div>

            <div className="">
              <label>
                <span className=" font-black text-TextTertiary">
                  Description
                </span>
                <TextArea />
              </label>
            </div>

            <div className="flex flex-row gap-x-2 w-full  ">
              <div className="w-2/3">
                <span className=" font-black text-TextTertiary ">Location</span>
                <Textfield placeholder="Address 1" />
              </div>
              <div className="w-2/5">
                <span className=" font-black text-BGPrimary ">City</span>
                <Textfield placeholder="City" />
              </div>
            </div>

            <div className="flex flex-row gap-x-2 w-full">
              <div className="w-2/3">
                <Textfield placeholder="Address 2" />
              </div>
              <div className="w-2/5">
                <Textfield placeholder="Zip Code" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
