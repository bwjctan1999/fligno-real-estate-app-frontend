export default function DropDown({
 
  }) {
    return (
        <div className="relative w-full lg:max-w-sm  ">
            <select className= "w-full p-3.5  bg-white text-sm text bg-white rounded-lg shadow-md text-TextPrimary max-w-md focus:outline-BtnPrimary-start">
                <option>Select</option>
                <option>For Rent</option>
                <option>For Sale</option>
            
            </select>
        </div>
    );
}