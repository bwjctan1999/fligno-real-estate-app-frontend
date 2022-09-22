export default function TextArea({
  value,
  onChange,
  placeholder = "",
  invalidError = "",
  id,
}) {
  return (
    <div className="relative w-full" value={value} onChange={onChange}>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows="6"
        className={`
          ${invalidError != "" ? "border-2 border-BtnTertiary-end" : null} 
          text-gray-900 bg-gray-50 block w-full rounded-lg p-2.5 text-sm shadow-md focus:outline-BtnPrimary-start`}
        placeholder={placeholder}
      ></textarea>
      {invalidError != "" ? (
        <p className="text-sm text-BtnTertiary-end">{invalidError}</p>
      ) : null}
    </div>
  );
}
