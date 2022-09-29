import Textfield from "../../components/general/Textfield";
import TextArea from "../../components/general/TextArea";
import Button from "../../components/general/Button";

export default function AdminEditSubscription() {
  return (
<div className="bg-BGSecondary">
    <div className="flex flex-col gap-4  px-4 pt-16 md:px-20 lg:px-60 lg:pt-28">
    <div className="flex gap-4  flex-col h-screen">

   <h1 className="mb-6 w-full text-4xl font-bold text-TextTertiary">
        Edit Subscription
      </h1>

      <div className="w-full lg:w-8/12">
              <span className=" font-black text-TextTertiary ">
                Property Title
              </span>
              <Textfield
                placeholder="Title"
                
              />
            </div>

            <div className="w-full lg:w-8/12">
            <label className=" font-black text-TextTertiary" htmlFor="desc">
              Description
            </label>
            <TextArea
              id="desc"
              placeholder="Description"
          
            />
          </div>

            <div className="w-full lg:w-8/12">
              <label className="font-black text-TextTertiary" htmlFor="price">
                Price
              </label>
              <Textfield
                id="price "
                placeholder="₱"
                type="number"
               
              />
            </div>
            <div className="w-full  mt-8 lg:w-1/4">
          <Button text="Save" />
        
    </div>
    
    
      </div>
    </div>
    </div>
    );
}
