import { PostEmail } from "../../../api/ApiEmail";
import axios from "axios";
import { useState } from "react";
import DesignSpinner from "../../../assets/svgs/DesignSpinner";
import IconSuccessful from "../../../assets/icons/IconSuccessful";

import VerificationSuccess from "./VerificationSuccess";
import VerificationFailed from "./VerificationFailed";
import TextField from "../../../components/general/Textfield";
import Button from "../../../components/general/Button";
import PopUpOkay from "../../../components/popups/PopUpOkay";
import { useNavigate } from "react-router-dom";

export default function EmailVerification() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValidator, setEmailValidator] = useState("");
  const [passwordValidator, setPasswordValidator] = useState("");
  const navigate = useNavigate();

  const handleOkay = () => {
    if (success) {
      if (localStorage.getItem("user_role") === "agent") {
        navigate("/agent/subscription");
      } else {
        navigate("/");
      }
    } else {
      setShowPopUp(false);
    }
    window.location.reload();
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setLoaded(false);
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("user_id", response.data.data.user_id);
      localStorage.setItem("user_role", response.data.data.user_role[0]);
      localStorage.setItem("token", response.data.data.Token);
      localStorage.setItem("user_id", response.data.data.user_id);
      verifyAccount(response.data.data.Token);

      setLoaded(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    } catch (error) {
      setEmailValidator("Wrong Email or Password");
      setPasswordValidator(" ");
      setLoading(false);
      console.log(error);
    }
  };

  const verifyAccount = async (bearerToken) => {
    const emailVerifier = axios.create({
      baseURL: "http://127.0.0.1:8000/api",
      timeout: 1000,
      headers: { Authorization: "Bearer " + bearerToken },
    });

    try {
      const url = window.location.href;
      const token = url.slice(35);
      const response = await emailVerifier.post("/verify", token);
      setSuccess(true);
      setShowPopUp(true);
    } catch (error) {
      setSuccess(false);
      setShowPopUp(true);
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-BGSecondary">
      <PopUpOkay
        text={success ? <VerificationSuccess /> : <VerificationFailed />}
        state={showPopUp}
        okayFunction={() => handleOkay()}
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="mb-2 pb-3 text-3xl font-bold text-TextTertiary">
          Please Login to Verify Your Account
        </h1>
        <div className="mx-auto flex flex-col justify-center">
          <div className="flex w-auto flex-col gap-y-3 md:w-96 ">
            <TextField
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailValidator("");
                setPasswordValidator("");
              }}
              invalidError={emailValidator}
            />

            <TextField
              type="Password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                setEmailValidator("");
                setPasswordValidator("");
              }}
              invalidError={passwordValidator}
            />

            <div className="flex flex-wrap gap-x-4 gap-y-3">
              <input type="checkbox" />
              <label className="text-sm "> Remember Me</label>
              <div className="flex flex-row gap-x-12 gap-y-3">
                <button
                  className="text-sm text-BtnPrimary-start hover:underline"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password?
                </button>
              </div>
            </div>

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
                <Button text="Log In" onClick={handleLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
