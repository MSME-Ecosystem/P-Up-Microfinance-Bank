import GetStarted from "@/components/landing-page/GetStarted";
import Hero from "@/components/smart-checkout/Hero";
import PaymentLink from "@/components/smart-checkout/PaymentLink";
import Ready from "@/components/smart-checkout/Ready";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="px-5 lg:px-20 text-[#000000]">
        <Hero />
        <PaymentLink />
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
