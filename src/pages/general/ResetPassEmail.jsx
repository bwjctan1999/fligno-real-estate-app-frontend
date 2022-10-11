import DesignLogin from "../../assets/svgs/DesignLogin";
import Button from "../../components/general/Button";
import TextField from "../../components/general/Textfield";

export default function ResetPassEmail({}) {
  return (
    <div className="flex h-screen flex-row flex-wrap-reverse justify-center bg-BGSecondary">
      <div className="ml-20 hidden w-6/12 items-center  justify-center lg:flex">
        <DesignLogin />
      </div>
      <div className="mx-auto flex flex-col justify-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="m-3 h-20 w-20 mb-8 mx-auto flex flex-col justify-center"
        fill="#396AFC"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 490 512.2"
      >
        <path d="M27.45 168.79V14.44C27.45 6.47 33.92 0 41.89 0h286.79c4.43 0 8.4 2.01 11.05 5.16l118.63 122.5c2.73 2.8 4.08 6.42 4.08 10.05 0 10.36.01 20.73.01 31.11 1.25-.27 2.53-.39 3.82-.39 6.38 0 11.91 3.28 16 7.96 4.44 5.04 7.73 12.95 7.73 19.55v289.83c0 7.27-2.98 13.9-7.76 18.67-4.78 4.78-11.4 7.76-18.68 7.76H26.44c-7.28 0-13.9-2.98-18.68-7.76C2.98 499.67 0 493.04 0 485.77V195.94c0-6.64 3.41-14.71 7.96-19.81 1.72-1.92 3.73-3.62 5.9-4.9l.14-.07c2.92-1.72 6.18-2.75 9.74-2.75 1.24 0 2.48.13 3.71.38zm430.1 314.52L300.41 345.6l-48.38 42.25c-5.39 4.72-13.59 4.79-19.07-.11l-45.58-40.73-155.52 136.3h425.69zM322.27 326.49l138.84 121.67V205.2l-.54.47c-1.59 2.79-4.1 4.99-7.1 6.2l-131.2 114.62zM28.89 447.64 165.76 327.7 28.89 205.41v242.23zm404.7-256.62V156.8H313.55c-7.97 0-14.44-6.47-14.44-14.44V28.89H56.33v162.48l140.16 125.21 1.1.99 45.07 40.26 190.93-166.81zm-15.09-63.11-90.51-93.46v93.46h90.51z"/>
      </svg>
        <h1 className="mb-3 text-center pb-3 text-3xl font-bold text-TextTertiary">
          Check your email
        </h1>

        <p className="text-center flex gap-x-3 text-lg text-TextTertiary">
          We have sent a password recover instructions to your email.
          </p>

        </div>
      </div>
    
  );
}