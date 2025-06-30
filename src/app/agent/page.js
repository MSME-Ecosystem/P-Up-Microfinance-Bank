import Purpose from "@/components/agent/Purpose";
import GetStarted from "@/components/landing-page/GetStarted";
import Ready from "@/components/agent/Ready";
import React from "react";
import Order from "@/components/agent/Order";
import GPS from "@/components/agent/GPS";
import MDash from "@/components/agent/MDash";
import Wallet from "@/components/agent/Wallet";

const page = () => {
  return (
    <div className="text-[#000000]">
      <div className="px-5 lg:px-32 text-[#000000]">
        <Purpose />
        <GPS />
        <MDash />
        <Order />
        <Wallet />
      </div>
      <Ready />
      <div className="px-5 lg:px-32 text-[#000000]">
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
