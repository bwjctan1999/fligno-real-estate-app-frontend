export default function VerifyEmail() {
  return (
    <div className="flex h-screen items-center justify-center bg-BGSecondary">
      <div>
        <div className="flex flex-col items-center space-y-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-32 w-32 text-BtnQuanary-end"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-5xl font-bold text-TextTertiary">Thank You !</h1>
          <p className="text-xl">
            Thank you for your interest! please check your email for a link to
            verify your account.
          </p>
        </div>
      </div>
    </div>
  );
}
