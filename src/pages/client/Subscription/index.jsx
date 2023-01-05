import Button from "../../../components/general/Button";
import { useState, useEffect } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { useNavigate } from "react-router-dom";
import { GetSubscriptionForClient } from "../../../api/ApiSubscription";
import SkeletonSubscriptionCard from "./SkeletonSubscriptionCard";

export default function Subscription() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  const [selected, setSelected] = useState("starter");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const api_request = await GetSubscriptionForClient();

    if (!api_request.error) {
      setPlans(api_request.response.data.data);
    } else {
      alert(api_request.error);
    }
  };

  const renderCard = ({ id, title, description, price }) => {
    return (
      <SubscriptionCard
        key={id}
        selected={selected}
        title={title}
        price={price}
        desc={description}
        onClick={() => {
          setSelected(title);
        }}
      />
    );
  };

  const getSelectedPrice = () => {
    const selectedPlan = plans.filter((x) => {
      if (selected === x.title) return x;
    });
    return selectedPlan[0].price;
  };

  const getSelectedId = () => {
    const selectedPlan = plans.filter((x) => {
      if (selected === x.title) return x;
    });

    return selectedPlan[0].id;
  };

  return (
    <div className="flex min-h-screen flex-col items-center gap-12 p-4 pt-24 text-center">
      <h1 className="text-5xl font-bold text-TextPrimary">Subscription</h1>
      <p className="text-lg font-medium text-TextTertiary">
        It seems you are not subscribed yet, Please selected a desired plan
        based on the number of properties you would want to sell or rent out
      </p>
      <div className="grid grid-cols-1 justify-center gap-5 lg:grid-cols-3">
        {plans.length === 0
          ? [...Array(3)].map((e, i) => <SkeletonSubscriptionCard />)
          : plans.map((x) => renderCard(x))}
      </div>

      <Button
        text="Next"
        custom="lg:w-80"
        onClick={() => {
          localStorage.setItem("selectedSubscription", getSelectedId());
          navigate("/awaiting-payment", { state: getSelectedPrice() });
        }}
      />
    </div>
  );
}
