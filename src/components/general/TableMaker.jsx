import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Button from "./Button";

export default function TableMaker() {
  const addTableData = () => (
    <Tr className="bg- border-y-2 border-LinePrimary text-TextTertiary">
      <Td>John J. Doe</Td>
      <Td>Masaverte Residence</Td>
      <Td>johndoe@gmail.com</Td>
      <Td>0909 090 9090</Td>
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

  return (
    <div className="rounded-lg bg-BGPrimary p-4 shadow-lg">
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
        <Tbody>{[...Array(100)].map((x, i) => addTableData())}</Tbody>
      </Table>
    </div>
  );
}
