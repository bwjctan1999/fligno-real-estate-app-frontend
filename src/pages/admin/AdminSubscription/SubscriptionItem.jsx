import { useState } from "react";
import { Tr, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Button from "../../../components/general/Button";

export default function SubscriptionItem({ id, title, description, price }) {
  const [deleted, setDeleted] = useState(false);

  const deleteHandler = () => {};

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
            />
            <Button
              text="Remove"
              fontsize="text-base"
              padding="p-1"
              custom="md:my-3"
              bgcolor="bg-gradient-to-r from-BtnTertiary-start to-BtnTertiary-end"
              onClick={() => {
                setDeleted(true);
              }}
            />
          </div>
        </div>
      </Td>
    </Tr>
  );
}
