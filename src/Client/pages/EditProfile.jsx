import ImageUploader from "../../components/ImageUploader";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";

export default function EditProfile() {
  return (
    <div className="min-h-screen bg-BGSecondary">
      <div className="h-full p-4 lg:p-20">
        <h1 className="mb-10 text-4xl font-bold text-TextTertiary">
          Add Property
        </h1>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-20  ">
          <div className="flex h-full flex-col justify-center gap-4 lg:w-2/5 ">
            <label className="font-black text-TextTertiary" for="price">
              Add Photo
            </label>

            <div className="h-full w-full">
              <ImageUploader />
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 lg:w-1/2 lg:px-10">
            <label className="font-black text-TextTertiary" for="price">
              Information
            </label>
            <Textfield id="email" placeholder="Email" type="Email" />
            <Textfield id="pass" placeholder="Password" type="Password" />
            <Textfield
              id="conpass"
              placeholder="Confirm Password"
              type="Password"
            />
            <Textfield id="fname" placeholder="Full Name" type="name" />
            <Textfield id="mobnum" placeholder="Mobile Number" type="" />
          </div>
        </div>
        <div className="float-right ">
          <Button custom={"w-64"} text="Save" />
        </div>
      </div>
    </div>
  );
}
