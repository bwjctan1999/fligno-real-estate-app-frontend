import Button from "../../../components/general/Button";
import Textfield from "../../../components/general/Textfield";
export default function EditNamePop({ onClick, showEditNamePop, text = "Edit Name" }) {
  return showEditNamePop ? (
    <div className="fixed inset-0 z-20 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div className="relative mx-auto w-full max-w-sm rounded-md bg-TextOnDark p-8 shadow-lg">
          <div className=" sm:flex">
            <div className="w-full text-TextPrimary">
              <div className="mb-4 text-center text-lg font-bold">{text}</div>

              <div className="flex flex-col gap-3">
                <div>
                  <label className="font-semibold">First Name</label>
                  <Textfield />
                </div>
                <div>
                  <label className="font-semibold">Last Name</label>
                  <Textfield />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-5 ">
                <Button
                  onClick={onClick}
                  text="Cancel"
                  bgcolor="bg-BGPrimary"
                  textcolor="text-TextSecondary"
                  custom=" shadow-border shadow-TextSecondary opacity-60"
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
  )  : null;
}
