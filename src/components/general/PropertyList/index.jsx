import { GetProperty } from "../../../api/ApiProperty";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PropertyCard from "./PropertyCard";
import Paginator from "../Paginator";

export default function PropertyList({ url }) {
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
    getData("");
  }, []);

  const getData = async (url) => {
    const api_request = await GetProperty(url);

    if (!api_request.error) {
      setProperties(api_request.response.data.data.data);
      setPaginationData({
        current_page: api_request.response.data.data.current_page,
        last_page: api_request.response.data.data.last_page,
        first_page_url: api_request.response.data.data.first_page_url,
        last_page_url: api_request.response.data.data.last_page_url,
        next_page_url: api_request.response.data.data.next_page_url,
        prev_page_url: api_request.response.data.data.prev_page_url,
      });
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
    <div className="flex flex-col items-center gap-3">
      <div
        className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4"
        id="client_properties"
      >
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
  );
}
