import IconProperties from "../../assets/icons/IconProperties";
import IconUsersList from "../../assets/icons/IconUsersList";
import DashboardCard from "../../components/general/DashboardCard";

export default function AgentDashboard() {
  return (
    <div className="w-screen bg-BGSecondary p-2 md:h-screen md:p-20">
      <div className="pb-7 text-4xl font-bold text-TextSecondary">
        Dashboard
      </div>

      <div className=" grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Properties"
          num="9"
          icon={<IconProperties fill="fill-TextTertiary" />}
        />
        <DashboardCard
          title="Rent"
          num="9"
          icon={<IconProperties fill="fill-TextTertiary" />}
        />
        <DashboardCard
          title="Reserved"
          num="9"
          icon={<IconProperties fill="fill-TextTertiary" />}
        />
        <DashboardCard title="Reserved" num="9" icon={<IconUsersList />} />
      </div>
    </div>
  );
}
