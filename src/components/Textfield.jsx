export default function Textfield({
  type = "text",
  padding = "p-3",
  bgcolor = "bg-BGPrimary",
  textcolor = "text-TextPrimary",
  onClick,
  placeholder,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${padding} ${bgcolor} ${padding} ${textcolor} bg-white first-line:text-sm text bg-white w-full rounded-lg shadow-md text-black  focus:outline-BtnPrimary-start `}
      onClick={onClick}
    />
  );
}
