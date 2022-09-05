export default function DropDown({}) {
  return (
    <div className="relative w-full lg:max-w-sm  ">
      <select className="bg-white text  bg-white w-full max-w-md rounded-lg p-3.5 text-sm text-TextPrimary shadow-md focus:outline-BtnPrimary-start">
        <option>Select</option>
        <option>For Rent</option>
        <option>For Sale</option>
      </select>
    </div>
  );
}
