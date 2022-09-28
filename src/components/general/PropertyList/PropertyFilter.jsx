import IconSearch from "../../../assets/icons/IconSearch";
import Textfield from "../../../components/general/Textfield";

export default function PropertyFilter() {
  return (
    <div className="float-right w-full md:w-1/3 lg:w-1/4">
      <Textfield placeholder="Search" icon={<IconSearch />} />
    </div>
  );
}
