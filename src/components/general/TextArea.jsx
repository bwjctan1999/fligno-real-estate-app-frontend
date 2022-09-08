export default function TextArea({ value, onChange, placeholder = "", id }) {
  return (
    <div className="relative w-full">
      <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-TextPrimary"></label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows="6"
        className="text-gray-900 bg-gray-50 block w-full rounded-lg p-2.5 text-sm shadow-md  focus:outline-BtnPrimary-start"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
