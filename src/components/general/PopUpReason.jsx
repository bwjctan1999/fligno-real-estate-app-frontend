import Button from "./Button";
import TextArea from "./TextArea";
export default function PopUpReason({
  onClick,
}) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div className="relative mx-auto w-full max-w-sm rounded-md bg-TextOnDark p-7 shadow-lg">
          <div className=" sm:flex">
            <div className="w-full text-center">
            <label className="flex  font-black text-TextTertiary" for="desc">
              Reason
            </label>
            <TextArea id="desc" placeholder="Reason"/>

              <div className="mt-4 flex items-center gap-5 ">
                <Button text="Cancel" onClick={onClick} />
                <Button text="Submit" onClick={onClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
