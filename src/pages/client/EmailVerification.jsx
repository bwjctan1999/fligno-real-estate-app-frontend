import { PostEmail } from "../../api/ApiEmail";

export default function EmailVerification() {
  const verifyAccount = () => {
    const url = window.location.href;
    const id = url[url.length - 1];

    console.log(url);

    //const api_request = PostEmail(localStorage.token);
  };

  return (
    <div className="bg-blue-100 min-w-screen mt-28 mb-2 flex items-center justify-center p-5">
      <div className="text-gray-800 bg-white max-w-xl p-8 text-center lg:max-w-3xl lg:p-12">
        <h3 className="text-4xl font-medium">You're almost there!</h3>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="m-3 h-24 w-24"
            fill="blue"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
            />
          </svg>
        </div>

        <p className="text-base">
          Click the button below to verify your email address and finish setting
          up your account.
        </p>
        <div className="mt-4">
          <button
            onClick={verifyAccount}
            className="m-3 rounded bg-BtnPrimary-start bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end px-4 py-2 font-bold text-TextOnDark"
          >
            Click to Verify Email
          </button>
        </div>
      </div>
    </div>
  );
}
