import DesignError from "../../assets/svgs/DesignError.svg";



export default function FourZeroFour() {
  return (
    <div className=" flex min-h-screen flex-col-reverse justify-evenly bg-BGSecondary px-4 md:p-16 lg:flex-row lg:px-32">
      <div className=" flex h-3/5 items-start lg:h-auto lg:items-center selection:lg:w-1/2">
        <div className="flex flex-col gap-2 lg:gap-4 ">
        
          <h1 className="text-3xl font-extrabold text-TextPrimary lg:text-6xl ">
          404
          </h1>
          <p className="pt-1 font-medium text-TextPrimary leading-10">
          The page you are looking for was moved, removed, renamed or might never existed.  You have found yourself in our little cabin instead. Unfortunately, it isn’t for sale.
          </p>
          
        </div>
      </div>

      <div className="lg:w-4/ flex h-2/5 items-center justify-center lg:h-auto mx-10">
      <img src={DesignError} className="max-w-xs" />
      </div>
    </div>
  );
}