import IconProperties from "../../assets/icons/IconProperties";
import IconUsersList from "../../assets/icons/IconUsersList";
import DashboardCard from "../../components/general/DashboardCard";

export default function AdminDashboard() {
  return (
    <div className="w-screen bg-BGSecondary p-4 pt-16 md:h-screen md:p-24">
      <div className="pb-7 text-4xl font-bold">Dashboard</div>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Properties"
          num="19"
          icon={<IconProperties width="100%" height="100%" />}
        />
        <DashboardCard
          title="Users"
          num="5"
          icon={<IconUsersList width="100%" height="100%" />}
        />
      </div>
    </div>
  );
}
