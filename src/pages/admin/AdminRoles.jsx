import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import IconUser from "../../assets/icons/IconUser";

import Button from "../../components/general/Button";

export default function AdminRoles() {
  const addTableData = () => (
    <Tr className="border-y-2 border-LinePrimary text-TextTertiary">
      <Td>Admin</Td>
      <Td>
        <div className="flex">
          1
          <IconUser />
        </div>
      </Td>
      <Td>
        <div className="flex w-full justify-end">
          <div className="flex w-full justify-end gap-2 lg:w-52">
            <Button
              text="Edit"
              fontsize="text-base"
              padding="p-1"
              custom="md:my-3"
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
            <Tbody>{[...Array(5)].map((x, i) => addTableData())}</Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
