import { useNavigate } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import IconUser from "../../assets/icons/IconUser";

import Button from "../../components/general/Button";

export default function AdminRoles() {
  const navigate = useNavigate();
  const addTableData = ({ name, count }) => (
    <Tr className="border-y-2 border-LinePrimary text-TextTertiary">
      <Td>{name}</Td>
      <Td>
        <div className="flex">
          {count}
          <IconUser />
        </div>
      </Td>
      <Td>
        <div className="flex w-full justify-end">
          <div className="flex w-full justify-end gap-2 lg:w-60">
            <Button
              text="Permissions"
              fontsize="text-base"
              padding="p-1"
              custom="md:my-3"
              onClick={() => navigate("/admin/permissions/1")}
            />
            <Button
              text="Remove"
              fontsize="text-base"
              padding="p-1"
              custom="md:my-3"
              bgcolor="bg-gradient-to-r from-BtnTertiary-start to-BtnTertiary-end"
            />
          </div>
        </div>
      </Td>
    </Tr>
  );

  return (
    <div className="flex min-h-screen flex-col gap-4 bg-BGSecondary pt-16 md:px-20 lg:px-60 lg:pt-32">
      <Button text="Add Role" fontsize="text-sm" custom="md:w-1/5 ml-auto" />
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
              {addTableData({ name: "Client", count: 12837 })}
              {addTableData({ name: "Agent", count: 142 })}
              {addTableData({ name: "Admin", count: 1 })}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
