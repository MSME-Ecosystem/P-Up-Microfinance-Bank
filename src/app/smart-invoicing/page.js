import GetStarted from "@/components/landing-page/GetStarted";
import Featuring from "@/components/smart-invoicing/Featuring";
import Hero from "@/components/smart-invoicing/Hero";
import Ready from "@/components/smart-invoicing/Ready";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="px-5 lg:px-20 text-[#000000]">
        <Hero />
        <Featuring />
      </div>
      <div className="text-[#000000]">
        <Ready />
      </div>
      <div className="px-5 lg:px-32 text-[#000000]">
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
