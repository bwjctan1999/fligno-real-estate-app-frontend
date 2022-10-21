import { useNavigate } from "react-router-dom";
import { RegisterAccount } from "../../api/ApiSignup";
import DesignSignUp from "../../assets/svgs/DesignSignUp";
import DesignSpinner from "../../assets/svgs/DesignSpinner";
import IconSuccessful from "../../assets/icons/IconSuccessful";

import Button from "../../components/general/Button";
import TextField from "../../components/general/Textfield";

import { useState } from "react";
import {
  ValidEmail,
  ValidEmpty,
  ValidName,
  ValidMobileNumber,
} from "../../scripts/Validations";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    user_type: "",
  });

  const [validations, setValidations] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    confirm_password: "",
    phone_number: "",
    user_type: "",
  });

  const Validation = () => {
    const tempValidations = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      confirm_password: "",
      phone_number: "",
      user_type: "",
    };

    if (!ValidEmail(formValues.email)) {
      tempValidations.email = "Invalid Email";
    }
    if (!ValidName(formValues.first_name)) {
      tempValidations.first_name = "Letters only";
    }
    if (!ValidName(formValues.last_name)) {
      tempValidations.last_name = "Letters only";
    }
    if (!ValidMobileNumber(formValues.phone_number)) {
      tempValidations.phone_number = "Invalid Number";
    }

    if (confirmPassword !== formValues.password) {
      tempValidations.confirm_password = "Confirm password does not match";
    }

    if (!ValidEmpty(formValues.email)) {
      tempValidations.email = "Required";
    }
    if (!ValidEmpty(formValues.password)) {
      tempValidations.password = "Required";
    }
    if (!ValidEmpty(confirmPassword)) {
      tempValidations.confirm_password = "Required";
    }
    if (!ValidEmpty(formValues.first_name)) {
      tempValidations.first_name = "Required";
    }
    if (!ValidEmpty(formValues.last_name)) {
      tempValidations.last_name = "Required";
    }
    if (!ValidEmpty(formValues.phone_number)) {
      tempValidations.phone_number = "Required";
    }
    if (formValues.user_type === "") {
      tempValidations.user_type = "Required";
    }

    setValidations(tempValidations);

    const pass = Object.values(tempValidations).every((value) => value === "");

    if (pass) saveFormData();
  };

  const setValue = (e, name) => {
    setFormValues((oldValues) => ({
      ...oldValues,
      [name]: e.target.value,
    }));
  };

  const saveFormData = async () => {
    setLoading(true);
    setLoaded(false);
    const api_request = await RegisterAccount(formValues);

    if (!api_request.error) {
      setLoaded(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
      navigate("/verification");
    } else {
      alert(api_request.error);
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen flex-row flex-wrap-reverse items-center gap-y-16 bg-BGSecondary">
      <div className="mx-auto flex w-full flex-col px-4 lg:w-1/4">
        <h1 className="mb-2 pb-3 text-3xl font-bold text-TextTertiary">
          Sign Up
        </h1>

        <p className="mb-4 flex gap-x-3 text-TextTertiary">
          Already A Member?
          <a
            onClick={() => navigate("/Login")}
            className="text-BtnPrimary-start hover:underline"
          >
            Login
          </a>
        </p>

        <div className="flex w-full flex-col gap-y-3  ">
          <TextField
            type="email"
            placeholder="Email"
            onChange={(e) => setValue(e, "email")}
            invalidError={validations.email}
          />

          <TextField
            type="password"
            placeholder="Password"
            onChange={(e) => setValue(e, "password")}
            invalidError={validations.password}
          />

          <TextField
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            invalidError={validations.confirm_password}
          />

          <TextField
            type="text"
            placeholder="First Name"
            onChange={(e) => setValue(e, "first_name")}
            invalidError={validations.first_name}
          />

          <TextField
            type="text"
            placeholder="Last Name"
            onChange={(e) => setValue(e, "last_name")}
            invalidError={validations.last_name}
          />

          <TextField
            type="number"
            placeholder="Mobile Number"
            onChange={(e) => setValue(e, "phone_number")}
            invalidError={validations.phone_number}
          />

          <div className="flex flex-wrap gap-x-16 gap-y-3">
            <label> Sign up as:</label>
            <div className="flex flex-row gap-x-4 gap-y-3">
              <input
                type="radio"
                name="radio"
                value="3"
                onChange={(e) => setValue(e, "user_type")}
              />
              <label> Client</label>

              <input
                type="radio"
                name="radio"
                value="2"
                onChange={(e) => setValue(e, "user_type")}
              />
              <label> Agent</label>
            </div>
            {validations.user_type === "" ? null : (
              <p className="text-BtnTertiary-end ">Please Select One</p>
            )}
          </div>

          <div className="mt-7 text-sm">
            {loading ? (
              <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end p-2">
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
                      Signing you up...
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <Button onClick={Validation} text="Sign Up" />
            )}
          </div>
        </div>
      </div>
      <div className="hidden h-screen w-1/2 items-center justify-center bg-BtnPrimary-end lg:flex">
        <DesignSignUp />
      </div>
    </div>
  );
}
