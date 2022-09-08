import DesignSignUp from "../../assets/svgs/DesignSignUp";
import Button from "../../components/general/Button";
import TextField from "../../components/general/Textfield";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    p_number: "",
    user_type: "",
  });

  const setValue = (e, name) => {
    setFormValues((oldValues) => ({
      ...oldValues,
      [name]: e.target.value,
    }));
  };

  const saveFormData = async () => {
    await axios
      .post("http://localhost:8000/api/register", formValues)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await saveFormData();
      alert("Check your email for confirmation");
    } catch (e) {
      alert(`Sign Up Failed! ${e.message}`);
    }
  };

  return (
    <div className="flex h-screen flex-row flex-wrap-reverse items-center gap-y-16">
      <div className="mx-auto flex flex-col">
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

        <form onSubmit={onSubmit}>
          <div className="flex w-auto flex-col gap-y-3 md:w-96 ">
            <TextField
              type="email"
              placeholder="Email"
              onChange={(e) => setValue(e, "email")}
              required="true"
            />

            <TextField
              type="password"
              placeholder="Password"
              onChange={(e) => setValue(e, "password")}
              required="true"
            />

            <TextField
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required="true"
            />

            <TextField
              type="text"
              placeholder="First Name"
              onChange={(e) => setValue(e, "first_name")}
              required="true"
            />

            <TextField
              type="text"
              placeholder="Last Name"
              onChange={(e) => setValue(e, "last_name")}
              required="true"
            />

            <TextField
              type="number"
              placeholder="Mobile Number"
              onChange={(e) => setValue(e, "p_number")}
              required="true"
            />

            <div className="flex flex-wrap gap-x-16  gap-y-3">
              <label> Sign up as:</label>
              <div className="flex flex-row gap-x-4 gap-y-3">
                <input
                  type="radio"
                  name="radio"
                  value="client"
                  onChange={(e) => setValue(e, "user_type")}
                  required="true"
                />
                <label> Client</label>

                <input
                  type="radio"
                  name="radio"
                  value="agent"
                  onChange={(e) => setValue(e, "user_type")}
                />
                <label> Agent</label>
              </div>
            </div>

            <div className="mt-7 text-sm">
              <Button type="submit" text="Sign Up" />
            </div>
          </div>
        </form>
      </div>
      <div className="hidden h-screen w-6/12  items-center justify-center bg-BtnPrimary-end lg:flex">
        <DesignSignUp />
      </div>
    </div>
  );
}
