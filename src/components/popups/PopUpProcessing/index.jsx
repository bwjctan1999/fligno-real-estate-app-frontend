import { useEffect, useState } from "react";
import Button from "../../general/Button";
import SuccessfulResult from "./SuccessfulResult";
import FailedResult from "./FailedResult";
import DesignSpinner from "../../../assets/svgs/DesignSpinner";

export default function PopUpProcessing({
  show = false,
  text = "please change text parameter",
  okayFunction,
  actionFunction,
}) {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (show) {
      const action = async () => {
        setLoading(true);
        const result = await actionFunction();
        setSuccess(result);
        setLoading(false);
      };
      action();
    }
  }, [show]);

  const resultHandler = (success) => {
    if (success)
      return <SuccessfulResult text={text} okayFunction={okayFunction} />;
    return <FailedResult okayFunction={okayFunction} />;
  };

  return show ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center bg-TextSecondary bg-opacity-30 px-4 py-8">
        <div className="relative mx-auto flex w-96 items-center justify-center rounded-md bg-TextOnDark p-10 shadow-lg">
          {loading ? <DesignSpinner /> : resultHandler(success)}
        </div>
      </div>
    </div>
  ) : null;
}
