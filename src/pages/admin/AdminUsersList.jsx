import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import { GetUser } from "../../api/ApiUsers";

import Button from "../../components/general/Button";
import Textfield from "../../components/general/Textfield";
import Dropdown from "../../components/general/DropDown";

import IconEdit from "../../assets/icons/IconEdit";
import IconSearch from "../../assets/icons/IconSearch";

import { useEffect, useState } from "react";
import Paginator from "../../components/general/Paginator";

export default function AdminUsersList() {
  const [users, setUsers] = useState([]);
  const [paginationData, setPaginationData] = useState({
    current_page: 1,
    last_page: null,
    first_page_url: null,
    last_page_url: null,
    next_page_url: null,
    prev_page_url: null,
  });

  useEffect(() => {
    getData("");
  }, []);

  const getData = async (url) => {
    setUsers([]);
    const api_request = await GetUser(url);

    if (!api_request.error) {
      console.log(api_request.response)
      setUsers(api_request.response.data.data);
      setPaginationData({
        current_page: api_request.response.data.current_page,
        last_page: api_request.response.data.last_page,
        first_page_url: api_request.response.data.first_page_url,
        last_page_url: api_request.response.data.last_page_url,
        next_page_url: api_request.response.data.next_page_url,
        prev_page_url: api_request.response.data.prev_page_url,
      });
      console.log(api_request.response.data.data);
    } else {
      console.log(api_request);
    }
  };

  const addUser = ({
    email,
    first_name,
    last_name,
    phone_number,
    user_type,
  }) => {
    return (
      <Tr className="border-y-2 border-LinePrimary text-TextTertiary">
        <Td className="p-4">{`${first_name} ${last_name}`}</Td>
        <Td>{email}</Td>
        <Td>{phone_number}</Td>
        <Td>
          <Dropdown
            values={[2, 3]}
            options={["Agent", "Client"]}
            value={user_type}
          />
        </Td>
        <Td>
          <div className="flex flex-col gap-1 lg:flex-row lg:pl-10">
            <Button
              icon={
                <IconEdit fill="fill-BtnPrimary-end" width="30" height="30" />
              }
              fontsize="text-base"
              padding="p-1"
              bgcolor="bg-BGPrimary"
              custom="w-auto h-auto"
            />
            <Button
              text="enabled"
              fontsize="text-base"
              padding="p-1"
              bgcolor="bg-BtnQuanary-end"
            />
            <Button text="properties" fontsize="text-base" padding="p-1" />
          </div>
        </Td>
      </Tr>
    );
  };

  return (
    <div className="flex min-h-screen flex-col gap-4 bg-BGSecondary px-4 pt-16 md:px-40 lg:pt-32">
      <div className="w-full">
        <div className="lg:full float-right w-full lg:w-1/4 ">
          <Textfield
            placeholder="Search"
            icon={<IconSearch fill="fill-TextTertiary" />}
          />
        </div>
      </div>

      <div className="rounded-lg bg-BGPrimary p-4 shadow-lg">
        <Table>
          <Thead>
            <Tr className="border-b-2 border-LineSecondary text-left text-lg">
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Mobile Number</Th>
              <Th>Role</Th>
              <Th className="lg:pl-10">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>{users.map((user, i) => addUser(user))}</Tbody>
        </Table>
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
