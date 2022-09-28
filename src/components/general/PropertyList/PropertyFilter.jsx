import IconSearch from "../../../assets/icons/IconSearch";
import Textfield from "../../../components/general/Textfield";

export default function PropertyFilter() {
  return (
<div className="flex lg:justify-end md:">
          <div className="lg:w-1/4 md:w-1/3 w-full" >
           
            <Textfield placeholder="Search" icon={<IconSearch />} />
      
          </div>
      
    </div>
  );
}
