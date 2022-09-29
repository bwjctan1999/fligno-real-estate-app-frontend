import Button from "../general/Button";
export default function PopUp({ 
    text = "please change text parameter",
    onClick,
 }) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="bg-TextSecondary bg-opacity-30 flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-sm p-8 mx-auto bg-TextOnDark rounded-md shadow-lg">
          <div className=" sm:flex">
            <div className="text-center w-full">
             {text}

              <div className="flex items-center gap-5 mt-8 ">
                <Button text="No" 
                onClick={onClick}/>
                <Button text="Yes" 
                onClick={onClick}/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
