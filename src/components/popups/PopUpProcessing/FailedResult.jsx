import IconFailed from "../../../assets/icons/IconFailed";
import Button from "../../general/Button";
export default function FailedResult({ okayFunction }) {
  return (
    <div class="mt-3 text-center">
      <div class="bg-purple-100 mx-auto flex h-24 w-24 items-center justify-center rounded-full">
        <IconFailed />
      </div>

      <h3 class="mt-6 text-2xl font-bold leading-10 text-BtnTertiary-end">
        Whoops!
      </h3>
      <div class="mt-4 py-3 ">
        <p class="text-gray-500 text-lg">
          Oops. Something went wrong, please try again
        </p>
      </div>
      <div class="items-center py-8">
        <Button
          text="Close"
          onClick={okayFunction}
          bgcolor="bg-BtnTertiary-start bg-gradient-to-r from-BtnTertiary-start to-BtnTertiary-end "
        />
      </div>
    </div>
  );
}
