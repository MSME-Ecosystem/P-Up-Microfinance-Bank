import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const GPS = () => {
  return (
    <div className="">

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

        <div className="flex flex-col items-start  md:w-1/2 w-full ">
          <h1 className="py-5 text-[16px] leading-tight">
            Featuring
          </h1>
          <h1 className="text-[28px] text-[#0171DF] font-bold leading-tight">
            GPS-Aware Territory Assignment
          </h1>
          <p className="text-[#1B1B1B] text-[16px] mt-4">
            Assign agents to specific zones or routes. Monitor movements and ensure coverage.</p>

        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/gps.png"
            alt="Purpose"
            width={350}
            height={326}
            className="rounded-md max-w-full h-auto"
          />
        </div>
      </div>

    </div>
  );
};

export default GPS;
