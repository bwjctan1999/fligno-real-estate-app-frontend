import PropertyList from "../../components/general/PropertyList";
import PropertyFilter from "../../components/general/PropertyList/PropertyFilter";

export default function AdminProperties() {
  return (
    <div className="min-h-screen bg-BGSecondary px-4 pt-24 lg:px-24">
      <div className="mb-5 text-4xl font-bold text-TextTertiary">
        Properties
      </div>
      <div className="flex w-full flex-col items-end">
        <PropertyFilter />
        <PropertyList />
      </div>
    </div>
  );
}
