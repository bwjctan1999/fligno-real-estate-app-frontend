import Button from "../general/Button";
import AgentPic from "../../assets/imgs/AgentPic.png";
export default function PopUpContactUs({ 
    onClick,
 }) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="bg-TextSecondary bg-opacity-30 flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-md p-8 mx-auto bg-TextOnDark rounded-md shadow-lg">
          <div className=" sm:flex">
            <div className="text-TextTertiary text-center w-full">
           <h1 className="font-bold text-TextTertiary">Your Contact Information has been Sent to:</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-6 rounded-md shadow-md p-3 ">

            <div className="">
                <img src={AgentPic} />
            </div>

            <div className="text-sm flex flex-col gap-2 text-left m-6">
                <div>
                    <h1 className="font-bold">Agent Name</h1>
                    <span>Forda Boss</span>
                </div>
                <div>
                    <h1 className="font-bold">Email</h1>
                    <span>example@email.com</span>
                </div>
                <div>
                    <h1 className="font-bold">Contact Number</h1>
                    <span>+73323424513</span>
                </div>
            </div>
           </div>
           <h1 className="font-bold text-sm text-TextTertiary">Please wait for the agent to reach out</h1>

              <div className="flex items-center gap-5 mt-4 ">
               
                <Button text="Close" 
                onClick={onClick}/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
