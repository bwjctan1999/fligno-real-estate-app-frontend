export default function Textfield({
  type = "text",
  icon,
  padding = "p-3",
  bgcolor = "bg-BGPrimary",
  textcolor = "text-TextPrimary",
  onClick,
  placeholder,
}) {
  return (
    <div
      className={` ${bgcolor} ${textcolor} ${
        icon ? "pl-3" : null
      } flex items-center rounded-lg shadow-md outline-1 outline-BtnPrimary-start focus-within:outline`}
    >
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className={`${padding} h-full w-full rounded-lg outline-none`}
        onClick={onClick}
      />
    </div>
  );
}
