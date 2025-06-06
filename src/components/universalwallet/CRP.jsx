import Image from "next/image";
import React from "react";


const CRP = () => {
  return (

    <div className="">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 flex ">
          <Image
            src="/ecrr.png"
            alt="Purpose"
            width={350}
            height={326}
            className="rounded-md max-w-full h-auto"
          />
        </div>

        <div className="flex flex-col items-start  lg:w-1/2 w-full lg:justify-end">
          <h1 className="py-5 text-[16px] leading-tight">
            Featuring
          </h1>
          <h1 className="text-[32px] text-[#0171DF] font-bold leading-tight">
            Cross-Platform Payment Acceptance
          </h1>
          <p className="text-[#1B1B1B] text-[16px] mt-4">
            Pay or receive funds via QR codes, payment links, PoS terminals, or Bluetooth—regardless of which app the buyer uses.
          </p>
        </div>


      </div>

    </div>
  );
};

export default CRP;
