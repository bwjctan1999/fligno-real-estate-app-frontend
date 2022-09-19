export default function DashboardCard({ title, num, icon }) {
  return (
    <div className="border-1-8 border-transparent flex items-center justify-between space-y-2 rounded-md bg-BGPrimary text-TextTertiary shadow-md">
      <div className="w-1/2">
        <h2 className="text-center text-5xl font-bold">{num}</h2>
        <p className="text-center text-lg font-light">{title}</p>
      </div>
      <div className="w-1/2 p-8">{icon}</div>
    </div>
  );
}
