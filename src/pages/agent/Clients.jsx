import TableMaker from "../../components/general/TableMaker";
import AgentNavbar from "../../components/agent/AgentNavbar";

export default function Clients() {
  return (
    <div className=" bg-BGSecondary pt-16 lg:px-60 lg:pt-32">
      <AgentNavbar />
      <TableMaker />
    </div>
  );
}
