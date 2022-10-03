import Button from "../../../components/general/Button";
import { useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { useNavigate } from "react-router-dom";

export default function Subscription() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("starter");

  const table = {
    Free: 0,
    Starter: 1.70,
    Premium: 4.20,
  };

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-12  p-4 text-center md:h-screen">
      <h1 className="text-5xl font-bold text-TextPrimary">Subscription</h1>
      <p className="text-base text-TextTertiary">
        Take a desired plan based on the number of properties you would want to
        sell or rent out
      </p>
      <div className="grid grid-cols-1 justify-center gap-5 lg:grid-cols-3">
        <SubscriptionCard
          selected={selected}
          title="Free"
          price="0.00"
          desc="5 maximum postings"
          onClick={() => setSelected("Free")}
        />
        <SubscriptionCard
          selected={selected}
          title="Starter"
          price="1.70"
          desc="50 maximum postings"
          onClick={() => setSelected("Starter")}
        />
        <SubscriptionCard
          selected={selected}
          title="Premium"
          price="4.20"
          desc="Unlimited postings"
          onClick={() => setSelected("Premium")}
        />
      </div>
      <Button
        text="Next"
        custom="lg:w-80"
        onClick={() => navigate("/awaiting-payment", { state: selected })}
      />
    </div>
  );
}
