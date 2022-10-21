import Button from "../general/Button";
import AgentPic from "../../assets/imgs/AgentPic.png";

export default function PopUpContactUs({
  onClick,
  showPopUp,
  name,
  email,
  number,
}) {
  return showPopUp ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div className="relative mx-auto w-full max-w-md rounded-md bg-TextOnDark p-8 shadow-lg">
          <div className=" sm:flex">
            <div className="w-full text-center text-TextTertiary">
              <h1 className="font-bold text-TextTertiary">
                Your Contact Information has been Sent to:
              </h1>
              <div className="my-6 grid grid-cols-1 rounded-md p-3 shadow-md md:grid-cols-2 lg:grid-cols-2 ">
                <div className="">
                  <img src={AgentPic} />
                </div>

                <div className="m-6 flex flex-col gap-2 text-left text-sm">
                  <div>
                    <h1 className="font-bold">Agent Name</h1>
                    <span>{name}</span>
                  </div>
                  <div>
                    <h1 className="font-bold">Email</h1>
                    <span>{email}</span>
                  </div>
                  <div>
                    <h1 className="font-bold">Contact Number</h1>
                    <span>{number}</span>
                  </div>
                </div>
              </div>
              <h1 className="text-sm font-bold text-TextTertiary">
                You may contact the agent or wait for him/her to contact you
                instead
              </h1>

              <div className="mt-4 flex items-center gap-5 ">
                <Button text="Close" onClick={onClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
