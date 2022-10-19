import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Button from "../../../components/general/Button";

import { GetProperty, SearchProperty } from "../../../api/ApiProperty";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableSkeleton from "../../../components/general/TableSkeleton";
import Paginator from "../../../components/general/Paginator";

export default function AdminPropertiesTable({ search }) {
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
    let api_request;

    search
      ? (api_request = await SearchProperty(search, "admin/property-list"))
      : (api_request = await GetProperty(id, "admin/property-list"));

    console.log(api_request.response);
    if (!api_request.error) {
      setProperties(api_request.response.data.data);
      setPaginationData({
        current_page: api_request.response.data.current_page,
        last_page: api_request.response.data.last_page,
        first_page_url: api_request.response.data.first_page_url,
        last_page_url: api_request.response.data.last_page_url,
        next_page_url: api_request.response.data.next_page_url,
        prev_page_url: api_request.response.data.prev_page_url,
      });
    } else {
      console.log(api_request.error);
    }
  };

  const searchProperty = async () => {};

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
      <Tr key={id} className="border-y-2 border-LinePrimary text-TextTertiary">
        <Td className="py-4 pr-4">{title}</Td>
        <Td className="pr-4">{address_1}</Td>
        <Td className="pr-4">₱ {price}</Td>
        <Td className="pr-4">{area} sq.m.</Td>
        <Td className="pr-4">{bedroom} </Td>
        <Td className="pr-4">{bathroom}</Td>
        <Td className="pr-4">
          <Button
            text="Open"
            padding="p-2"
            onClick={() => navigate(`/agent/properties/${id}`)}
          />
        </Td>
      </Tr>
    );
  };

  return properties.length === 0 ? (
    <div className="mt-10">
      <TableSkeleton />
    </div>
  ) : (
    <div className="mt-10 w-full rounded-lg bg-BGPrimary p-4 shadow-lg">
      <Table>
        <Thead>
          <Tr className="border-b-2 border-LineSecondary text-left text-lg">
            <Th className="pr-4">Name</Th>
            <Th className="pr-4">Address</Th>
            <Th className="pr-4">Price</Th>
            <Th className="pr-4">Square Meters</Th>
            <Th className="pr-4">Bedrooms </Th>
            <Th className="pr-4">Bathrooms</Th>
            <Th className="pr-4">Action</Th>
          </Tr>
        </Thead>
        <Tbody>{properties.map((property, i) => addProperty(property))}</Tbody>
      </Table>
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
