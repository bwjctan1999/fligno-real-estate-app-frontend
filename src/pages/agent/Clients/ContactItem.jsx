import { useState } from "react";
import Button from "../../../components/general/Button";

import { Tr, Td } from "react-super-responsive-table";
import { RemoveContact } from "../../../api/ApiContactAgent";

export default function ContactItem({
  id,
  first_name,
  last_name,
  property_title,
  email,
  phone_number,
  deleted_at,
  userFilter,
}) {
  const [removed, setRemoved] = useState(false);

  const removeContact = async (id) => {
    const api_request = RemoveContact(id);

    if (!api_request.error) {
      console.log((await api_request).response);
    } else {
      console.log((await api_request).error);
    }
  };

  return removed ? null : (
    <Tr
      className="bg- border-y-2 border-LinePrimary text-TextTertiary"
    >
      <Td className="py-4">{`${first_name} ${last_name}`}</Td>
      <Td>{property_title}</Td>
      <Td>{email}</Td>
      <Td>{phone_number}</Td>
      <Td>
        {userFilter === "Contacts" ? (
          <Button
            text="Remove"
            fontsize="text-base"
            padding="p-1"
            custom="md:my-3"
            onClick={() => {
              removeContact(id);
              setRemoved(true);
            }}
          />
        ) : (
          deleted_at
        )}
      </Td>
    </Tr>
  );
}
