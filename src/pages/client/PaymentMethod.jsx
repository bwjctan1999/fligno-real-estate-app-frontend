import IconArrowDown from "../../assets/icons/IconArrowDown";
import DesignSpinner from "../../assets/svgs/DesignSpinner";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/general/Button";
import { ethers } from "ethers";
// 0xc2b520448aCAc4fD15ab528E5602746910867D49

export default function PaymentMethod() {
  const location = useLocation();
  const price = location.state;

  /*  let accounts = [];
 async function connectWallet(){
    accounts = await window.ethereum.request({method:"eth_requestAccounts"})
    .catch((err)=>{
      console.log(err.code)
    })
  } */ // this shit broken

  async function sendTransaction() {
    //connectWallet();
    let params = [
      {
        /* from:accounts[0], */ // implement get accounts
        from: "0xaC6b1FD86DEb0EC4259C8D95D3248E44F9D4c4B6", //placeholder only
        to: "0xc2b520448aCAc4fD15ab528E5602746910867D49",
        value: Number(1000000000).toString(16), // in GWEI, find a way to accept TETHER
        gasPrice: "0x09184e72a000",
        gas: Number(21000).toString(16),
      },
    ];

    await window.ethereum
      .request({ method: "eth_sendTransaction", params })
      .then((txhash) => {
        console.log(txhash);
      })
      .catch((err) => {
        console.log(err.code);
      });
  }

  return (
    <div className="min-h-scree flex flex-col-reverse justify-center bg-BGPrimary lg:flex-row">
      <div className="flex justify-center p-4 pt-16">
        <iframe
          className="m-auto w-96 rounded-xl shadow-md"
          src="https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
          height="660px"
          width="482px"
          title="Onramper widget"
          frameborder="0"
          allow="accelerometer; autoplay; camera; gyroscope; payment"
        ></iframe>
      </div>
      <div className="text flex h-screen flex-col items-center justify-center gap-10 p-4 text-center lg:p-20">
        <h1 className=" text-5xl font-bold text-TextTertiary">
          Payment for ₮ {price}
        </h1>
        <Button
          class="sendEthButton btn"
          text="Pay Now"
          custom="lg:w-80"
          onClick={sendTransaction}
        ></Button>
        <div>
          <DesignSpinner />
          <span class="sr-only">Loading...</span>
        </div>
        <div className="flex flex-col items-center lg:hidden">
          <p>scroll down</p>
          <IconArrowDown width="30" height="30" />
        </div>
      </div>
    </div>
  );
}
