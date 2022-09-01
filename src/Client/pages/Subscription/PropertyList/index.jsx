import Button from "../../../../components/Button";
import Textfield from "../../../../components/Textfield";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  const fillCards = () => {
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
    <div className="px-4 lg:px-20">
      <div className="text-4xl font-bold text-TextTertiary">Properties</div>
      <div className="mb-20 grid grid-cols-1 gap-5 md:grid-cols-5">
        <Textfield placeholder="Location" />
        <Textfield placeholder="Property Type" />
        <Textfield placeholder="Price Range" />
        <Textfield placeholder="Area" />
        <Button text="Search" />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(25)].map((x, i) => fillCards())}
      </div>
    </div>
  );
}
