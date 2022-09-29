import Button from "./Button";

export default function SuccessPopUp({  }) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div class="relative  mx-auto w-96 rounded-md bg-TextOnDark p-10 shadow-lg">
          <div class="mt-3 text-center">
            <div class="bg-purple-100 mx-auto flex h-24 w-24 items-center justify-center rounded-full">
              <svg
                class="h-24 w-24 text-BtnQuanary-end "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlnx="http://www.w.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>

            <h3 class="text-2xl font-bold leading-10 text-BtnQuanary-end">
              Successfull
            </h3>
            <div class="mt-4 py-3 ">
              <p class="text-gray-500">
                Account has been Successfull registered.
              </p>
            </div>
            <div class="items-center pt-8 pb-4">
              <Button text="Okay" bgcolor="bg-BtnQuanary-end" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
