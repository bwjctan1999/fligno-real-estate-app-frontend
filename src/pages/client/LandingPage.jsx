import DesignLandingPage from "../../assets/svgs/DesignLandingPage";
import Button from "../../components/general/Button"


export default function LandingPage() {
  return (
  <div className=" bg-BGSecondary flex h-screen flex-row flex-wrap-reverse justify-center p-3 ">
   
   <div className="mx-auto flex flex-col justify-center">
     
        <div className="flex w-auto flex-col gap-y-3 md:w-96">
            <p className="font-bold text-1xl text-TextPrimary pl-2 pb-2">A new way to find properties</p>
            <h1 className="font-extrabold text-4xl text-TextPrimary  md:text-4xl">Find your Most</h1>
            <h1 className="font-extrabold text-4xl text-TextPrimary  md:text-4xl pb-2">Suitable Property</h1>
            <p className="font-medium text-xs text-TextPrimary pt-1">In search of a home to purchase or rent? You're covered by us!</p>
            <p className="font-medium text-xs text-TextPrimary pt-1 pb-3">Your one-stop shop for all rental homes and real estate listings</p>

              <div className="mt-2 text-sm ">
                  <Button text= "Discover what awaits you at Turnkey"/>
              </div>    
          </div>
     </div>
              <div className="hidden w-6/12 items-center  justify-center lg:flex ml-5 mr-10">
                  <DesignLandingPage />
              </div>
    
  </div>


  
  );
}
