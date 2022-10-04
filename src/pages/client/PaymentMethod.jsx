import IconArrowDown from "../../assets/icons/IconArrowDown";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/general/Button";
import { ethers } from "ethers";
// 0xc2b520448aCAc4fD15ab528E5602746910867D49

export default function PaymentMethod() {
  const location = useLocation();
  const table = {
    Free:0,
    Starter: 1.70,
    Premium: 4.20,
  }
  const price = table[location.state]

 /*  let accounts = [];
 async function connectWallet(){
    accounts = await window.ethereum.request({method:"eth_requestAccounts"})
    .catch((err)=>{
      console.log(err.code)
    })
  } */ // this shit broken

  async function sendTransaction(){
    //connectWallet();
    let params =  [{
      /* from:accounts[0], */ // implement get accounts 
      from:'0xaC6b1FD86DEb0EC4259C8D95D3248E44F9D4c4B6', //placeholder only
      to: '0xc2b520448aCAc4fD15ab528E5602746910867D49',
      value: Number(1000000000).toString(16), // in GWEI, find a way to accept TETHER
      gasPrice: '0x09184e72a000',
      gas: Number(21000).toString(16),
    }]
 
    await window.ethereum.request({method: "eth_sendTransaction", params})
    .then((txhash)=>{
      console.log(txhash)
    })
    .catch((err)=>{
      console.log(err.code)
    })
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
        onClick={sendTransaction}> 
        </Button>
        <div>
          <svg
            className=" h-30 text-blue-600 mr-2 inline w-40 animate-spin rounded-full border-4 fill-BtnPrimary-start"
            viewBox="0 0 100 101"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
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
