import IconSuccessful from "../../../assets/icons/IconSuccessful";
import Button from "../../general/Button";

export default function SuccessfulResult({ text, okayFunction }) {
  return (
    <div className="mt-3 text-center">
      <div className="bg-purple-100 mx-auto flex h-24 w-24 items-center justify-center rounded-full">
        <IconSuccessful />
      </div>

      <h3 className="text-2xl font-bold leading-10 text-BtnQuanary-end">
        Successfull
      </h3>
      <div className="mt-4 py-3 ">
        <p className="text-gray-500">{text}</p>
      </div>
      <div className="items-center pt-8 pb-4">
        <Button
          text="Okay"
          bgcolor="bg-BtnQuanary-end"
          onClick={okayFunction}
        />
      </div>
    </div>
  );
}
