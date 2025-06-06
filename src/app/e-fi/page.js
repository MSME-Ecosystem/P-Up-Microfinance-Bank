
import PaymentAutomation from "@/components/e-fi/PaymentAutomation";
import Purpose from "@/components/e-fi/Purpose";
import VirtualAccounts from "@/components/e-fi/VirtualAccounts";
import WalletLogic from "@/components/e-fi/WalletLogic";
import GetStarted from "@/components/landing-page/GetStarted";
import Ready from "@/components/e-fi/Ready";
import React from "react";

const page = () => {
  return (
    <div className="text-[#000000]">

      <div className="px-5 lg:px-32 text-[#000000]">
        <Purpose />
        <VirtualAccounts />
        <WalletLogic />
        <PaymentAutomation />


      </div>
      <Ready />
      <div className="px-5 lg:px-32 text-[#000000]">
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
