import Button from "../../../components/Button";
import { useState } from "react";
import SubscriptionCard from "./SubscriptionCard";

export default function Subscription() {
  const [selected, setSelected] = useState("starter");

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-12  p-4 text-center md:h-screen">
      <h1 className="text-5xl font-bold text-TextPrimary">Subscription</h1>
      <p className="text-base text-TextTertiary">
        Take a desired plan based on the number of properties you would want to
        sell or rent out
      </p>
      <div className="grid grid-cols-1 justify-center gap-5 lg:grid-cols-3">
        <SubscriptionCard title="Free" price="0.00" desc="5 maximum postings" />
        <SubscriptionCard
          title="Starter"
          price="100.00"
          desc="50 maximum postings"
        />
        <SubscriptionCard
          title="Premium"
          price="250.00"
          desc="Unlimited postings"
        />
      </div>
      <Button
        text="Next"
        custom="lg:w-80"
      />
    </div>
  );
}
