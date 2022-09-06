import ImageUploader from "../../components/ImageUploader";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";

export default function EditProfile() {
  return (
    <div className="h-screen bg-BGSecondary p-4 lg:p-20">
      <h1 className="mb-10 text-4xl font-bold text-TextTertiary">
        Add Property
      </h1>
      <div className="flex w-full flex-col gap-5 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-5 lg:w-1/2">
          <p className="font-black text-TextTertiary">Information</p>
          <ImageUploader />
        </div>

        <div className="flex flex-col lg:w-1/2 lg:px-10">
          <div className="flex flex-col gap-y-5">
            <p className="font-black text-TextTertiary">Information</p>
            <Textfield placeholder="Email" type="email" />
            <Textfield placeholder="Password" type="password" />
            <Textfield placeholder="Confirm Password" type="password" />
            <Textfield placeholder="Full Name" />
            <Textfield placeholder="Mobile Number" />
          </div>
        </div>
      </div>

      <Button text="Save" custom="float-right w-full lg:w-72 m-10" />
    </div>
  );
}
