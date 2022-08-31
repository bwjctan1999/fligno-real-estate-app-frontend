import DesignLogin from "../../assets/svgs/DesignLogin";
import Button from "../../components/Button";
import TextField from "../../components/Textfield";

export default function Login() {
  return (
    <div className="flex flex-row flex-wrap-reverse  gap-y-16  h-screen">
      <div className="flex flex-col mt-40 mx-auto">
        <h1 className="mb-2 pb-3 font-bold text-3xl text-TextTertiary">
          Log In
        </h1>

        <p className="flex gap-x-3 text-sm mb-4 text-TextTertiary">
          Not Registered?
          <a
            onClick={() => navigate("/Login")}
            className="text-BtnPrimary-start hover:underline"
          >
            Sign Up
          </a>
        </p>
        <div className="flex flex-col gap-y-3 w-auto ">
          <TextField type="text" placeholder="Email" />

          <TextField type="Password" placeholder="Password" />

          <div className="flex flex-wrap gap-x-4  gap-y-3">
            <input type="checkbox" />
            <label class="text-sm "> Remember Me</label>
            <div className="flex flex-row gap-x-12 gap-y-3">   
              <a class="text-sm text-BtnPrimary-start hover:underline "> Forgot Password?</a>
            </div>
          </div>

          <div className="text-sm mt-7">
            <Button text="Log In" />
          </div>
        </div>
      </div>
      <div className="justify-center items-center w-6/12  bg-BGSecondary hidden lg:flex">
        <DesignLogin />
      </div>
    </div>
  );
}