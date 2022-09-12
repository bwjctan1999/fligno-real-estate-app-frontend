import Textfield from "../../components/general/Textfield";
import DropDown from "../../components/general/DropDown";
import TextArea from "../../components/general/TextArea";
import ImageUploader from "../../components/general/ImageUploader";
import Button from "../../components/general/Button";
import AgentNavbar from "../../components/agent/AgentNavbar";

export default function AddProperty() {
  return (
    <div className="min-h-screen bg-BGSecondary p-4 pt-16 lg:p-20">
      <AgentNavbar />
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
              <Textfield placeholder="Title" />
            </div>

            <div className="w-full lg:w-1/4">
              <label className="font-black text-TextTertiary" for="price">
                Price
              </label>
              <Textfield id="price " placeholder="Price" type="number" />
            </div>

            <div className="w-full lg:w-1/4">
              <label className="font-black text-TextTertiary" for="ptype">
                Property Type
              </label>
              <DropDown id="ptype" options={["For Rent", "For Sale"]} />
            </div>
          </div>

          <div className="">
            <label className=" font-black text-TextTertiary" for="desc">
              Description
            </label>
            <TextArea id="desc" placeholder="Description" />
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

        <div className="flex flex-col gap-5 lg:w-1/2">
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
            />{" "}
            Reservation
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              name="propertyType"
              className="scale-150"
            />{" "}
            Rent
          </label>
        </div>
        <div className="w-1/2 lg:w-3/6">
          <Button text="Save" />
        </div>
      </div>
    </div>
  );
}
