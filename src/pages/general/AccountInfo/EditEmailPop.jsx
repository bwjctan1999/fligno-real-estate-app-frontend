import Button from "../../../components/general/Button";
import Textfield from "../../../components/general/Textfield";
export default function EditEmailPop({
  text = "Edit Email",
  showEditEmailPop,
  onClick
}) {
  return showEditEmailPop ?(
    <div className="fixed inset-0 z-20 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div className="relative mx-auto w-full max-w-sm rounded-md bg-TextOnDark p-8 shadow-lg">
          <div className=" sm:flex">
            <div className="w-full text-TextPrimary">
                <div className="text-lg text-center mb-4 font-bold">
                {text}
                </div>
              

           <div className="flex flex-col gap-3 ">
           <div className="flex flex-col gap-3">
            <label className="font-semibold">Email</label>
              <Textfield
                type="email"
              />
              </div>
           
           </div>
              
             

              <div className="mt-8 flex items-center gap-5 ">
                <Button    text="Cancel"
                  bgcolor="bg-BGPrimary"
                  textcolor="text-TextSecondary"
                  custom=" shadow-border shadow-TextSecondary opacity-60" 
                  onClick={onClick}  />
                <Button text="Save"
                onClick={onClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

