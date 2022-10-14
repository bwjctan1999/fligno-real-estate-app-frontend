export default function Textfield({
  type = "text",
  icon,
  padding = "p-3",
  bgcolor = "bg-BGPrimary",
  textcolor = "text-TextPrimary",
  onClick,
  placeholder,
  onChange,
  invalidError = "",
  value,
  onKeyDown,
}) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onKeyDown();
    }
  };

  return (
    <div>
      <div
        className={`
          ${bgcolor} onKeyDown
          ${textcolor} 
          ${icon ? "pl-3" : null} 
          ${invalidError === "" ? null : "border-2 border-BtnTertiary-end"} 
          flex items-center rounded-lg shadow-md outline-2 outline-BtnPrimary-start focus-within:outline`}
      >
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          className={`${padding} h-full w-full rounded-lg outline-none`}
          onClick={onClick}
          onChange={onChange}
          value={value}
          onKeyDown={handleKeyDown}
        />
      </div>
      {invalidError === "" ? null : (
        <p className="text-sm text-BtnTertiary-end">{invalidError}</p>
      )}
    </div>
  );
}
