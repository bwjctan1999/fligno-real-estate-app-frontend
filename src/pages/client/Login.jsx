import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DesignLogin from "../../assets/svgs/DesignLogin";
import Button from "../../components/general/Button";
import TextField from "../../components/general/Textfield";
import DesignSpinner from "../../assets/svgs/DesignSpinner";
import axios from "axios";
import IconSuccessful from "../../assets/icons/IconSuccessful";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValidator, setEmailValidator] = useState("");
  const [passwordValidator, setPasswordValidator] = useState("");

  const navigate = useNavigate();

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

      setLoaded(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);

      switch (response.data.data.user_role[0]) {
        case "admin":
          navigate("/admin");
          window.location.reload();
          break;
        case "agent":
          if (response.data.data.subscribe) {
            navigate("/agent");
          } else {
            navigate("/agent/subscription");
          }
          window.location.reload();
          break;
        case "client":
          navigate("/");
          window.location.reload();
          break;
      }
    } catch (error) {
      setEmailValidator("Wrong Email or Password");
      setPasswordValidator(" ");
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen flex-row flex-wrap-reverse justify-center bg-BGSecondary">
      <div className="mx-auto flex flex-col justify-center">
        <h1 className="mb-2 pb-3 text-3xl font-bold text-TextTertiary">
          Log In
        </h1>

        <p className="mb-4 flex gap-x-3 text-sm text-TextTertiary">
          Not Registered?
          <a
            onClick={() => navigate("/Login")}
            className="text-BtnPrimary-start hover:underline"
          >
            Sign Up
          </a>
        </p>
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
      <div className="hidden w-6/12 items-center  justify-center lg:flex">
        <DesignLogin />
      </div>
    </div>
  );
}
