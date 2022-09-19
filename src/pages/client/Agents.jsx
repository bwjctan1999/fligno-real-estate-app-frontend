import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

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
      <div>
        <img src={agent.url} />
        <h3>{agent.title}</h3>
      </div>
    );
  };

  return (
    <div>
      <div className="flex w-full flex-col-reverse items-center justify-center gap-20 bg-BGSecondary px-4 pb-28 pt-36 md:px-24 lg:flex-row lg:px-32">
        <div className="flex flex-col gap-4 text-center lg:w-1/2 lg:text-left">
          <h1 className=" text-5xl font-bold">Meet Our Team</h1>
          <p className="text-xl font-medium">
            Discover Turnkey's top-rated agents today and enjoy secure real
            estate transactions!
          </p>
        </div>
        <div className="w-full lg:flex">
          <DesignAgents />
        </div>
      </div>
      <div className="p-32 text-center">
        <h2 className="text-2xl font-medium">Our Agents</h2>
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <div className="grid grid-cols-3 gap-20">
          {agents.map((agent) => listAgent(agent))}
        </div>
      </div>
    </div>
  );
}
