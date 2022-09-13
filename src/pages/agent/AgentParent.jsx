import AgentNavbar from "../../components/agent/AgentNavbar";
import { Outlet } from "react-router-dom";

export default function AgentParent() {
  return (
    <div>
      <AgentNavbar />
      <Outlet />
    </div>
  );
}
