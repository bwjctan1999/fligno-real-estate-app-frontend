export default function DropDown({
  value,
  onChange,
  valid = false,
  invalidError = "required",
  options = [],
}) {
  return (
    <div>
      <div className="relative w-full ">
        <select
          value={value}
          onChange={onChange}
          className={`
          ${valid ? null : "border-2 border-BtnTertiary-end"} 
          bg-white text bg-white w-full rounded-lg p-3 text-base text-TextPrimary shadow-md focus:outline-BtnPrimary-start`}
        >
          {options.map((option) => (
            <option className="leading-3" key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {valid ? null : (
        <p className="text-sm text-BtnTertiary-end">{invalidError}</p>
      )}
    </div>
  );
}
