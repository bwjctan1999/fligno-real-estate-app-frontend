export default function DropDown({ value, onChange, options = [] }) {
  return (
    <div className="relative w-full ">
      <select
        value={value}
        onChange={onChange}
        className="bg-white text bg-white w-full rounded-lg p-3 text-base text-TextPrimary shadow-md focus:outline-BtnPrimary-start"
      >
        {options.map((option) => (
          <option className="leading-3">{option}</option>
        ))}
      </select>
    </div>
  );
}
