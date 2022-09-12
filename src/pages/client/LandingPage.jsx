import DesignLandingPage from "../../assets/svgs/DesignLandingPage";
import Button from "../../components/general/Button";

export default function LandingPage() {
  return (
    <div className=" flex h-screen flex-row flex-wrap-reverse justify-center bg-BGSecondary p-3 ">
      <div className="mx-auto flex flex-col justify-center">
        <div className="flex w-auto flex-col gap-y-3 md:w-96">
          <p className="text-1xl pl-2 pb-2 font-bold text-TextPrimary">
            A new way to find properties
          </p>
          <h1 className="text-4xl font-extrabold text-TextPrimary  md:text-4xl">
            Find your Most
          </h1>
          <h1 className="pb-2 text-4xl font-extrabold  text-TextPrimary md:text-4xl">
            Suitable Property
          </h1>
          <p className="pt-1 text-xs font-medium text-TextPrimary">
            In search of a home to purchase or rent? You're covered by us!
          </p>
          <p className="pt-1 pb-3 text-xs font-medium text-TextPrimary">
            Your one-stop shop for all rental homes and real estate listings
          </p>

          <div className="mt-2 text-sm ">
            <Button text="Discover what awaits you at Turnkey" />
          </div>
        </div>
      </div>
      <div className="ml-5 mr-10 hidden  w-6/12 items-center justify-center lg:flex">
        <DesignLandingPage />
      </div>
    </div>
  );
}
