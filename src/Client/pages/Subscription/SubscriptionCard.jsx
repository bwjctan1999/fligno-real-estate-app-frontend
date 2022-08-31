import { useSelector, useDispatch } from "react-redux";
import { setSubscription } from "../../../redux/slices/subscriptionSlice";

export default function SubscriptionCard({ title, price, desc }) {
  const subscription = useSelector((state) => state.subscription.value);
  const dispatch = useDispatch();

  const changeCardColor = () =>
    subscription === title
      ? "bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end"
      : "bg-BGSecondary";
  const changeTitleColor = () =>
    subscription === title ? "text-TextOnDark" : "text-TextTertiary";
  const changePriceColor = () =>
    subscription === title ? "text-TextOnDark" : "text-TextPrimary";
  const changeDescColor = () =>
    subscription === title ? "text-TextOnDark" : "text-TextSecondary";

  return (
    <div
      className={`${changeCardColor()} flex flex-col gap-14 rounded-lg  px-10 pt-5 pb-14`}
      onClick={() => dispatch(setSubscription(title))}
    >
      <h2 className={`${changeTitleColor()} text text-2xl font-bold`}>
        {title}
      </h2>
      <p className={`${changeTitleColor()} text-4xl font-semibold`}>
        ₱ {price}/<span className="text-2xl">month</span>
      </p>
      <p className={`${changeDescColor()} font-medium`}>{desc}</p>
    </div>
  );
}
