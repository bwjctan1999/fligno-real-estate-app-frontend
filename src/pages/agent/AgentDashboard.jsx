import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import IconProperties from "../../assets/icons/IconProperties";
import IconUsersList from "../../assets/icons/IconUsersList";
import DashboardCard from "../../components/general/DashboardCard";
import { GetDashboardInfo } from "../../api/ApiAgentDashboard";

export default function AgentDashboard() {
const [dashboardInfo, setDashboardInfo] = useState({
  clients: null,
  finished_clients: null,
  properties: null,
  });


useEffect(() => {

  
  const getDashboardInfo = async () => {

    const api_request =  await GetDashboardInfo();
   if (!api_request.error) {
    setDashboardInfo(api_request.response.data);
    console.log(api_request.response.data);
   } 
   else {
    console.log(api_request.error);
   }
  };
  getDashboardInfo();


},[]);

  return (
    <div className="w-screen bg-BGSecondary p-4 pt-20 md:h-screen md:px-20 md:pt-28 ">
      <div className="pb-7 text-4xl font-bold">Dashboard</div>

      <div className=" grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Properties"
          num= {dashboardInfo.properties}
          icon={<IconProperties width="100%" height="100%" />}
        />
        <DashboardCard
          title="Clients"
          num= {dashboardInfo.clients}
          icon={<IconProperties width="100%" height="100%" />}
        />
    
        <DashboardCard
          title="Reserved"
          num= {dashboardInfo.finished_clients}
          icon={<IconUsersList width="100%" height="100%" />}
        />
      </div>
    </div>
  );
}
