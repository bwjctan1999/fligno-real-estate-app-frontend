import { useState } from "react";

import { RequestPasswordChange } from "../../api/ApiPassword";

import DesignLogin from "../../assets/svgs/DesignLogin";
import DesignSpinner from "../../assets/svgs/DesignSpinner";
import Button from "../../components/general/Button";
import TextField from "../../components/general/Textfield";
import IconSuccessful from "../../assets/icons/IconSuccessful";
import { useNavigate } from "react-router-dom";

export default function ResetPassword({}) {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const sendEmailHandler = async () => {
    setLoading(true);
    setLoaded(false);
    localStorage.setItem("reset_pass_email", email);
    const api_request = await RequestPasswordChange({ email: email });
    if (!api_request.error) {
      setLoaded(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
      navigate("/check-your-email");
    } else {
      console.log(api_request.error);
    }
  };

  return (
    <div className="flex h-screen flex-row flex-wrap-reverse justify-center bg-BGSecondary">
      <div className="ml-20 hidden w-6/12 items-center  justify-center lg:flex">
        <DesignLogin />
      </div>
      <div className="mx-auto flex flex-col justify-center">
        <h1 className="mb-3 pb-3 text-3xl font-bold text-TextTertiary">
          Reset Password
        </h1>

        <p className="mb-4 flex gap-x-3 text-sm text-TextTertiary">
          Enter the email associated with your account.
        </p>

        <div className="flex w-auto flex-col gap-y-3 md:w-96 ">
          <TextField
            type="Email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <div className="mt-7 text-sm">
            {loading ? (
              <div className="flex items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end p-2">
                {loaded ? (
                  <div className="animate-bounce">
                    <IconSuccessful
                      width="32"
                      height="32"
                      color="text-TextOnDark"
                    />
                  </div>
                ) : (
                  <div className="flex animate-fade-in items-center gap-1">
                    <DesignSpinner
                      width="32"
                      height="32"
                      bgcolor="text-TextOnDark"
                      color="fill-BtnPrimary-end"
                    />
                    <p className="font-semibold text-TextOnDark">
                      Sending request...
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <Button text="Log In" onClick={sendEmailHandler} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
