import DesignSignUp from "../../assets/svgs/DesignSignUp";
import Button from "../../components/Button";
import TextField from "../../components/Textfield";

export default function SignUp() {
  return (
    <div className="flex flex-row flex-wrap-reverse  gap-y-16  h-screen">
      <div className="flex flex-col mt-14 mx-auto">
        <h1 className="mb-2 pb-3 font-bold text-3xl text-TextTertiary">
          Sign Up
        </h1>

        <p className="flex gap-x-3 text-sm mb-4 text-TextTertiary">
          Already A Member?
          <a
            onClick={() => navigate("/Login")}
            className="text-BtnPrimary-start hover:underline"
          >
            Login
          </a>
        </p>
        <div className="flex flex-col gap-y-3 w-auto ">
          <TextField type="text" placeholder="Email" />

          <TextField type="Password" placeholder="Password" />

          <TextField type="Password" placeholder="Confirm Password" />

          <TextField type="text" placeholder="Full Name" />

          <TextField type="text" placeholder="Mobile Number" />

          <div className="flex flex-wrap gap-x-16  gap-y-3">
            <label class="text-sm "> Sign up as:</label>
            <div className="flex flex-row gap-x-4 gap-y-3">
              <input type="radio" />
              <label class="text-sm"> Client</label>

              <input type="radio" />
              <label class="text-sm"> Agent</label>
            </div>
          </div>

          <div className="text-sm mt-7">
            <Button text="Sign Up" />
          </div>
        </div>
      </div>
      <div className="justify-center items-center w-6/12  bg-BtnPrimary-end hidden lg:flex">
        <DesignSignUp />
      </div>
    </div>
  );
}
