export default function SuccessAlert({ 

    text = "Success ni",
    showSuccessAlert,
    setShowSuccessAlert }) {
  return showSuccessAlert ? (
    <div
    id="alert-2"
    className="dark:bg-red-200 flex  rounded-lg bg-BtnQuanary-start bg-opacity-20 p-4"
    role="alert"
  >
    <svg
      aria-hidden="true"
      className="h-5 w-5 flex-shrink-0 text-BtnQuanary-start"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="sr-only">Info</span>
    <div className="ml-3 text-sm ">{text}</div>
    <button
      onClick={() => setShowSuccessAlert(false)}
      type="button"
      className="bg-red-100 -mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8  rounded-lg p-1.5 text-BtnQuanary-start"
      aria-label="Close"
    >
      <span className="sr-only">Close</span>
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
  ): null;
  }