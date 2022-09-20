import DesignPageNotFound from "../../assets/svgs/DesignPageNotFound";

export default function FourZeroFour() {
  return (
    <div className=" flex min-h-screen flex-col-reverse justify-evenly bg-BGSecondary px-4 md:p-16 lg:flex-row lg:px-32">
      <div className=" flex h-3/5 items-start lg:h-auto lg:w-1/2 lg:items-center">
        <div className="flex flex-col gap-2 lg:gap-4 lg:pl-20">
          <h1 className="text-center text-9xl font-extrabold text-TextPrimary">
            404
          </h1>
          <p className="pt-1 text-justify text-xl font-medium leading-10 text-TextPrimary">
            The page you are looking for was moved, removed, renamed or might
            never existed. You have found yourself in our little cabin instead.
            Unfortunately, it isn’t for sale.
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center md:px-20 lg:h-auto lg:w-1/2 lg:p-28">
        <DesignPageNotFound />
      </div>
    </div>
  );
}
