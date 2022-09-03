export default function TextArea({
   
  }) {
    return (
    <div className="relative w-full lg:max-w-2xl ">

        <label 
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-TextPrimary"></label>


        <textarea rows="6" 
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-md  focus:outline-BtnPrimary-start" placeholder="Description"></textarea>
        
        
        </div>
        );
  }
  
  