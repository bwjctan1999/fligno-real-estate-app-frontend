import IconProperties from "../../assets/icons/IconProperties";
import IconUser from "../../assets/icons/IconUser";

export default function ClientDashboard() {
  return (
    <div className="bg-BGSecondary p-16 container mx-auto h-screen md:p-24">
      <div className="pb-7 text-4xl font-bold text-TextSecondary">
        Dashboard
      </div>
      <div className=" grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="w-full flex p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2 items-center gap-10 justify-between">
          <div>
            <h2 className="text-center text-5xl text-TextSecondary font-bold">19</h2>
            <p className="text-center text-lg text-TextSecondary font-light">Properties</p>
          </div>
          <div className="w-1/2">
            <IconProperties />
          </div>
        </div>

        <div className="flex p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2 items-center gap-10 justify-between">
          <div>
            <h2 className="text-center text-5xl text-TextSecondary font-bold">5</h2>
            <p className="text-center text-lg text-TextSecondary font-light">Rent</p>
          </div>
          <div className="w-1/2">
            <IconProperties />
          </div>
        </div>

        <div className="flex p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2 items-center gap-10 justify-between">
          <div>
            <h2 className="text-center text-5xl text-TextSecondary font-bold">1</h2>
            <p className="text-center text-lg text-TextSecondary font-light">Reserved</p>
          </div>
          <div className="w-1/2">
            <IconProperties />
          </div>
        </div>

        <div className="flex p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2 items-center gap-10 justify-between">
          <div>
            <h2 className="text-center text-5xl text-TextSecondary font-bold">3</h2>
            <p className="text-center text-lg text-TextSecondary font-light">New Clients</p>
          </div>
          <div className="w-1/2">
           <IconUser/>
          </div>
        </div>
      </div>
    </div>
  );
}
