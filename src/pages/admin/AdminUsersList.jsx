import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import {
  SearchAgent,
  SearchClient,
  GetAgents,
  GetClients,
  DisableUser,
  RestoreUser,
} from "../../api/ApiUsers";

import Button from "../../components/general/Button";
import Textfield from "../../components/general/Textfield";
import Dropdown from "../../components/general/DropDown";

import IconEdit from "../../assets/icons/IconEdit";
import IconSearch from "../../assets/icons/IconSearch";

import { useEffect, useState } from "react";
import Paginator from "../../components/general/Paginator";
import TableSkeleton from "../../components/general/TableSkeleton";
import EnableDisableButton from "../../components/general/EnableDisableButton";

export default function AdminUsersList() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [userFilter, setUserFilter] = useState("Agent");

  const [paginationData, setPaginationData] = useState({
    current_page: 1,
    last_page: null,
    first_page_url: null,
    last_page_url: null,
    next_page_url: null,
    prev_page_url: null,
  });

  useEffect(() => {
    getData("", userFilter);
  }, [userFilter]);

  const getData = async (url, userFilter) => {
    setLoading(true);
    setUsers([]);
    let api_request;

    switch (userFilter) {
      case "Agent":
        api_request = await GetAgents();
        break;
      case "Client":
        api_request = await GetClients();
        break;
    }

    console.log(api_request.response);

    if (!api_request.error) {
      setUsers(api_request.response.data.data);
      setPaginationData({
        current_page: api_request.response.data.current_page,
        last_page: api_request.response.data.last_page,
        first_page_url: api_request.response.data.first_page_url,
        last_page_url: api_request.response.data.last_page_url,
        next_page_url: api_request.response.data.next_page_url,
        prev_page_url: api_request.response.data.prev_page_url,
      });
    } else {
      console.log(api_request);
    }
    setLoading(false);
  };

  const searchUser = async () => {
    setLoading(true);
    setUsers([]);
    let api_request;

    switch (userFilter) {
      case "Agent":
        api_request = await SearchAgent(search);
        break;
      case "Client":
        api_request = await SearchClient(search);
        break;
    }

    if (!api_request.error) {
      setUsers(api_request.response.data.data);
      setPaginationData({
        current_page: api_request.response.data.current_page,
        last_page: api_request.response.data.last_page,
        first_page_url: api_request.response.data.first_page_url,
        last_page_url: api_request.response.data.last_page_url,
        next_page_url: api_request.response.data.next_page_url,
        prev_page_url: api_request.response.data.prev_page_url,
      });
    } else {
      console.log(api_request);
    }

    setLoading(false);
  };

  const addUser = ({
    id,
    email,
    first_name,
    last_name,
    phone_number,
    deleted_at,
  }) => {
    return (
      <Tr key={id} className="border-y-2 border-LinePrimary text-TextTertiary">
        <Td className="p-4">{`${first_name} ${last_name}`}</Td>
        <Td>{email}</Td>
        <Td>{phone_number}</Td>
        <Td>{userFilter}</Td>
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
            <EnableDisableButton
              fontsize="text-base"
              padding="p-1"
              bgcolor={deleted_at ? "bg-BtnSecondary" : "bg-BtnQuanary-end"}
              initialState={deleted_at ? false : true}
              id={id}
              enableRequest={RestoreUser}
              disableRequest={DisableUser}
            />
            <Button text="properties" fontsize="text-base" padding="p-1" />
          </div>
        </Td>
      </Tr>
    );
  };

  return (
    <div className="flex min-h-screen flex-col gap-4 bg-BGSecondary px-4 pt-16 lg:px-40 lg:pt-32">
      <div className="flex w-full flex-col-reverse justify-end gap-4 lg:flex-row">
        <div className="lg:full float-right w-full lg:w-1/6 ">
          <Dropdown
            values={["Agent", "Client"]}
            options={["Agent", "Client"]}
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
          />
        </div>
        <div className="lg:full float-right w-full lg:w-1/4 ">
          <Textfield
            value={search}
            placeholder="Search"
            icon={<IconSearch fill="fill-TextTertiary" />}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={() => searchUser()}
          />
        </div>
      </div>
     
      {loading ? (
        <TableSkeleton />
      ) : users.length === 0 ? (
        <div className="mt-10 rounded-lg bg-BGPrimary p-5 text-center text-lg font-medium">
          <p>No Clients Found</p>
        </div>
      ) : (
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
            <Tbody>{users.map((user) => addUser(user))}</Tbody>
          </Table>
        </div>
      )}
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
