import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import Button from "../../components/general/Button";
import IconSearch from "../../assets/icons/IconSearch";
import Textfield from "../../components/general/Textfield";

export default function AdminSubscription() {
  const addTableData = () => (
    <Tr className="border-y-2 border-LinePrimary text-TextTertiary">
      <Td>Premium</Td>
      <Td>
        <div>50 maximun postings</div>
      </Td>
      <Td>
        <div className="flex">P150.00</div>
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
    <div className="flex min-h-screen flex-col gap-4 bg-BGSecondary px-4 pt-16 md:px-20 lg:px-60 lg:pt-32">
      <div className="flex justify-between">
        <div className="">
          <Textfield placeholder="Search" icon={<IconSearch />} />
        </div>
        <div className="w-1/5">
          <Button text="Add New" fontsize="text-sm" custom="w-full ml-auto" />
        </div>
      </div>

      <div>
        <div className="rounded-lg bg-BGPrimary p-4 shadow-lg">
          <Table>
            <Thead>
              <Tr className="border-b-2 border-LineSecondary text-left text-lg">
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Price</Th>
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
