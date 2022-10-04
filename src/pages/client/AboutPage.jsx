import DesignAboutPage from "../../assets/svgs/DesignAboutPage";
import DesignBuyProperty from "../../assets/svgs/DesignBuyProperty";
import DesignRentProperty from "../../assets/svgs/DesignRentProperty";

export default function AboutPage() {
  return (

    <div className="w-full">
      <div className="flex w-full flex-col-reverse items-center justify-center gap-20 bg-BGSecondary py-20 px-4 md:px-24 lg:flex-row lg:px-32">
        <div className="flex flex-col gap-4 lg:w-1/2 ">
          <h1 className="text-Primary flex text-3xl font-bold lg:text-5xl">
            About Real Estate
          </h1>
          <p className="text-justify text-xl font-medium leading-10 text-TextTertiary">
            In search of a home to purchase or rent? You're covered by us! Your
            one-stop shop for all rental homes and real estate listings.
          </p>
        </div>
        <div className="w-full lg:flex lg:w-1/2">
          <DesignAboutPage />
        </div>
      </div>

      <div className="flex min-h-screen flex-col gap-10 py-16 px-4 md:px-24 lg:px-32">
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl font-medium">Our Services</p>
          <h1 className="flex text-4xl font-bold text-TextPrimary">
            Services That We Provide
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-x-20 lg:flex-row">
          <div className="flex flex-col items-center gap-4 lg:w-1/2">
            <div className="w-full lg:p-20">
              <DesignBuyProperty />
            </div>
            <h1 className="text-2xl font-bold text-TextTertiary">
              Buy Property
            </h1>
            <p className=" text-center font-medium text-TextSecondary">
              Provides the chance to find the greatest home sale choices.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 lg:w-1/2">
            <div className="w-full lg:p-20">
              <DesignRentProperty />
            </div>

            <h1 className="text-2xl font-bold text-TextTertiary">
              Rent Property
            </h1>
            <p className="text-center font-medium text-TextSecondary">
              Provides listing for condominiums and houses that are available
              for rent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
