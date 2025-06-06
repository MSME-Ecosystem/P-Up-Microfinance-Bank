import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const GPS = () => {
  return (
    <div className="">
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-40 mt-14">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center text-nowrap">
            GPS-Aware Territory Assignment
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4 w-[464px]">
            Assign agents to specific zones or routes. Monitor movements and
            ensure coverage.
          </p>
        </div>
        <div>
          <Image src="/gps.png" alt="Purpose" height={442} width={495} />
        </div>
      </div>
    </div>
  );
};

export default GPS;
