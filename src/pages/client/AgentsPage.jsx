import DesignAgents from "../../assets/svgs/DesignAgents";
import agent1 from "../../assets/imgs/agent1.jpg";
import agent2 from "../../assets/imgs/agent2.jpg";
import agent4 from "../../assets/imgs/agent4.jpg";

export default function AgentsPage() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col-reverse items-center justify-center gap-20 bg-BGSecondary py-20 px-4 md:px-24 lg:flex-row file:lg:px-32">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-Primary flex text-3xl font-bold lg:text-5xl">
            Meat Our Team
          </h1>
          <p className="text-justify text-xl font-medium leading-10 text-TextTertiary">
            Discover Turnkey's top-rated agents today and enjoy secure real
            estate transactions!
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

          <div className="mx-10 mt-20 grid grid-cols-3 gap-20">
            <div className="card bg-BGSecondary rounded-b-lg ">
              <img
                src={agent1}
                alt="agent"
                className="w-auto h-auto block mx-auto rounded-t-lg"
              ></img>
              <div className="m-4">
                <h2 className="text-center font-bold text-xl ">Vanessa Amandoron</h2>
                <p className="block text-center text-base pt-1">Real Estate Agent</p>
              </div>
            </div>

            <div className="card bg-BGSecondary rounded-b-lg">
              <img
                src={agent4}
                alt="agent"
                className="w-auto h-auto block mx-auto rounded-t-lg"
              ></img>
              <div className="m-4">
                <h2 className="text-center font-bold text-xl">Carl Jarabelo</h2>
                <p className="block text-center text-base pt-1">Real Estate Agent</p>
              </div>
            </div>

            <div className="card bg-BGSecondary rounded-b-lg">
              <img
                src={agent2}
                alt="agent3"
                className="w-auto h-auto block mx-auto rounded-t-lg"
              ></img>
              <div className="m-4">
                <h2 className="text-center font-bold text-xl">Cristine Mae Aratan</h2>
                <p className="block text-center text-base pt-1">Real Estate Agent</p>
              </div>
            </div>

            <div className="card bg-BGSecondary rounded-b-lg">
              <img
                src={agent4}
                alt="agent"
                className="w-auto h-auto block mx-auto rounded-t-lg"
              ></img>
              <div className="m-4">
                <h2 className="text-center font-bold text-xl">Benz Tan</h2>
                <p className="block text-center text-base pt-1">Real Estate Agent</p>
              </div>
            </div>

            <div className="card bg-BGSecondary rounded-b-lg">
              <img
                src={agent1}
                alt="agent"
                className="w-auto h-auto block mx-auto rounded-t-lg"
              ></img>
              <div className="m-4">
                <h2 className="text-center font-bold text-xl">Rio Gwyneth Soliva</h2>
                <p className="block text-center text-base pt-1">Real Estate Agent</p>
              </div>
            </div>

            <div className="card bg-BGSecondary rounded-b-lg">
              <img
                src={agent4}
                alt="agent"
                className="w-auto h-auto block mx-auto rounded-t-lg"
              ></img>
              <div className="m-4">
                <h2 className="text-center font-bold text-xl">Benedict Lasanas</h2>
                <p className="block text-center text-base pt-1">Real Estate Agent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
