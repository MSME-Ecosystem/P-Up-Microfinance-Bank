import GetStarted from "@/components/landing-page/GetStarted";
import Built from "@/components/qr&tap-to-pay/Built";
import Qr from "@/components/qr&tap-to-pay/Qr";
import Smart from "@/components/qr&tap-to-pay/Smart";
import React from "react";

const page = () => {
  return (
    <div className="text-black ">
      <div className="lg:px-24 px-5">
        <Qr />
        <Smart />
      </div>
      <Built />
      <div className="lg:px-40 px-5">
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
