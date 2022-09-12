import AgentNavbar from "../../components/agent/AgentNavbar";
import ImageUploader from "../../components/general/ImageUploader";
import Textfield from "../../components/general/Textfield";
import Button from "../../components/general/Button";

export default function EditProfile() {
  return (
    <div className="flex h-auto min-h-screen w-full flex-col gap-10 bg-BGSecondary p-4 lg:p-20">
      <AgentNavbar />
      <h1 className="mb-10 text-4xl font-bold text-TextTertiary">
        Edit Property
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
      <Button text="Save" custom="w-full lg:w-72 lg:mx-10 self-end" />
    </div>
  );
}
