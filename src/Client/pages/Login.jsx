import DesignLogin from "../../assets/svgs/DesignLogin";
import Button from "../../components/Button";
import TextField from "../../components/Textfield";

export default function Login() {
  return (
    <div className="flex h-screen flex-row flex-wrap-reverse justify-center ">
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
          <TextField type="text" placeholder="Email" />

          <TextField type="Password" placeholder="Password" />

          <div className="flex flex-wrap gap-x-4  gap-y-3">
            <input type="checkbox" />
            <label class="text-sm "> Remember Me</label>
            <div className="flex flex-row gap-x-12 gap-y-3">
              <a class="text-sm text-BtnPrimary-start hover:underline ">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="mt-7 text-sm">
            <Button text="Log In" />
          </div>
        </div>
      </div>
      <div className="hidden w-6/12 items-center  justify-center lg:flex">
        <DesignLogin />
      </div>
    </div>
  );
}
