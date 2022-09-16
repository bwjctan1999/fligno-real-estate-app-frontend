import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Button from "../../components/general/Button";
import Textfield from "../../components/general/Textfield";

import IconEdit from "../../assets/icons/IconEdit";
import IconSearch from "../../assets/icons/IconSearch";

export default function AdminUsersList() {
  const fillTable = () => {
    return (
      <Tr className="border-y-2 border-LinePrimary text-TextTertiary">
        <Td className="p-4">John J. Doe</Td>
        <Td>johndoe@gmail.com</Td>
        <Td>09090900909</Td>
        <Td>
          <div className="flex flex-col gap-1 lg:flex-row">
            <Button
              icon={
                <IconEdit fill="fill-BtnPrimary-end" width="30" height="30" />
              }
              fontsize="text-base"
              padding="p-0 pl-2"
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
    <div className="flex min-h-screen flex-col gap-4 bg-BGSecondary px-4 pt-16 md:px-20 lg:px-60 lg:pt-32">
      <div className="w-full">
        <div className="lg:full float-right w-full lg:w-1/4 ">
          <Textfield
            placeholder="Search"
            icon={<IconSearch fill="fill-TextTertiary" />}
          />
        </div>
      </div>
      <Tabs>
        <div className="flex">
          <TabList>
            <Tab>Agents</Tab>
            <Tab>Client</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="rounded-b-lg bg-BGPrimary p-4 shadow-lg">
            <Table>
              <Thead>
                <Tr className="border-b-2 border-LineSecondary text-left text-lg">
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Mobile Number</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>{[...Array(5)].map((x, i) => fillTable())}</Tbody>
            </Table>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="rounded-b-lg bg-BGPrimary p-4 shadow-lg">
            <Table>
              <Thead>
                <Tr className="border-b-2 border-LineSecondary text-left text-lg">
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Mobile Number</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>{[...Array(10)].map((x, i) => fillTable())}</Tbody>
            </Table>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
