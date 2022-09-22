export default function DropDown({
  value,
  onChange,
  invalidError = "",
  options = [],
  values = [],
}) {
  return (
    <div>
      <div className="relative w-full ">
        <select
          value={value}
          onChange={onChange}
          className={`
          ${invalidError != "" ? "border-2 border-BtnTertiary-end" : null} 
          bg-white text bg-white w-full rounded-lg p-3 text-base text-TextPrimary shadow-md focus:outline-BtnPrimary-start`}
        >
          {options.map((option, index) => (
            <option className="leading-3" key={option} value={values[index]}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {invalidError != "" ? (
        <p className="text-sm text-BtnTertiary-end">{invalidError}</p>
      ) : null}
    </div>
  );
}
