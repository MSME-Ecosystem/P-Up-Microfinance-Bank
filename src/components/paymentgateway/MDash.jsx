import Image from "next/image";
import React from "react";


const MDash = () => {
  return (

    <div className="py-24 ">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 flex ">
          <Image
            src="/mch.png"
            alt="Purpose"
            width={350}
            height={326}
            className="rounded-md max-w-full h-auto"
          />
        </div>

        <div className="flex flex-col items-start  md:w-1/2 w-full md:justify-end">
          <h1 className="py-5 text-[16px] leading-tight">
            Featuring
          </h1>
          <h1 className="text-[28px] text-[#0171DF] font-bold leading-tight">
            Multi-Channel Payment Acceptance
          </h1>
          <p className="text-[#1B1B1B] text-[16px] mt-4">
            Support collections via QR codes, payment links, PoS, bank transfers, and mobile wallets to maximize payment options for users.
          </p>

        </div>


      </div>

    </div>
  );
};

export default MDash;
