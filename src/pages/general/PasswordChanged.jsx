import { useNavigate } from "react-router-dom";
import DesignForgotPass from "../../assets/svgs/DesignForgotPass";
import Button from "../../components/general/Button";

export default function PasswordChanged({}) {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-row flex-wrap-reverse justify-center bg-BGSecondary">
      <div className="ml-14 mt-20 hidden w-6/12 items-center  justify-center lg:flex">
        <DesignForgotPass />
      </div>
      <div className="mx-auto flex flex-col justify-center">
        <h1 className="mb-3 pb-3 text-center text-3xl font-bold text-TextTertiary">
          Successful Password Reset!
        </h1>

        <p className="mb-4 flex gap-x-3 text-lg text-TextTertiary">
          You can now use your new password to login to your account!
        </p>

        <div className="mt-5 text-sm">
          <Button text="Log In" onClick={() => navigate("/login")} />
        </div>
      </div>
    </div>
  );
}
