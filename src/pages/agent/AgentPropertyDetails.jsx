import Button from "../../components/general/Button";
import IconEdit from "../../assets/icons/IconEdit";
import IconRemove from "../../assets/icons/IconRemove";
import { useNavigate } from "react-router-dom";

import PropertyDetails from "../../components/general/PropertyDetails";

export default function AgentPropertyDetails() {
  const navigate = useNavigate();

  return (
    <div className="item-center flex h-auto flex-wrap gap-y-10 bg-BGSecondary py-20 px-4 lg:px-20">
      <div className=" grid w-full grid-cols-3 gap-2 lg:w-2/5">
        <Button
          icon={
            <IconEdit width="24" height="24" fill="fill-BtnPrimary-start" />
          }
          text="Edit"
          bgcolor="none"
          textcolor="text-BtnPrimary-end"
          custom="border-2 border-BtnPrimary-end "
          onClick={() => navigate("/agent/edit-property/:propertyid")}
          responsive="true"
          fontsize="text-sm"
          padding="p-2"
        />
        <Button
          text="Remove"
          bgcolor="bg-BtnTertiary-end"
          responsive="true"
          icon={<IconRemove />}
          fontsize="text-sm"
          padding="p-2"
        />
        <Button
          text="Publish"
          bgcolor="bg-BtnPrimary-end"
          fontsize="text-sm"
          padding="p-2"
        />
      </div>
      <PropertyDetails />
    </div>
  );
}
