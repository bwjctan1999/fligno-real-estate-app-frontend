import DesignLandingPage from "../../assets/svgs/DesignLandingPage";
import Button from "../../components/general/Button";

export default function LandingPage() {
  return (
    <div className=" flex min-h-screen flex-col-reverse justify-evenly bg-BGSecondary px-4 md:p-16 lg:flex-row lg:px-32">
      <div className=" flex h-3/5 items-start lg:h-auto lg:items-center selection:lg:w-1/2">
        <div className="flex flex-col gap-3 lg:gap-10">
          <p className="text-xl font-bold text-TextPrimary lg:text-2xl">
            A new way to find propertiess
          </p>
          <h1 className="text-3xl font-extrabold text-TextPrimary lg:text-5xl">
            Find your Most <br></br> Suitable Property
          </h1>
          <p className="pt-1 text-xl font-medium text-TextPrimary">
            In search of a home to purchase or rent? You're covered by us! Your
            one-stop shop for all rental homes and real estate listings
          </p>
          <div className="max-w-md">
            <Button text="Discover what awaits you at Turnkey" />
          </div>
        </div>
      </div>

      <div className="lg:w-4/ flex h-2/5 items-center justify-center lg:h-auto">
        <DesignLandingPage />
      </div>
    </div>
  );
}
