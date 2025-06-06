import GetStarted from "@/components/landing-page/GetStarted";
import Automate from "@/components/reconcilex/Automate";
import Cards from "@/components/reconcilex/Cards";
import Running from "@/components/reconcilex/Running";
import React from "react";

const page = () => {
  return (
    <div className="text-black ">
      <div className="lg:px-24 px-5">
        <Automate />
        <Cards />
      </div>
      <Running />
       <div className="lg:px-40 px-5">
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
