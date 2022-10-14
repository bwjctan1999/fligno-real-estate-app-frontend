import { useState } from "react";
import IconSearch from "../../../assets/icons/IconSearch";
import Textfield from "../../../components/general/Textfield";

export default function PropertyFilter({ search, setSearch }) {
  const [input, setInput] = useState("");

  return (
    <div className="float-right w-full md:w-1/3 lg:w-1/4">
      <Textfield
        value={input}
        placeholder="Search"
        icon={<IconSearch />}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={() => setSearch(input)}
      />
    </div>
  );
}
