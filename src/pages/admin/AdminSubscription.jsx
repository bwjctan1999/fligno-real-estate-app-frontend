import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { GetSubscription } from "../../api/ApiSubscription";

import Button from "../../components/general/Button";
import IconSearch from "../../assets/icons/IconSearch";
import Textfield from "../../components/general/Textfield";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function AdminSubscription() {
  const [subscriptions, setSubscriptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSubscription();
  }, []);

  const getSubscription = async () => {
    const api_request = await GetSubscription();

    if (!api_request.error) {
      console.log(api_request.response);
      setSubscriptions(api_request.response.data.data);
    } else {
      console.log(api_request.error);
    }
  };

  const addTableData = ({ id, title, description, price }) => (
    <Tr key={id} className="border-y-2 border-LinePrimary text-TextTertiary">
      <Td>{title}</Td>
      <Td>
        <div>{description}</div>
      </Td>
      <Td>
        <div className="flex">₱{price}</div>
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
          <Button
            text="Add New"
            fontsize="text-sm"
            custom="w-full ml-auto"
            onClick={() => navigate("/admin/add-subscription")}
          />
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
            <Tbody>{subscriptions.map((x) => addTableData(x))}</Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
