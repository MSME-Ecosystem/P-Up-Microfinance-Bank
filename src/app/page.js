import Built from "@/components/landing-page/Built";
import Designed from "@/components/landing-page/Designed";
import Everything from "@/components/landing-page/Everything";
import GetStarted from "@/components/landing-page/GetStarted";
import Hero from "@/components/landing-page/Hero";
import Purpose from "@/components/landing-page/Purpose";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />

      <div className="px-5 lg:px-40 text-[#000000]">
        <Everything />
        <Purpose />
        <Built />
        <Designed />
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
