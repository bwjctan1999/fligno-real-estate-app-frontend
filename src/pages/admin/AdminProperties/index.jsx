import { useState } from "react";
import IconLayoutList from "../../../assets/icons/IconLayoutList";
import IconGrid from "../../../assets/icons/IconGrid";

import PropertyList from "../../../components/general/PropertyList";
import PropertyFilter from "../../../components/general/PropertyList/PropertyFilter";
import AdminPropertiesTable from "./AdminPropertiesTable";

export default function AdminProperties() {
  const [tableMode, setTableMode] = useState(true);

  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-BGSecondary px-4 py-24 lg:px-24">
      <div className="mb-5 text-4xl font-bold text-TextTertiary">
        Properties
      </div>
      <div className="flex w-full justify-end gap-4">
        <button onClick={() => setTableMode(!tableMode)}>
          {tableMode ? <IconLayoutList /> : <IconGrid />}
        </button>
        <PropertyFilter search={search} setSearch={setSearch} />
      </div>
      {tableMode ? (
        <AdminPropertiesTable search={search} />
      ) : (
        <PropertyList search={search} url="admin/property-list" />
      )}
    </div>
  );
}
