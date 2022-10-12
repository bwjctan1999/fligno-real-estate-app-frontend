import DesignLogin from "../../assets/svgs/DesignLogin";
import Button from "../../components/general/Button";
import TextField from "../../components/general/Textfield";
import { ChangePassword } from "../../api/ApiPassword";
import { useState } from "react";

export default function ForgetPassPage({}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordHandler = () => {
    const api_request = ChangePassword();

    if (!api_request) {
    } else {
    }
  };

  return (
    <div className="flex h-screen flex-row flex-wrap-reverse justify-center bg-BGSecondary">
      <div className="ml-20 hidden w-6/12 items-center  justify-center lg:flex">
        <DesignLogin />
      </div>
      <div className="mx-auto flex flex-col justify-center">
        <h1 className="mb-8 pb-3 text-3xl font-bold text-TextTertiary">
          Create New Password
        </h1>

        <div className="flex w-auto flex-col gap-y-3 md:w-96 ">
          <TextField
            type="Password"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <TextField
            type="Password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />

          <div className="mt-7 text-sm">
            <Button text="Reset Password" onClick={resetPasswordHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}
