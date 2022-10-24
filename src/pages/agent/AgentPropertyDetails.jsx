import Button from "../../components/general/Button";
import IconEdit from "../../assets/icons/IconEdit";
import IconRemove from "../../assets/icons/IconRemove";
import { useNavigate } from "react-router-dom";

import PropertyDetails from "../../components/general/PropertyDetails";
import { RemoveProperty } from "../../api/ApiProperty";
import PopUp from "../../components/popups/PopUp";
import { useState } from "react";

export default function AgentPropertyDetails() {
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();

  const editHandler = () => {
    const url = window.location.href.split("/");
    const id = url[url.length - 1];
    navigate(`/agent/edit-property/${id}`);
  };

  const removeHandler = async () => {
    const api_request = await RemoveProperty(selectedPropertyId);
    if (!api_request.error) {
      navigate("/agent/properties");
    } else {
      alert(api_request.error);
      console.log(api_request.error);
    }
  };

  return (
    <div className="item-center flex h-auto flex-wrap gap-y-10 bg-BGSecondary py-20 px-4 lg:px-20">
      <PopUp
        text="Are you sure you would want to delete this property?"
        state={showPopUp}
        cancelFunction={() => setShowPopUp(false)}
        okayFunction={removeHandler}
      />
      <div className=" grid w-full grid-cols-3 gap-2 lg:w-2/5">
        <Button
          icon={
            <IconEdit width="24" height="24" fill="fill-BtnPrimary-start" />
          }
          text="Edit"
          bgcolor="none"
          textcolor="text-BtnPrimary-end"
          custom="border-2 border-BtnPrimary-end "
          onClick={editHandler}
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
          onClick={() => setShowPopUp(true)}
        />
        <Button
          text="Publish"
          bgcolor="bg-BtnPrimary-end"
          fontsize="text-sm"
          padding="p-2"
        />
      </div>
      <PropertyDetails setSelectedId={setSelectedPropertyId} />
    </div>
  );
}
