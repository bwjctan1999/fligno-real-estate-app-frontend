import DesignAgents from "../../assets/svgs/DesignAgents";

export default function AgentsPage() {
    return (
        <div className="w-full">
      <div className="flex w-full flex-col-reverse items-center justify-center gap-20 bg-BGSecondary py-20 px-4 md:px-24 lg:flex-row file:lg:px-32">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-Primary flex text-3xl font-bold lg:text-5xl">
            Meat Our Team
          </h1>
          <p className="text-justify text-xl font-medium leading-10 text-TextTertiary">
            Discover Turnkey's top-rated agents today  and enjoy secure real estate transactions!
          </p>
        </div>
        <div className="w-full lg:flex lg:w-1/2">
         <DesignAgents />
        </div>
      </div>

      <div className="flex min-h-screen flex-col gap-10 py-16 px-4 md:px-24 lg:px-32">
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl font-medium">Our Agents</p>
          <h1 className="flex text-4xl font-bold text-TextPrimary">
            Meet Our Team
          </h1>
        </div>
      </div>
      </div>
);
}