import DesignForgotPass from "../../assets/svgs/DesignForgotPass";
import Button from "../../components/general/Button";
import TextField from "../../components/general/Textfield";

export default function ResetPassword({}) {
  return (
    <div className="flex h-screen flex-row flex-wrap-reverse justify-center bg-BGSecondary">
      <div className="ml-9 mt-20 hidden w-6/12 items-center  justify-center lg:flex">
        <DesignForgotPass />
      </div>
      <div className="mx-auto flex flex-col justify-center">
        <h1 className="mb-3 pb-3 text-3xl font-bold text-TextTertiary">
          Forgot Password
        </h1>

        <p className="mb-4 flex gap-x-3 text-sm text-TextTertiary">
          Enter the email associated with your account.
          </p>
       

        <div className="flex w-auto flex-col gap-y-3 md:w-96 ">
          <TextField type="Email" placeholder="Enter Email" />

          <div className="mt-7 text-sm">
            <Button text="Send Email" />
          </div>
        </div>
      </div>
    </div>
  );
}
