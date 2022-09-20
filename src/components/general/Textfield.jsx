export default function Textfield({
  type = "text",
  icon,
  padding = "p-3",
  bgcolor = "bg-BGPrimary",
  textcolor = "text-TextPrimary",
  onClick,
  placeholder,
  onChange,
  valid = true,
  invalidError = "required",
}) {
  const validationBorderHandler = (validator) => {
    if (validator === false)
      return " border-2 border-solid border-r-BtnTertiary-end";
  };

  return (
    <div>
      <div
        className={`
          ${bgcolor} 
          ${textcolor} 
          ${icon ? "pl-3" : null} 
          ${valid ? null : "border-2 border-BtnTertiary-end"} 
          flex flex-col items-center rounded-lg shadow-md outline-2 outline-BtnPrimary-start focus-within:outline`}
      >
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          className={`${padding} h-full w-full rounded-lg outline-none`}
          onClick={onClick}
          onChange={onChange}
        />
      </div>
      {valid ? null : (
        <p className="text-sm text-BtnTertiary-end">{invalidError}</p>
      )}
    </div>
  );
}
