import Purpose from "@/components/multi-merchants/Purpose";
import GetStarted from "@/components/landing-page/GetStarted";
import Ready from "@/components/multi-merchants/Ready";
import React from "react";
import SmartLink from "@/components/multi-merchants/SmartLink";
import AutoPay from "@/components/multi-merchants/WalletLogic";
import Order from "@/components/multi-merchants/Order";

const page = () => {
  return (
    <div className="text-[#000000]">
      <div className="px-5 lg:px-32 text-[#000000]">
        <Purpose />
        <SmartLink />
        <AutoPay />
        <Order />
      </div>
      <Ready />
      <div className="px-5 lg:px-32 text-[#000000]">
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
