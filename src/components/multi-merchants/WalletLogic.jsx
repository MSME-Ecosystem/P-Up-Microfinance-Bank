import Image from "next/image";
import React from "react";


const WalletLogic = () => {
  return (

    <div className="py-24 ">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 flex ">
          <Image
            src="/ap.png"
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
            Automated Payment Splitting
          </h1>
          <p className="text-[#1B1B1B] text-[16px] mt-4">
            Funds are instantly distributed to each seller’s wallet or bank account—no manual work needed.</p>

        </div>


      </div>

    </div>
  );
};

export default WalletLogic;
