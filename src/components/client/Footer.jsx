import IconLogo from "../../assets/icons/IconLogo";
import IconFb from "../../assets/icons/IconFb.png";
import IconTwitter from "../../assets/icons/IconTwitter.png";
import IconInsta from "../../assets/icons/IconInsta.png";
export default function Footer({}) {
  return (
    <footer className="bg-BGSecondary px-10 pt-10 pb-4 w-full">
      <div className="mb-10 grid gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
        <div>
          <div className="mb-3 flex gap-4">
            <IconLogo />
            <label className="text-2xl font-black text-BtnPrimary-end">
              Turnkey
            </label>
          </div>
          <div>
            <p className=" text-sm leading-8">
              Properties are most budget friendly so you have are find
              opportunity is main responsibility to clients
            </p>
          </div>
        </div>

        <div >
          <div className="mb-4">
            <label className="text-sm font-black text-BtnPrimary-end">
              Information
            </label>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span>About us</span>
            <span>Properties</span>
            <span>Payment</span>
          </div>
        </div>

        <div >
          <div className="mb-4">
            <label className="text-sm font-black text-BtnPrimary-end">
              Support
            </label>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <span>Terms and Conditions</span>
            <span>Our Agents</span>
            <span>Help</span>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <label className="text-sm font-black text-BtnPrimary-end">
              Address
            </label>
          </div>
          <p className=" text-sm leading-8">
            401 4F CKY Bldg, RN Abejuela St, Brgy 5, Cagayan de Oro
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="dark:text-gray-400 block  text-xs">
            <a className="text-BtnPrimary-end  hover:underline"> © FordaTeam</a>
            . All Rights Reserved - Privacy Policy
          </span>
        </div>

        <div className="flex gap-3">
          <div className="w-1/5">
            {" "}
            <img src={IconFb} alt="" />{" "}
          </div>
          <div className="w-1/5">
            {" "}
            <img src={IconTwitter} alt="" />{" "}
          </div>
          <div className="w-1/5">
            {" "}
            <img src={IconInsta} alt="" />{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}
