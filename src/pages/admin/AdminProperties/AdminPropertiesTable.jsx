import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Button from "../../../components/general/Button";

import { GetProperty } from "../../../api/ApiProperty";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableSkeleton from "../../../components/general/TableSkeleton";

export default function AdminPropertiesTable({ search }) {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData(search);
  }, [search]);

  const getData = async (search) => {
    setProperties([]);
    const property = await GetProperty("", search);

    if (!property.error) {
      setProperties(property.response.data.data);
    } else {
      console.log(property.error);
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
        <Td className="py-4 pr-4">{title + " Longer Longer Longer Longer"}</Td>
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
    </div>
  );
}
