import { useState, useEffect } from "react";

import Button from "../../components/general/Button";
import TextField from "../../components/general/Textfield";

import DesignLogin from "../../assets/svgs/DesignLogin";
import DesignSpinner from "../../assets/svgs/DesignSpinner";
import IconSuccessful from "../../assets/icons/IconSuccessful";

import { ChangePassword } from "../../api/ApiPassword";

export default function ForgetPassPage({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");

  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const url = window.location.href.split("=");
    const token = url[url.length - 1];

    setEmail(localStorage.getItem("reset_pass_email"));
    setToken(token);
  }, []);

  const resetPasswordHandler = async () => {
    setLoading(true);
    const api_request = await ChangePassword({
      email: email,
      password: password,
      password_confirmation: confirmPassword,
      token: token,
    });

    if (!api_request.error) {
      setLoaded(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
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
        <h1 className="mb-8 pb-3 text-3xl font-bold text-TextTertiary">
          Create New Password
        </h1>

        <div className="flex w-auto flex-col gap-y-3 md:w-96 ">
          <TextField
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

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
                      Logging you in...
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <Button text="Reset Password" onClick={resetPasswordHandler} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
