import IconArrowDown from "../../assets/icons/IconArrowDown";
import DesignSpinner from "../../assets/svgs/DesignSpinner";
import IconSuccessful from "../../assets/icons/IconSuccessful";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/general/Button";

import { PostSubscription } from "../../api/ApiSubscription";
import { ethers } from "ethers";

// 0xc2b520448aCAc4fD15ab528E5602746910867D49s

export default function PaymentMethod() {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const price = Number(location.state);

  async function sendTransaction() {
    if (!window.ethereum) throw new Error("Please Install Metamask");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[0];

    let params = [
      {
        from: accounts[0],
        to: "0xc2b520448aCAc4fD15ab528E5602746910867D49", // admin account
        value: Number(price * 1e18).toString(16), // {price} Error when converting to Hex
        /* gasPrice: '0x09184e72a000', // For use in private blockchains only (Ex: Ganache)
      gas: Number(21000).toString(16), */
      },
    ];
    await window.ethereum
      .request({ method: "eth_sendTransaction", params })
      .then((txhash) => {
        const selectedSubscription = localStorage.getItem(
          "selectedSubscription"
        );

        subscribeUser(selectedSubscription, txhash);
      })
      .catch((err) => {
        console.log(
          err + "Payment has been rejected by user. Refresh the page"
        );
        alert("Payment has been rejected by user"); // Remove if naa nay error page or redirect
      });
  }

  const subscribeUser = async (id, hash) => {
    setLoading(true);
    setLoaded(false);
    const api_request = await PostSubscription(id, hash);

    setLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);

    if (!api_request.error) {
      navigate("/agent");
      console.log(api_request.response);
    } else {
      alert(api_request.error);
      console.log(api_request.error);
    }
  };

  return (
    <div className="min-h-scree flex flex-col-reverse justify-center bg-BGPrimary lg:flex-row">
      <div className="flex justify-center p-4 pt-16">
        <iframe
          className="m-auto w-96 rounded-xl shadow-md"
          src="https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
          height="660px"
          width="482px"
          title="Onramper widget"
          frameBorder="0"
          allow="accelerometer; autoplay; camera; gyroscope; payment"
        ></iframe>
      </div>
      <div className="text flex h-screen flex-col items-center justify-center gap-10 p-4 text-center lg:p-20">
        <h1 className=" text-5xl font-bold text-TextTertiary">
          To Pay: Ξ {price}
        </h1>
        {loading ? (
          <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end p-2 lg:w-80">
            {loaded ? (
              <div className="animate-bounce">
                <IconSuccessful
                  width="32"
                  height="32"
                  color="text-TextOnDark"
                />
              </div>
            ) : (
              <div className="flex animate-fade-in items-center gap-1">
                <DesignSpinner
                  width="32"
                  height="32"
                  bgcolor="text-TextOnDark"
                  color="fill-BtnPrimary-end"
                />
                <p className="font-semibold text-TextOnDark">
                  Subscribing your Account...
                </p>
              </div>
            )}
          </div>
        ) : (
          <Button
            className="sendEthButton btn"
            text="Pay Now"
            custom="lg:w-80"
            onClick={() => {
              console.log(price);
              if (price === 0 || price === 0.0) {
                const selectedSubscription = localStorage.getItem(
                  "selectedSubscription"
                );

                subscribeUser(selectedSubscription);
              } else {
                sendTransaction();
              }
            }}
          />
        )}
        <div className="felx-col flex items-center lg:hidden">
          <p>scroll down</p>
          <IconArrowDown width="30" height="30" />
        </div>
      </div>
    </div>
  );
}
