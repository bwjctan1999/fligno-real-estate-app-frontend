import { useParams } from "react-router-dom";

import IconArea from "../../assets/icons/IconArea";
import IconBed from "../../assets/icons/IconBed";
import IconBathroom from "../../assets/icons/IconBathroom";
import PDimg1 from "../../assets/imgs/PDimg1.png";
import PDimg2 from "../../assets/imgs/PDimg2.png";
import PDimg3 from "../../assets/imgs/PDimg3.png";
import PDimg4 from "../../assets/imgs/PDimg4.png";
import PDimg5 from "../../assets/imgs/PDimg5.png";
import Button from "../../components/general/Button";
import Footer from "../../components/client/Footer";
import AgentNavbar from "../../components/agent/AgentNavbar";

export default function PropertyDetails() {
  const {propertyId} = useParams()
  return (
  <div>
    <div className="item-center my-24 flex flex-wrap gap-y-8 px-4 lg:px-52 ">
      <AgentNavbar />

      <div className="w-full">
        <div className="lg:flex md:flex">
          <div>
            <h1 className="text-4xl font-bold ">Mesaverte Residence</h1>
            <span className="text-xl font-medium underline underline-offset-1">
              2265 Paul Wayne Haggerty Road, New Orleans
            </span>
          </div>
          <div className="mt-4 ml-auto flex gap-3 text-2xl font-bold">
            <h1> Price: </h1>
            <span className="">₱100,000,000</span>
          </div>
        </div>
      </div>

      <div class="container">
        <img
          src={PDimg1}
          alt="image"
          className="aspect-video w-full rounded-lg object-cover"
        />
        <div className="mt-4 grid grid-cols-4 gap-4">
          <img
            src={PDimg2}
            alt="image"
            className="aspect-video w-full rounded-lg object-cover"
          />
          <img
            src={PDimg3}
            alt="image"
            className="aspect-video w-full rounded-lg object-cover"
          />
          <img
            src={PDimg4}
            alt="image"
            className="aspect-video w-full rounded-lg object-cover"
          />
          <img
            src={PDimg5}
            alt="image"
            className="aspect-video w-full rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="flex flex-wrap gap-3 ">
          <h1 className="text-xl font-bold">Property Description</h1>
          <p className="text-justify">
            Huge number of propreties availabe here for buy, sell and Rent. Also
            you find here co-living property, lots opportunity you have to
            choose here and enjoy huge discount you can get. These cases are
            perfectly simpl and easy to distinguish. In a free hour, when our
            power of choice is untrammelled and when nothing prev ents our being
            able to do what we like best, every pleasure is to be welcomed and
            every pain avoided are cases are perfectly simple and easy to
            distinguish. In a free hour, when our power of choice. Huge number
            of propreties availabe here for buy, sell and Rent. Also you find
            here co-living property, lots opportunity you have to choose here
            and enjoy huge discount you can get. These cases are perfectly simpl
            are and easy to distinguish.
          </p>
        </div>

        <div className="mt-16 w-full">
          <h1 className="w-text-xl font-bold">Property Info</h1>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-y-10 md:flex-row ">
          <div className="grid w-11/12 grid-cols-3 gap-3">
            <div className="flex flex-wrap gap-3">
              <IconArea />
              <span className="justify-center text-base font-bold text-TextSecondary">
                1230 sq.m
              </span>
              <inline className=" text-TextSecondary">Area (sqft)</inline>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <IconBed />
              <span className="text-base font-bold text-TextSecondary">5</span>
              <inline className=" text-TextSecondary">No. Bedroom</inline>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <IconBathroom />
              <span className="text-base font-bold text-TextSecondary">5</span>
              <inline className="text-TextSecondary">No. Bathroom</inline>
            </div>
          </div>

          <div className=" flex w-full justify-center lg:w-5/12">
            <Button text="Contact Us" />
          </div>
        </div>
      </div>
     
   
    </div>
    <Footer/>
    </div>
    
  );
}
