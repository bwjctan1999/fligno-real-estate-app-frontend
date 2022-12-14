export default function IconGrid({ width = "28", height = "28" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 7V11H11V7H7Z" fill="currentColor" />
      <path d="M13 7H17V11H13V7Z" fill="currentColor" />
      <path d="M13 13V17H17V13H13Z" fill="currentColor" />
      <path d="M7 13H11V17H7V13Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H21V21H3V3ZM5 5V19H19V5H5Z"
        fill="currentColor"
      />
    </svg>
  );
}
