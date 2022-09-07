import PropertyCard from "./PropertyCard";
import PropertyFilter from "./PropertyFilter";

export default function PropertyList() {
  const addCard = () => {
    return (
      <PropertyCard
        title="Elite Garden Residence"
        location="18B Central Street, San Francisco"
        area={1230}
        bednum={5}
        bathnum={2}
        price={1000000}
      />
    );
  };

  return (
    <div className="flex flex-col gap-8 bg-BGSecondary px-4 lg:px-20">
      <div className="text-4xl font-bold text-TextTertiary">Properties</div>
      <PropertyFilter />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(25)].map((x, i) => addCard())}
      </div>
    </div>
  );
}