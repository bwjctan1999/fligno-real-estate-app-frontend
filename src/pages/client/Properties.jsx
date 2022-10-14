import { useState } from "react";
import DesignProperties from "../../assets/svgs/DesignProperties";
import PropertyList from "../../components/general/PropertyList";
import PropertyFilter from "../../components/general/PropertyList/PropertyFilter";

export default function Properties() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="flex w-full flex-col-reverse items-center justify-center gap-20 bg-BGSecondary px-4 pb-28 pt-36 shadow-md md:px-24 lg:flex-row lg:px-32">
        <div className="flex flex-col gap-4 text-center lg:w-1/2 lg:text-left">
          <h1 className=" text-5xl font-bold">Properties</h1>
          <p className="text-xl font-medium">
            We have a large collection of properties for buy and rent
          </p>
        </div>
        <div className="w-full lg:flex">
          <DesignProperties />
        </div>
      </div>
      <div className="flex w-full flex-col items-end p-4 py-12 lg:px-32">
        <PropertyFilter search={search} setSearch={setSearch} />
        <PropertyList navigate_to="/properties" search={search} />
      </div>
    </div>
  );
}
