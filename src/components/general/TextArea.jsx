export default function TextArea({
  value,
  onChange,
  placeholder = "",
  valid = true,
  invalidError = "required",
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
          ${valid ? null : "border-2 border-BtnTertiary-end"} 
          text-gray-900 bg-gray-50 block w-full rounded-lg p-2.5 text-sm shadow-md focus:outline-BtnPrimary-start`}
        placeholder={placeholder}
      ></textarea>
      {valid ? null : (
        <p className="text-sm text-BtnTertiary-end">{invalidError}</p>
      )}
    </div>
  );
}
