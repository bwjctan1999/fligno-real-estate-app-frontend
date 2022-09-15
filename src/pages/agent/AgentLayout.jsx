import AgentNavbar from "../../components/agent/AgentNavbar";
import { Outlet } from "react-router-dom";

export default function AgentLayout() {
  return (
    <div>
      {/*<AgentNavbar />*/}
      <Outlet />
    </div>
  );
}
