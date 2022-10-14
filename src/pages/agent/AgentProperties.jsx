import PropertyList from "../../components/general/PropertyList";
import PropertyFilter from "../../components/general/PropertyList/PropertyFilter";
import Button from "../../components/general/Button";
import IconAdd from "../../assets/icons/IconAdd";
import { useNavigate } from "react-router-dom";

export default function AgentProperties() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-BGSecondary px-4 pt-24 pb-12 lg:px-24">
      <div className="mb-10 text-4xl font-bold text-TextTertiary">
        Properties
      </div>
      <div className="flex justify-end gap-4">
        <Button
          text="Add Property"
          icon={<IconAdd />}
          onClick={() => navigate("/agent/add-property")}
          custom="md:w-1/5 w-1/4"
          responsive="true"
          padding="p-2"
        />
        <PropertyFilter />
      </div>
      <PropertyList navigate_to="/agent/properties" />
    </div>
  );
}
