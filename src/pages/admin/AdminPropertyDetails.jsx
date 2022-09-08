import IconArea from "../../assets/icons/IconArea";
import IconBed from "../../assets/icons/IconBed";
import IconBathroom from "../../assets/icons/IconBathroom";
import PDimg1 from "../../assets/imgs/PDimg1.png";
import PDimg2 from "../../assets/imgs/PDimg2.png";
import PDimg3 from "../../assets/imgs/PDimg3.png";
import PDimg4 from "../../assets/imgs/PDimg4.png";
import PDimg5 from "../../assets/imgs/PDimg5.png";
import Button from "../../components/general/Button";
import IconEdit from "../../assets/icons/IconEdit";
import IconRemove from "../../assets/icons/IconRemove";

export default function AddPropertyDetails() {
  return (
    <div className="item-center my-10 flex flex-wrap gap-y-8 px-4 lg:px-52 ">
      <div className="ml-auto grid w-full grid-cols-3 gap-2 lg:w-3/5">
        <Button
          icon={
            <IconEdit width="24" height="24" fill="fill-BtnPrimary-start" />
          }
          text="Edit"
          bgcolor="none"
          textcolor="text-BtnPrimary-end"
          custom="border-2 border-BtnPrimary-end "
          responsive="true"
        />
        <Button
          text="Remove"
          bgcolor="bg-BtnTertiary-end"
          responsive="true"
          icon={<IconRemove />}
        />
        <Button text="Unpublish" bgcolor="bg-BtnSecondary" />
      </div>

      <div className="w-full">
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

          <div className=" flex w-full justify-center lg:w-5/12">
            <Button text="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
}
