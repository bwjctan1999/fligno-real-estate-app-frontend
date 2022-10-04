import IconArrowDown from "../../assets/icons/IconArrowDown";
import DesignSpinner from "../../assets/svgs/DesignSpinner";
import { useLocation } from "react-router-dom";

export default function PaymentMethod() {
  const location = useLocation();

  return (
    <div className="min-h-scree flex flex-col-reverse justify-center bg-BGPrimary lg:flex-row">
      <div className="flex justify-center p-4 pt-16">
        <iframe
          className="m-auto w-96 rounded-xl shadow-md"
          src="https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
          height="660px"
          width="482px"
          title="Onramper widget"
          frameborder="0"
          allow="accelerometer; autoplay; camera; gyroscope; payment"
        ></iframe>
      </div>
      <div className="text flex h-screen flex-col items-center justify-center gap-10 p-4 text-center lg:p-20">
        <h1 className=" text-5xl font-bold text-TextTertiary">
          Awaiting your payment to the address below
        </h1>
        <a className="w-full text-BtnPrimary-end ">
          35bSzXvRKLpHsHMrzb82f617cV4Srnt7hS
        </a>
        <div>
          <DesignSpinner />
          <span class="sr-only">Loading...</span>
        </div>
        <div className="flex flex-col items-center lg:hidden">
          <p>scroll down</p>
          <IconArrowDown width="30" height="30" />
        </div>
      </div>
    </div>
  );
}
