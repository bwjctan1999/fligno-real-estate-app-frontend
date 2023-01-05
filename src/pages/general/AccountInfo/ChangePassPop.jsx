import Button from "../../../components/general/Button";
import Textfield from "../../../components/general/Textfield";
export default function ChangePassPop({ onClick, showChangePassPop, text = "Change Password" }) {
  return showChangePassPop ? (
    <div className="fixed inset-0 z-20 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div className="relative mx-auto w-full max-w-sm rounded-md bg-TextOnDark p-8 shadow-lg">
          <div className=" sm:flex">
            <div className="w-full text-TextPrimary">
              <div className="mb-6 text-center text-lg font-bold">{text}</div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Current Password</label>
                  <Textfield />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">New Password</label>
                  <Textfield />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Confirm Password</label>
                  <Textfield />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-5 ">
                <Button
                  onClick={onClick}
                  text="Cancel"
                  bgcolor="bg-BGPrimary"
                  textcolor="text-TextSecondary"
                  custom=" shadow-border shadow-TextSecondary opacity-80"
                />
                <Button text="Save" 
                onClick={onClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) :null ; 
}
