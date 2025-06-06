import GetStarted from "@/components/landing-page/GetStarted";
import Digital from "@/components/revenue-assurance/Digital";
import Market from "@/components/revenue-assurance/Market";
import Virtual from "@/components/revenue-assurance/Virtual";
import React from "react";

const page = () => {
  return (
    <div className="text-black">
      <div className="lg:px-24 px-5">
        <Digital />
        <Virtual />
      </div>
      <Market />
      <div className="lg:px-40 px-5">
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
