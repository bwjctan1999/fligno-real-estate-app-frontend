export default function DashboardCard({ title, num, icon }) {
  return (
    <div className="border-1-8 border-transparent flex items-center justify-between space-y-2 rounded-md bg-BGPrimary shadow-md">
      <div className="w-1/2">
        <h2 className="text-center text-5xl font-bold text-TextSecondary">
          {num}
        </h2>
        <p className="text-center text-lg font-light text-TextSecondary">
          {title}
        </p>
      </div>
      <div className="w-1/2 p-10">{icon}</div>
    </div>
  );
}
