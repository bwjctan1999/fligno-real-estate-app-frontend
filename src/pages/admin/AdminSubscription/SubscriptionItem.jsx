import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tr, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { DeleteSubscription } from "../../../api/ApiSubscription";
import Button from "../../../components/general/Button";

export default function SubscriptionItem({ id, title, description, price }) {
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(false);

  const deleteHandler = async (id) => {
    const api_request = await DeleteSubscription(id);

    if (!api_request.error) {
      setDeleted(true);
    } else {
      console.log(api_request.error);
      alert(api_request.error);
    }
  };

  return deleted ? null : (
    <Tr className="border-y-2 border-LinePrimary text-TextTertiary">
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
              onClick={() =>
                navigate("/admin/edit-subscription", {
                  state: {
                    id: id,
                    title: title,
                    description: description,
                    price: price,
                  },
                })
              }
            />
            <Button
              text="Remove"
              fontsize="text-base"
              padding="p-1"
              custom="md:my-3"
              bgcolor="bg-gradient-to-r from-BtnTertiary-start to-BtnTertiary-end"
              onClick={() => deleteHandler(id)}
            />
          </div>
        </div>
      </Td>
    </Tr>
  );
}
