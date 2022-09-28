import Button from "./Button";

export default function FailedPopUp({}) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div class="relative  mx-auto w-96 rounded-md bg-TextOnDark p-10 shadow-lg">
          <div class="mt-3 text-center">
            <div class="bg-purple-100 mx-auto flex h-24 w-24 items-center justify-center rounded-full">
              <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 50 50"
                    stroke="red"
                    fill="red"
                    >
                <path d="M2.707 48.707 25 26.414l22.293 22.293 1.414-1.414L26.414 25 48.707 2.707l-1.414-1.414L25 23.586 2.707 1.293 1.293 2.707 23.586 25 1.293 47.293z" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold leading-10 mt-6 text-BtnTertiary-end">
              Whoops!
            </h3>
            <div class="mt-4 py-3 ">
              <p class="text-lg text-gray-500">
                I guess something went wrong. Please try again.
              </p>
            </div>
            <div class="items-center py-8">
              <Button
                text="Try again"
                bgcolor="bg-BtnTertiary-start bg-gradient-to-r from-BtnTertiary-start to-BtnTertiary-end "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
