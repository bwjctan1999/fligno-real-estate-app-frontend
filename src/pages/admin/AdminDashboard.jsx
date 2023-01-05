import { useEffect } from "react";
import IconProperties from "../../assets/icons/IconProperties";
import IconUsersList from "../../assets/icons/IconUsersList";
import DashboardCard from "../../components/general/DashboardCard";

import { GetAdminDashboardInfo } from "../../api/ApiDashboard";
import { useState } from "react";

export default function AdminDashboard() {
  const [propertiesCount, setPropertiesCount] = useState(null);
  const [usersCount, setUsersCount] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const api_request = await GetAdminDashboardInfo();

    if (!api_request.error) {
      setPropertiesCount(api_request.response.data.properties);
      setUsersCount(api_request.response.data.users);
    } else {
      console.log(api_request.error);
      alert(api_request.error);
    }
  };

  return (
    <div className="w-screen bg-BGSecondary p-4 pt-16 md:h-screen md:p-24">
      <div className="pb-7 text-4xl font-bold">Dashboard</div>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Properties"
          num={propertiesCount}
          icon={<IconProperties width="100%" height="100%" />}
        />
        <DashboardCard
          title="Users"
          num={usersCount}
          icon={<IconUsersList width="100%" height="100%" />}
        />
      </div>
    </div>
  );
}
