import { useEffect, useState } from "react";
import { PostEmail } from "../../../api/ApiEmail";

import VerificationSuccess from "./VerificationSuccess";
import VerificationFailed from "./VerificationFailed";

export default function EmailVerification() {
  const [success, setSuccess] = useState(false);

  const verifyAccount = async () => {
    const url = window.location.href;
    const token = url.slice(35);
    const api_request = await PostEmail(token);

    if (!api_request.error) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  useEffect(() => {
    verifyAccount();
  }, []);

  return (
    <div className="min-h-screen bg-BGSecondary">
      {success == true ? <VerificationSuccess /> : <VerificationFailed />}
    </div>
  );
}
