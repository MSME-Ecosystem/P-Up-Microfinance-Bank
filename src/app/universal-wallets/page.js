import GetStarted from "@/components/landing-page/GetStarted";
import Ready from "@/components/universalwallet/Ready";
import React from "react";
import Order from "@/components/universalwallet/Order";
import ERP from "@/components/universalwallet/ERP";
import Cards from "@/components/universalwallet/Cards";
import CRP from "@/components/universalwallet/CRP";
import Purpose from "@/components/universalwallet/Purpose";

const page = () => {
  return (
    <div className="text-[#000000]">
      <div className="px-5 lg:px-32 text-[#000000]">
        <Purpose />
        <Cards />

        <CRP />
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
