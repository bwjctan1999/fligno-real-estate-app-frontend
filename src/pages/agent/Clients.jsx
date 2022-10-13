import { useEffect, useState } from "react";
import { GetContacts } from "../../api/ApiContactAgent";
import { GetUser } from "../../api/ApiUsers";
import { GetProperty } from "../../api/ApiProperty";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Button from "../../components/general/Button";
import DropDown from "../../components/general/DropDown";
import Textfield from "../../components/general/Textfield";
import IconSearch from "../../assets/icons/IconSearch";

export default function Clients() {
  const [contacts, setContacts] = useState([]);
  const [userFilter, setUserFilter] = useState("Contacts");

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const api_request = await GetContacts();

    if (!api_request.error) {
      setContacts(api_request.response.data.data);
    } else {
      console.log(api_request.error);
    }
  };

  const addTableData = ({
    id,
    first_name,
    last_name,
    property_title,
    email,
    phone_number,
  }) => {
    return (
      <Tr
        key={id}
        className="bg- border-y-2 border-LinePrimary text-TextTertiary"
      >
        <Td>{`${first_name} ${last_name}`}</Td>
        <Td>{property_title}</Td>
        <Td>{email}</Td>
        <Td>{phone_number}</Td>
        <Td>
          <Button
            text="Remove"
            fontsize="text-base"
            padding="p-1"
            custom="md:my-3"
          />
        </Td>
      </Tr>
    );
  };
  return (
    <div className=" min-h-screen bg-BGSecondary p-4 pt-16 lg:px-60 lg:pt-32">
      <div className="flex w-full flex-col-reverse justify-end gap-4 lg:flex-row">
        <div className="lg:full float-right w-full lg:w-1/5 ">
          <DropDown
            values={["Contacts", "Contacts History"]}
            options={["Contacts", "Contacts History"]}
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
          />
        </div>
        <div className="lg:full float-right w-full lg:w-1/4 ">
          <Textfield
            placeholder="Search"
            icon={<IconSearch fill="fill-TextTertiary" />}
          />
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-BGPrimary p-4 shadow-lg">
        <Table>
          <Thead>
            <Tr className="border-b-2 border-LineSecondary text-left text-lg">
              <Th>Name</Th>
              <Th>Property</Th>
              <Th>Email</Th>
              <Th>Mobile</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>{contacts.map((x) => addTableData(x))}</Tbody>
        </Table>
      </div>
    </div>
  );
}
