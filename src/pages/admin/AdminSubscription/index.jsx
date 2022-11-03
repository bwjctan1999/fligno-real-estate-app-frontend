import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { GetSubscription } from "../../../api/ApiSubscription";

import TableSkeleton from "../../../components/general/TableSkeleton";
import Button from "../../../components/general/Button";
import IconSearch from "../../../assets/icons/IconSearch";
import Textfield from "../../../components/general/Textfield";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import SubscriptionItem from "./SubscriptionItem";

export default function AdminSubscription() {
  const [loading, setLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSubscription();
  }, []);

  const getSubscription = async () => {
    setLoading(true);
    const api_request = await GetSubscription();

    if (!api_request.error) {
      setSubscriptions(api_request.response.data.data);
    } else {
      alert(api_request.error);
      console.log(api_request.error);
    }
    setLoading(false);
  };

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
        {loading ? (
          <TableSkeleton />
        ) : subscriptions.length === 0 ? (
          <div className="mt-10 rounded-lg bg-BGPrimary p-5 text-center text-lg font-medium">
            <p>No Subscriptions Created</p>
          </div>
        ) : (
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
              <Tbody>
                {subscriptions.map((x) => (
                  <SubscriptionItem key={x.id} {...x} />
                ))}
              </Tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
