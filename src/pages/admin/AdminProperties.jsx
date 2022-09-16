import PropertyList from "../../components/general/PropertyList";

export default function AdminProperties() {
  return (
    <div className="min-h-screen bg-BGSecondary px-4 pt-24 lg:px-24">
      <div className="mb-10 text-4xl font-bold text-TextTertiary">
        Properties
      </div>
      <PropertyList />
    </div>
  );
}
