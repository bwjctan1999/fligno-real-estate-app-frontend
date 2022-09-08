import IconArea from "../../assets/icons/IconArea";
import IconBed from "../../assets/icons/IconBed";
import IconBathroom from "../../assets/icons/IconBathroom";
import PDimg1 from "../../assets/imgs/PDimg1.png";
import Button from "../../components/general/Button";
import IconEdit from "../../assets/icons/IconEdit";

export default function AddPropertyDetails() {
  return (
    <div className="item-center my-10 flex flex-wrap justify-center gap-y-8">
      <div className="ml-auto flex  w-full">
        <div className="ml-auto flex w-3/5 justify-end">
          <div className=" flex w-5/12 justify-center">
            <Button text="Edit" />
          </div>
          <div className=" flex w-5/12 justify-center">
            <Button text="Remove" />
          </div>
          <div className=" flex w-5/12 justify-center">
            <Button text="Unpublish" />
          </div>
        </div>
      </div>

      <div className="w-11/12">
        <div className="flex ">
          <div>
            <h1 className="text-2xl font-bold ">Mesaverte Residence</h1>
            <span className="text-sm underline underline-offset-1">
              2265 Paul Wayne Haggerty Road, New Orleans
            </span>
          </div>
          <div className="mt-4 ml-auto flex gap-3">
            <h1 className="font-bold"> Price: </h1>
            <span className="text-xl font-bold">₱100,000,000</span>
          </div>
        </div>
      </div>

      <div class="container mx-auto">
        <div class="bg-yellow-200 grid-cols-4 space-y-2 lg:grid lg:grid-rows-2 lg:gap-3 lg:space-y-0">
          <div class="col-span-2 row-span-2 w-full rounded">
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

      <div className="flex w-11/12 flex-wrap">
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

        <div className="mt-16 w-full">
          <h1 className="w-text-base font-bold">Property Info</h1>
        </div>

        <div className="mt-5 flex w-full flex-col justify-between gap-y-10 md:flex-row ">
          <div className="flex w-11/12 flex-wrap">
            <div className="flex w-1/3 flex-wrap gap-3">
              <IconArea />
              <span className="text-base font-bold text-TextSecondary">
                1230 sq.m
              </span>
              <inline className="text-sm text-TextSecondary">
                Area (sqft)
              </inline>
            </div>

            <div className="S flex w-1/4 flex-wrap gap-3">
              <IconBed />
              <span className="text-base font-bold text-TextSecondary">5</span>
              <inline className="text-sm text-TextSecondary">
                No. Bedroom
              </inline>
            </div>

            <div className="flex w-1/4 flex-wrap  gap-3">
              <IconBathroom />
              <span className="text-base font-bold text-TextSecondary">
                5
              </span>{" "}
              <inline className="text-sm text-TextSecondary">
                No. Bathroom
              </inline>
            </div>
          </div>

          <div className=" flex w-5/12 justify-center">
            <Button text="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
}
