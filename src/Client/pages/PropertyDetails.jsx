import IconArea from "../../assets/icons/IconArea";
import IconBed from "../../assets/icons/IconBed";
import IconBathroom from "../../assets/icons/IconBathroom";
import PDimg1 from "../../assets/imgs/PDimg1.png";
import PDimg2 from "../../assets/imgs/PDimg2.png";
import PDimg3 from "../../assets/imgs/PDimg3.png";
import PDimg4 from "../../assets/imgs/PDimg4.png";
import PDimg5 from "../../assets/imgs/PDimg5.png";
import Button from "../../components/Button";

export default function PropertyDetails() {
  return (
    <div className="flex flex-wrap gap-y-8 justify-center item-center my-10">
      <div className="w-11/12">
        <div className="flex ">
          <div>
            <h1 className="text-2xl font-bold ">Mesaverte Residence</h1>
            <span className="underline underline-offset-1 text-sm">
              2265 Paul Wayne Haggerty Road, New Orleans
            </span>
          </div>
          <div className="flex gap-3 mt-4 ml-auto">
            <h1 className="font-bold"> Price: </h1>
            <span className="text-xl font-bold">₱100,000,000</span>
          </div>
        </div>
      </div>

      <div class="container mx-auto">
        <div class="grid-cols-4 space-y-2 bg-yellow-200 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2">
          <div class="w-full col-span-2 row-span-2 rounded">
            <img src={PDimg1} alt="image" />
          </div>
          <div class="w-full rounded">
            <img src={PDimg1} alt="image" />
          </div>

          <div class="w-full rounded">
            <img src={PDimg1} alt="image" />
          </div>
          <div class="w-full rounded">
            <img src={PDimg1} alt="image" />
          </div>
          <div class="w-full rounded">
            <img src={PDimg1} alt="image" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-11/12">
        <div className="flex flex-wrap gap-3 ">
          <h1 className="text-base font-bold">Property Description</h1>
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

        <div className="w-full mt-16">
          <h1 className="w-text-base font-bold">Property Info</h1>
        </div>

        <div className="flex gap-y-10 flex-col mt-5 w-full justify-between md:flex-row ">
          <div className="flex flex-wrap w-11/12">
            <div className="flex flex-wrap gap-3 w-1/3">
              <IconArea />
              <span className="text-TextSecondary text-base font-bold">
                1230 sq.m
              </span>
              <inline className="text-TextSecondary text-sm">
                Area (sqft)
              </inline>
            </div>

            <div className="flex flex-wrap gap-3 S w-1/4">
              <IconBed />
              <span className="text-TextSecondary text-base font-bold">5</span>
              <inline className="text-TextSecondary text-sm">
                No. Bedroom
              </inline>
            </div>

            <div className="flex flex-wrap gap-3  w-1/4">
              <IconBathroom />
              <span className="text-TextSecondary text-base font-bold">
                5
              </span>{" "}
              <inline className="text-sm text-TextSecondary">
                No. Bathroom
              </inline>
            </div>
          </div>    

          <div className=" w-5/12 fkex justify-center">
            <Button text="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
}
