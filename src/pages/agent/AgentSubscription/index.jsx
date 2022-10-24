import Button from "../../../components/general/Button";
import { useState, useEffect } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { useLocation, useNavigate } from "react-router-dom";
import { GetSubscriptionForClient } from "../../../api/ApiSubscription";

export default function Subscription() {
  const location = useLocation();
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(location.state);

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
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 p-4 text-center">
      <h1 className="text-5xl font-bold text-TextPrimary">
        Change Your Subscription
      </h1>
      <p className="text-lg font-medium text-TextTertiary">
        Please selected a plan that you would want to change to.
      </p>
      <div className="grid grid-cols-1 justify-center gap-5 lg:grid-cols-3">
        {plans.map((x) => renderCard(x))}
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
