import Purpose from "@/components/escrow/Purpose";
import GetStarted from "@/components/landing-page/GetStarted";
import Ready from "@/components/escrow/Ready";
import React from "react";
import Order from "@/components/escrow/Order";
import ERP from "@/components/escrow/ERP";
import SafeHands from "@/components/escrow/SafeHands";
import EscrowRules from "@/components/escrow/EscrowRules";

const page = () => {
  return (
    <div className="text-[#000000]">
      <div className="px-5 lg:px-32 text-[#000000]">
        <Purpose />
        <SafeHands />
        <Order />
        <EscrowRules/>
        <ERP />

      </div>
      <Ready />
      <div className="px-5 lg:px-32 text-[#000000]">
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
