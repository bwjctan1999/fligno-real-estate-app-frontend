import DesignSignUp from "../../assets/svgs/DesignSignUp";
import Button from "../../components/general/Button";
import TextField from "../../components/general/Textfield";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const [p_number, setNum] = useState("");
  const [user_type, setAsType] = useState("Client");

  const PostData = () => {
    axios.post("http://localhost:8000/api/register", {
      email,
      password,
      full_name,
      p_number,
      user_type,
    });
  };

  return (
    <div className="flex h-screen flex-row  flex-wrap-reverse  items-center gap-y-16">
      <div className="mx-auto mt-14 flex flex-col">
        <h1 className="mb-2 pb-3 text-3xl font-bold text-TextTertiary">
          Sign Up
        </h1>

        <p className="mb-4 flex gap-x-3 text-sm text-TextTertiary">
          Already A Member?
          <a
            onClick={() => navigate("/Login")}
            className="text-BtnPrimary-start hover:underline"
          >
            Login
          </a>
        </p>
        <div className="flex w-auto flex-col gap-y-3 md:w-96 ">
          <TextField
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <TextField
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />

          <TextField
            type="text"
            placeholder="Mobile Number"
            onChange={(e) => setNum(e.target.value)}
          />

          <div className="flex flex-wrap gap-x-16  gap-y-3">
            <label class="text-sm "> Sign up as:</label>
            <div className="flex flex-row gap-x-4 gap-y-3">
              <input type="radio" name="radio" />
              <label class="text-sm"> Client</label>

              <input type="radio" name="radio" />
              <label class="text-sm"> Agent</label>
            </div>
          </div>

          <div className="mt-7 text-sm">
            <Button text="Sign Up" onClick={PostData} />
          </div>
        </div>
      </div>
      <div className="hidden h-screen w-6/12  items-center justify-center bg-BtnPrimary-end lg:flex">
        <DesignSignUp />
      </div>
    </div>
  );
}
