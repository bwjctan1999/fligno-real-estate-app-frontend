import { GetProperty, SearchProperty } from "../../../api/ApiProperty";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DesignSpinner from "../../../assets/svgs/DesignSpinner";
import PropertyCard from "./PropertyCard";
import Paginator from "../Paginator";
import PropertyCardSkeleton from "./PropertyCardSkeleton";

export default function PropertyList({ navigate_to, search, url }) {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [paginationData, setPaginationData] = useState({
    current_page: 1,
    last_page: null,
    first_page_url: null,
    last_page_url: null,
    next_page_url: null,
    prev_page_url: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    getData("", search);
  }, [search]);

  const getData = async (id, search) => {
    setProperties([]);
    setLoading(true);
    let api_request;

    search
      ? (api_request = await SearchProperty(search, url))
      : (api_request = await GetProperty(id, url));

    console.log(api_request.response.data.property.data);
    if (!api_request.error) {
      setProperties(api_request.response.data.property.data);
      setPaginationData({
        current_page: api_request.response.data.property.current_page,
        last_page: api_request.response.data.property.last_page,
        first_page_url: api_request.response.data.property.first_page_url,
        last_page_url: api_request.response.data.property.last_page_url,
        next_page_url: api_request.response.data.property.next_page_url,
        prev_page_url: api_request.response.data.property.prev_page_url,
      });
      setLoading(false);
    } else {
      console.log(api_request.error);
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
    image_property,
  }) => {
    return (
      <PropertyCard
        title={title}
        location={address_1}
        area={area}
        bednum={bedroom}
        bathnum={bathroom}
        price={price}
        onClick={() => navigate(`${navigate_to}/${id}`)}
        key={id}
        img={image_property.length > 1 ? image_property[0].name : null}
        type={type}
      />
    );
  };

  return loading ? (
    <div className="mt-10 grid w-full animate-pulse grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      <PropertyCardSkeleton />
      <PropertyCardSkeleton />
      <PropertyCardSkeleton />
      <PropertyCardSkeleton />
      <PropertyCardSkeleton />
      <PropertyCardSkeleton />
      <PropertyCardSkeleton />
      <PropertyCardSkeleton />
    </div>
  ) : (
    <div id="client_properties" className="w-full">
      {properties.length === 0 ? (
        <div className="mt-10 w-full rounded-lg bg-BGPrimary p-5 text-center font-medium shadow-lg">
          {search
            ? `We cannot find any matches for "${search}"`
            : "Their are no properties"}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {properties.map((property, i) => addProperty(property))}
          </div>
          <Paginator
            changePage={getData}
            current={paginationData.current_page}
            last={paginationData.last_page}
            start_url={paginationData.first_page_url}
            last_url={paginationData.last_page_url}
            next_url={paginationData.next_page_url}
            prev_url={paginationData.prev_page_url}
          />
        </div>
      )}
    </div>
  );
}
