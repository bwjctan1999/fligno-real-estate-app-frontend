import Button from "../general/Button";
export default function PopUp({
  text = "please change text parameter",
  cancelFunction,
  okayFunction,
  state,
  setState,
}) {
  return state ? (
    <div className="fixed inset-0 z-20 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div className="relative mx-auto w-full max-w-sm rounded-md bg-TextOnDark p-8 shadow-lg">
          <div className=" sm:flex">
            <div className="w-full text-center">
              {text}

              <div className="mt-8 flex items-center gap-5 ">
                <Button text="No" onClick={cancelFunction} />
                <Button text="Yes" onClick={okayFunction} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
