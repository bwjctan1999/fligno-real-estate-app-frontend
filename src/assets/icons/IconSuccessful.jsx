export default function IconSuccessful({
  width = "96",
  height = "96",
  color = "text-BtnQuanary-end ",
}) {
  return (
    <svg
      className={color}
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlnx="http://www.w.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  );
}
