import axios from "axios";
import { useEffect, useState } from "react";

import DesignAgents from "../../assets/svgs/DesignAgents";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/photos",
});

export default function Agents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await client.get("?_limit=10");
        setAgents(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAgents();
  }, []);

  const listAgent = (agent) => {
    return (
      <div className="rounded-lg bg-BGSecondary shadow-lg">
        <img src={agent.url} className="rounded-t-lg" />
        <div className="py-5">
          <h2 className="text-2xl font-bold">John J. Doe</h2>
          <h3>Something Estates</h3>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex w-full flex-col-reverse items-center justify-center gap-20 bg-BGSecondary px-4 pt-16 pb-20 md:px-24 lg:flex-row lg:px-32 lg:pt-36">
        <div className="flex flex-col gap-4 text-center lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Meet Our Team</h1>
          <p className="text-xl font-medium">
            Discover Turnkey's top-rated agents today and enjoy secure real
            estate transactions!
          </p>
        </div>
        <div className="w-full px-10 lg:px-32">
          <DesignAgents />
        </div>
      </div>
      <div className="mt-10 p-4 text-center lg:px-32">
        <h2 className="text-2xl font-medium">Our Agents</h2>
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-24">
          {agents.map((agent) => listAgent(agent))}
        </div>
      </div>
    </div>
  );
}
