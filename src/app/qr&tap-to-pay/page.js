import GetStarted from "@/components/landing-page/GetStarted";
import Built from "@/components/qr&tap-to-pay/Built";
import Dynamic from "@/components/qr&tap-to-pay/Dynamic";
import Generator from "@/components/qr&tap-to-pay/Generator";
import Qr from "@/components/qr&tap-to-pay/Qr";
import Reconcilation from "@/components/qr&tap-to-pay/Reconcilation";
import Smart from "@/components/qr&tap-to-pay/Smart";
import React from "react";

const page = () => {
  return (
    <div className="text-black ">
      <div className="lg:px-24 px-5">
        <Qr />
        <Smart />
        <Generator />
        <Dynamic />
        <Reconcilation />
      </div>

      <Built />
      <div className="lg:px-40 px-5">
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
