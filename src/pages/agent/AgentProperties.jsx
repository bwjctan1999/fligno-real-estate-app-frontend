import PropertyList from "../../components/general/PropertyList";
import Button from "../../components/general/Button";
import IconAdd from "../../assets/icons/IconAdd";

export default function AgentProperties() {
  return (
    <div className="min-h-screen bg-BGSecondary px-4 pt-24 lg:px-24">
      <div className="mb-10 text-4xl font-bold text-TextTertiary">
        Properties
      </div>
      <div className="ml-auto w-full md:w-1/5">
        <Button
          text="Add Property"
          icon={<IconAdd />}
          onClick={() => navigate("/agent/add-property")}
        />
      </div>
      <PropertyList url="http://localhost:8000/api/property" />
    </div>
  );
}
