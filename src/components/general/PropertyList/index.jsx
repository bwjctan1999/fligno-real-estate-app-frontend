import { GetProperty } from "../../../api/ApiProperty";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PropertyCard from "./PropertyCard";
import PropertyFilter from "./PropertyFilter";

export default function PropertyList({ url }) {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const property = await GetProperty("");

    if (!property.error) {
      setProperties(property.response.data.data);
    } else {
      console.log(property.error);
    }
  };

  const addProperty = ({
    id,
    user_id,
    title,
    price,
    type,
    address_1,
    address_2,
    area,
    bathroom,
    bedroom,
    city,
    description,
    zip_code,
    img,
  }) => {
    return (
      <PropertyCard
        title={title}
        location={address_1}
        area={area}
        bednum={bedroom}
        bathnum={bathroom}
        price={price}
        onClick={() => navigate(`/agent/properties/${id}`)}
        key={id}
        img={img}
      />
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {properties.map((property, i) => addProperty(property))}
      </div>
    </div>
  );
}
