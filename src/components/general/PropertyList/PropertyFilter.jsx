import { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import IconArea from "../../../assets/icons/IconArea";
import IconFilter from "../../../assets/icons/IconFilter";
import IconLocation from "../../../assets/icons/IconLocation";
import IconPrice from "../../../assets/icons/IconPrice";
import IconProperties from "../../../assets/icons/IconProperties";
import Button from "../../../components/general/Button";
import Textfield from "../../../components/general/Textfield";

export default function PropertyFilter() {
  const [showFilter, setShowFilter] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      window.innerWidth > 680 ? setShowFilter(true) : null;
      setScreenWidth(window.innerWidth);
    }

    function handleLoad() {
      window.innerWidth > 680 ? setShowFilter(true) : setShowFilter(false);
    }

    window.addEventListener("load", handleLoad);
    window.addEventListener("", handleLoad);
    window.addEventListener("resize", handleResize);
  });

  useLayoutEffect(() => (window.innerWidth > 680 ? setShowFilter(true) : null));

  return (
    <div>
      <Button
        icon={<IconFilter />}
        padding="p-4"
        custom="md:hidden w-14 block ml-auto"
        onClick={() => setShowFilter(!showFilter)}
      />
      {!showFilter ? null : (
        <div
          className={
            window.innerWidth > 680
              ? ""
              : "fixed top-0 left-0 h-full w-full bg-BGSecondary p-4"
          }
        >
          <Button
            text="X"
            bgcolor="bg-BtnTertiary-start"
            custom="w-12 block md:hidden mb-4 block ml-auto"
            onClick={() => setShowFilter(!showFilter)}
          />
          <div className="bg rt grid grid-cols-1 gap-5 md:grid-cols-5">
            <Textfield placeholder="Location" icon={<IconLocation />} />
            <Textfield
              placeholder="Property Type"
              icon={
                <IconProperties
                  width="24"
                  height="24"
                  fill="fill-TextSecondary"
                />
              }
            />
            <Textfield placeholder="Price Range" icon={<IconPrice />} />
            <Textfield placeholder="Area" icon={<IconArea />} />
            <Button text="Search" />
          </div>
        </div>
      )}
    </div>
  );
}
