import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import AdminNavbar from "../../components/admin/AdminNavbar";
import ToggleButton from "../../components/general/ToggleButton";
import Textfield from "../../components/general/Textfield";

export default function AdminEditRole() {
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-BGSecondary pt-16 lg:px-60 lg:pt-32">
      <AdminNavbar />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="w-full px-4 lg:px-0">
          <h1 className="mb-1 text-lg font-bold">Role Name</h1>
          <Textfield placeholder="e.g. Admin" />
        </div>
        <div className="w-full px-4 lg:px-0">
          <h1 className="mb-1 text-lg font-bold">Description</h1>
          <Textfield placeholder="e.g. Allows members to..." />
        </div>
      </div>

      <div>
        <div className="rounded-lg bg-BGPrimary p-4 shadow-lg">
          <Table>
            <Thead>
              <Tr className="border-b-2 border-LineSecondary text-left text-lg">
                <Th>Role</Th>
                <Th>Members</Th>
                <Th className="float-right">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className="border-y-2 border-LinePrimary text-TextTertiary">
                <Td>Access Admin App</Td>
                <Td>Allows members to access the Admin App</Td>
                <Td>
                  <div className="flex md:p-4 lg:justify-end">
                    <ToggleButton id="access-admin" />
                  </div>
                </Td>
              </Tr>
              <Tr className="border-y-2 border-LinePrimary text-TextTertiary">
                <Td>Access Agent App</Td>
                <Td>Allows members to access the Admin App</Td>
                <Td>
                  <div className="flex md:p-4 lg:justify-end">
                    <ToggleButton id="access-agent" />
                  </div>
                </Td>
              </Tr>
              <Tr className="border-y-2 border-LinePrimary text-TextTertiary">
                <Td>Access Client App</Td>
                <Td>Allows members to access the Admin App</Td>
                <Td>
                  <div className="flex md:p-4 lg:justify-end">
                    <ToggleButton id="access-client" />
                  </div>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

{
  /* 

<div className="flex w-full justify-end">
          <div className="flex w-full justify-end gap-2 lg:w-52"></div>
        </div>
*/
}
