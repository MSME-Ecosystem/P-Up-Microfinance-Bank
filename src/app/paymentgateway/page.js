import Purpose from "@/components/paymentgateway/Purpose";
import GetStarted from "@/components/landing-page/GetStarted";
import Ready from "@/components/paymentgateway/Ready";
import React from "react";
import Order from "@/components/paymentgateway/Order";
import MDash from "@/components/paymentgateway/MDash"; 

const page = () => {
  return (
    <div className="text-[#000000]">

      <div className="px-5 lg:px-32 text-[#000000]">
        <Purpose /> 
        <MDash />
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
