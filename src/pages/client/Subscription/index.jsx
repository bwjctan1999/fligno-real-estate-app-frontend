import Button from "../../../components/general/Button";
import { useState, useEffect } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { useNavigate } from "react-router-dom";
import { GetSubscriptionForClient } from "../../../api/ApiSubscription";

export default function Subscription() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  const [selected, setSelected] = useState("starter");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const api_request = await GetSubscriptionForClient();
    console.log(api_request);

    if (!api_request.error) {
      console.log(api_request.response);
      setPlans(api_request.response.data.data);
    } else {
      console.log(api_request.error);
    }
  };

  const renderCard = ({ title, description, price }) => {
    return (
      <SubscriptionCard
        selected={selected}
        title={title}
        price={price}
        desc={description}
        onClick={() => setSelected(title)}
      />
    );
  };

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-12 p-4 pt-24 text-center md:min-h-screen">
      <h1 className="text-5xl font-bold text-TextPrimary">Subscription</h1>
      <p className="text-base text-TextTertiary">
        Take a desired plan based on the number of properties you would want to
        sell or rent out
      </p>
      <div className="grid grid-cols-1 justify-center gap-5 lg:grid-cols-3">
        {plans.map((x) => renderCard(x))}
      </div>
      <Button
        text="Next"
        custom="lg:w-80"
        onClick={() => navigate("/awaiting-payment", { state: selected })}
      />
    </div>
  );
}
