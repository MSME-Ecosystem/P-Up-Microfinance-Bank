import GetStarted from "@/components/landing-page/GetStarted";
import Find from "@/components/merchant-discovery/Find";
import Onetime from "@/components/merchant-discovery/Onetime";
import Risky from "@/components/merchant-discovery/Risky";
import Trust from "@/components/merchant-discovery/Trust";
import React from "react";

const page = () => {
  return (
    <div className="text-black">
      <div className="lg:px-24 px-5">
        <Find />
        <Onetime />
        <Trust />
      </div>
      <Risky />
      <div className="lg:px-40 px-5">
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
