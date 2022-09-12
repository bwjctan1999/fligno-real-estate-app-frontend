import DesignAboutPage from "../../assets/svgs/DesignAboutPage";
import BuyProperty from "../../assets/imgs/BuyProperty.png";
import RentProperty from "../../assets/imgs/RentProperty.png";

export default function AboutPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center">
        <div className="flex h-1/4 w-full items-center justify-center gap-20 bg-BGSecondary  md:flex ">
          <div className="flex flex-col lg:w-2/4 ">
            <h1 className="mb-5 flex text-4xl font-bold text-TextTertiary">
              About Real Estate
            </h1>
            <p className="text-justify leading-9">
              In search of a home to purchase or rent? You're covered by us!
              Your one-stop shop for all rental homes and real estate listings.
            </p>
          </div>
          <div className="hidden md:h-1/3 md:w-1/3  lg:flex">
            <DesignAboutPage />
          </div>
        </div>

        <div className="flex flex-col items-center py-20 md:flex">
          <p>Our Services</p>
          <h1 className="mb-8 flex text-4xl font-bold text-TextTertiary">
            Services That We Provide{" "}
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-y-10 sm:flex-wrap md:flex-wrap lg:flex-row">
          <div className="flex w-1/2 flex-col items-center">
            <div className="mb-10 h-5/6">
              <img src={BuyProperty} />
            </div>
            <h1 className="text-xl font-bold text-TextTertiary">
              Buy Property
            </h1>
            <p className=" text-center">
              Provides the chance to find the greatest home sale choices.
            </p>
          </div>

          <div className="flex w-1/2 flex-col items-center">
            <div className="mb-10 h-5/6">
              <img src={RentProperty} />
            </div>
            <h1 className="text-xl font-bold text-TextTertiary">
              Rent Property
            </h1>
            <p className=" text-center">
              Provides listing for condominiums and houses that are available
              for rent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
